/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './contactForm.module.scss';

const ContactForm = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.contactForm}>

      <Container maxWidth="xl">

        <Grid container spacing={10}>

          <Grid item xs={12} lg={7}>

            <div className={cls.form}>

              <h2>{t("contact.getInTouch")}</h2>

              <div className={cls.field}>
                <label>{t("contact.company")}</label>
                <input type="text" placeholder={t("contact.company")} />
              </div>

              <div className={cls.field}>
                <label>{t("contact.name")}</label>
                <input type="text" placeholder={t("contact.name")} />
              </div>

              <div className={cls.field}>
                <label>{t("contact.phone")}</label>
                <input type="text" placeholder={t("contact.phone")} />
              </div>

              <div className={cls.field}>
                <label>{t("contact.email")}</label>
                <input type="text" placeholder={t("contact.email")} />
              </div>

              <div className={cls.field}>
                <label>{t("contact.subject")}</label>
                <input type="text" placeholder={t("contact.subject")} />
              </div>

              <div className={cls.field}>
                <label>{t("contact.message")}</label>
                <input type="text" placeholder={t("contact.message")} />
              </div>

              <p><input type="checkbox" /> {t("contact.agree")}</p>

              <div className={cls.btn}>
                <button>{t("contact.send")}</button>
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
                  <p>info@GridsApps.com</p>
                </div>
              </div>

              <div className={cls.feature}>
                <img src="/imgs/contact/contact2.png" alt="contactImage" />
                <div>
                  <h3>{t("contact.callUs")}</h3>
                  <p>info@GridsApps.com</p>
                </div>
              </div>

              <div className={cls.feature}>
                <img src="/imgs/contact/contact3.png" alt="contactImage" />
                <div>
                  <h3>{t("contact.visitUs")}</h3>
                  <p>info@GridsApps.com</p>
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