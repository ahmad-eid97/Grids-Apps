/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './fewWords.module.scss';

const FewWords = ({ aboutUsData }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.fewWords}>

      <Grid container spacing={5} alignItems="center">

        <Grid item xs={12} lg={6}>

          <div className={cls.imageSide}>
            <img src={aboutUsData.topics[0].photo_file} alt="aboutImage" />
          </div>

        </Grid>

        <Grid item xs={12} lg={6}>

          <div className={cls.details}>

            <h6>{t('about.fewWords')}</h6>

            <h1>{aboutUsData.topics[0].title}</h1>

            <p>{aboutUsData.topics[0].details}</p>

            <Grid container>

              <Grid item xs={12} sm={4}>

                <div className={cls.feature}>
                  <img src="/imgs/about/counter1.png" alt="" />
                  <div>
                    <h2>{aboutUsData.topics[0].fields.find(f => f.title === 'total users').value}K</h2>
                    <p>Total User</p>
                  </div>
                </div>

              </Grid>

              <Grid item xs={12} sm={4}>

                <div className={cls.feature}>
                  <img src="/imgs/about/counter2.png" alt="" />
                  <div>
                    <h2>{aboutUsData.topics[0].fields.find(f => f.title === 'projects number').value}K</h2>
                    <p>Total User</p>
                  </div>
                </div>

              </Grid>

              <Grid item xs={12} sm={4}>

                <div className={cls.feature}>
                  <img src="/imgs/about/counter3.png" alt="" />
                  <div>
                    <h2>{aboutUsData.topics[0].fields.find(f => f.title === 'happy clients').value}K</h2>
                    <p>Total User</p>
                  </div>
                </div>

              </Grid>

            </Grid>

          </div>

        </Grid>

      </Grid>

      {aboutUsData.topics.slice(1, aboutUsData.topics.length).map((data, idx) => (
        <Grid container spacing={5} alignItems="center" key={idx} className={cls.sectionWrapper}>

          <Grid item xs={12} lg={6}>

            <div className={cls.imageSide}>
              <img src={data.photo_file} alt="aboutImage" />
            </div>

          </Grid>

          <Grid item xs={12} lg={6}>

            <div className={cls.details}>

              <h1>{data.title}</h1>

              <p>{data.details}</p>

            </div>

          </Grid>

        </Grid>
      ))}

    </div>
  )
}

export default FewWords