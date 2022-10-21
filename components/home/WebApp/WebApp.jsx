/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './webApp.module.scss';

const WebApp = ({ pwaFeatures }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.webApp}>

      <Container maxWidth="xl">
        <div className={cls.head}>
          <h1>{t("webApp.title")}</h1>
          <p>{t("webApp.content")}</p>
        </div>
      </Container>

      <Grid container alignItems="center" spacing={3}>

        <Grid item xs={12} lg={6}>

          <div className={cls.imageSide}>
            <img src="/imgs/webApp/banner.png" alt="appImage" />
          </div>

        </Grid>

        <Grid item xs={12} lg={6}>

          <div className={cls.features}>

            {pwaFeatures.topics.map((topic, idx) => (

              <div className={cls.one} key={idx}>

                <div className={cls.image}>
                  <div className={cls.rotator}></div>
                  <img src="/imgs/webApp/icon1.png" alt="rotationImage" />
                </div>

                <div className={cls.details}>
                  <h3>{topic.title}</h3>
                  <p>{topic.details}</p>
                </div>

              </div>

            ))}

          </div>

        </Grid>

      </Grid>

    </div>
  )
}

export default WebApp