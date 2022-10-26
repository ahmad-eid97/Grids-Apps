/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import { useTranslation } from 'next-i18next';

import cls from './solutions.module.scss';

const Solutions = ({ solutions }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.solutions}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("solutions.title")}</h1>

          <p>{t("solutions.content")}</p>

        </div>

        <div className={cls.wrapper}>

          <Grid container alignItems="center">

            <Grid item xs={12} lg={6} className={cls.imageGrid}>

              <div className={cls.imageSide}>
                <img src="/imgs/solutions/phone.png" alt="phoneImage" />
              </div>

            </Grid>

            <Grid item xs={12} lg={6}>

              <Swiper
                modules={[Navigation]}
                spaceBetween={1}
                navigation
                className={`${cls.solutionsSwiper} solutionsSwiper ${i18n.language}`}
              >

                {solutions.topics.map((solution, idx) => (
                  <SwiperSlide key={idx}>
                    <div className={cls.slide}>

                      <i className="fa-sharp fa-solid fa-list-tree"></i>

                      <h1>{solution.title}</h1>

                      <p>{solution.details}</p>

                    </div>
                  </SwiperSlide>

                ))}
              </Swiper>

            </Grid>

          </Grid>

        </div>

      </Container>

    </div>
  )
}

export default Solutions