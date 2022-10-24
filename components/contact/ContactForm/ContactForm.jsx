/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import InternalLoader from '../../UIs/InternalLoader/InternalLoader';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import validator from 'validator';

import { toast } from "react-toastify";

import axios from '../../../utils/axios';

import cls from './contactForm.module.scss';

const ContactForm = ({ contactInfo }) => {
  const [fields, setFields] = useState({
    api_key: "402784613679330",
    topic_id: "-",
    company_name: "",
    contact_name: "",
    contact_phone: "",
    contact_email: "",
    contact_subject: "",
    contact_message: ""
  });
  const [emptyFields, setEmptyFields] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const handleFields = (e) => {
    setFields(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const sendMessage = async () => {
    const emptyFieldsFound = Object.values(fields).filter(field => field === '');

    if (emptyFieldsFound.length) return setEmptyFields(true);
    else setEmptyFields(false);

    if (!validator.isEmail(fields.contact_email)) return setErrorEmail(true);
    else setErrorEmail(false)

    setLoading(true);

    const response = await axios.post('/contact', fields).catch(err => {
      setLoading(false)
      console.log(err)
      if (err.response.data.errors) {
        Object.values(err.response.data.errors).forEach(error => {
          errorNotify(error)
        })
      } else {
        errorNotify(err.message)
      }
    });

    if (!response) return;

    setLoading(false);

    successNotify('Form submitted successfully')

    console.log(response)
  }

  const successNotify = (msg) => toast.success(`${msg}`);
  const errorNotify = (msg) => toast.error(`${msg}`);

  return (
    <div className={cls.contactForm}>

      {loading && <InternalLoader />}

      <Container maxWidth="xl">

        <Grid container spacing={10}>

          <Grid item xs={12} lg={7}>

            <div className={cls.form}>

              <h2>{t("contact.getInTouch")}</h2>

              <div className={cls.field}>
                <label>{t("contact.company")}</label>
                <input type="text" placeholder={t("contact.company")} name='company_name' value={fields.company_name || ''} onChange={(e) => handleFields(e)} className={!fields.company_name && emptyFields ? cls.error : ''} />
                {!fields.company_name && emptyFields && <span>This field can not be empty</span>}
              </div>

              <div className={cls.field}>
                <label>{t("contact.name")}</label>
                <input type="text" placeholder={t("contact.name")} name='contact_name' value={fields.contact_name || ''} onChange={(e) => handleFields(e)} className={!fields.contact_name && emptyFields ? cls.error : ''} />
                {!fields.contact_name && emptyFields && <span>This field can not be empty</span>}
              </div>

              <div className={cls.field}>
                <label>{t("contact.phone")}</label>
                <input type="text" placeholder={t("contact.phone")} name='contact_phone' value={fields.contact_phone || ''} onChange={(e) => handleFields(e)} className={!fields.contact_phone && emptyFields ? cls.error : ''} />
                {!fields.contact_phone && emptyFields && <span>This field can not be empty</span>}
              </div>

              <div className={cls.field}>
                <label>{t("contact.email")}</label>
                <input type="text" placeholder={t("contact.email")} name='contact_email' value={fields.contact_email || ''} onChange={(e) => handleFields(e)} className={!fields.contact_email && emptyFields ? cls.error : ''} />
                {!fields.contact_email && emptyFields && <span>This field can not be empty</span>}
                {errorEmail && <span>Email is not valid</span>}
              </div>

              <div className={cls.field}>
                <label>{t("contact.subject")}</label>
                <input type="text" placeholder={t("contact.subject")} name='contact_subject' value={fields.contact_subject || ''} onChange={(e) => handleFields(e)} className={!fields.contact_subject && emptyFields ? cls.error : ''} />
                {!fields.contact_subject && emptyFields && <span>This field can not be empty</span>}
              </div>

              <div className={cls.field}>
                <label>{t("contact.message")}</label>
                <textarea type="text" placeholder={t("contact.message")} name='contact_message' value={fields.contact_message || ''} onChange={(e) => handleFields(e)} className={!fields.contact_message && emptyFields ? cls.error : ''}></textarea>
                {!fields.contact_message && emptyFields && <span>This field can not be empty</span>}
              </div>

              <p><input type="checkbox" /> {t("contact.agree")}</p>

              <div className={cls.btn}>
                <button onClick={sendMessage}>{t("contact.send")}</button>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} lg={5}>

            <div className={cls.features}>

              <img src="/imgs/contact/man.png" alt="manImage" className={cls.man} />

              <div className={cls.question}>

                <h2>{t("contact.questions")}</h2>

                <p>{t("contact.questionContent")}</p>

              </div>

              <div className={cls.feature}>
                <img src="/imgs/contact/contact1.png" alt="contactImage" />
                <div>
                  <h3>{t("contact.emailUs")}</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </div>

              <div className={cls.feature}>
                <img src="/imgs/contact/contact2.png" alt="contactImage" />
                <div>
                  <h3>{t("contact.callUs")}</h3>
                  <p>{contactInfo.mobile}</p>
                </div>
              </div>

              <div className={cls.feature}>
                <img src="/imgs/contact/contact3.png" alt="contactImage" />
                <div>
                  <h3>{t("contact.visit")}</h3>
                  <p>{contactInfo.address}</p>
                </div>
              </div>

            </div>

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default ContactForm