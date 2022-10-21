/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './start.module.scss';

const Start = ({ steps }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.start}>
      <Container maxWidth="xl">

        <Grid container alignItems="center">

          <Grid item xs={12} lg={3}>
            <div className={cls.details}>
              <h6>{t("start.howWorks")}</h6>
              <h1>{t("start.simple")}</h1>
              <p>{t("start.content")}</p>
            </div>
          </Grid>

          <Grid item xs={12} lg={9}>
            <div className={`${cls.thumbs} ${cls[i18n.language]}`}>
              <img src="/imgs/start/phone.png" alt="startImage" />

              <div className={cls.features}>

                {steps.topics.map((topic, idx) => (

                  <div className={cls.one} key={idx}>
                    <h6>{topic.title}</h6>
                    <i className={topic.icon}></i>
                  </div>

                ))}

              </div>

            </div>
          </Grid>

        </Grid>

      </Container>
    </div>
  )
}

export default Start