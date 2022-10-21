/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './fewWords.module.scss';

const FewWords = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.fewWords}>

      <Grid container spacing={5} alignItems="center">

        <Grid item xs={12} lg={6}>

          <div className={cls.imageSide}>
            <img src="/imgs/about/about.png" alt="aboutImage" />
          </div>

        </Grid>

        <Grid item xs={12} lg={6}>

          <div className={cls.details}>

            <h6>{t('about.fewWords')}</h6>

            <h1>{t('about.achieve')}</h1>

            <p>{t('about.desc')}</p>

            <Grid container>

              <Grid item xs={12} sm={4}>

                <div className={cls.feature}>
                  <img src="/imgs/about/counter1.png" alt="" />
                  <div>
                    <h2>45K</h2>
                    <p>Total User</p>
                  </div>
                </div>

              </Grid>

              <Grid item xs={12} sm={4}>

                <div className={cls.feature}>
                  <img src="/imgs/about/counter2.png" alt="" />
                  <div>
                    <h2>45K</h2>
                    <p>Total User</p>
                  </div>
                </div>

              </Grid>

              <Grid item xs={12} sm={4}>

                <div className={cls.feature}>
                  <img src="/imgs/about/counter3.png" alt="" />
                  <div>
                    <h2>45K</h2>
                    <p>Total User</p>
                  </div>
                </div>

              </Grid>

            </Grid>

          </div>

        </Grid>

      </Grid>

    </div>
  )
}

export default FewWords