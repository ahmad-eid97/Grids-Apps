/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './contact.module.scss';

const Contact = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.contact}>

      <Container maxWidth="xl">

        <Grid container spacing={5}>

          <Grid item xs={12} lg={6}>

            <div className={cls.form}>

              <h1>{t("contact.getInTouch")}</h1>

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

                <textarea type="text" placeholder={t("contact.message")}></textarea>

              </div>

              <p><input type="checkbox" /> {t("contact.agree")}</p>

              <div className={cls.btn}>
                <button>{t("contact.send")}</button>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} lg={6}>

            <img src="/imgs/contact/help.png" alt="helpImage" />

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default Contact