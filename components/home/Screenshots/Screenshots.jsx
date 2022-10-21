/* eslint-disable @next/next/no-img-element */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { useTranslation } from "next-i18next";

import cls from './screenshots.module.scss';

const Screenshots = ({ screenshots }) => {
  const { t, i18n } = useTranslation('common')

  return (
    <div className={cls.screenshots}>

      <Container maxWidth="xl">

        <Grid container spacing={5} alignItems="center" justifyContent="center">

          <Grid item xs={12} md={4} lg={3} className={`${cls.swiperWapper} ${cls[i18n.language]}`}>

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              navigation
              slidesPerView={1}
              className={`${cls.swiper} screenshotsSwiper ${i18n.language}`}
            >

              {screenshots.topics.map((screenshot, idx) => (
                <SwiperSlide key={idx}>
                  <div className={cls.slide}>
                    <img src={screenshot.photo_file} alt="categoryName" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </Grid>

          <Grid item xs={12} md={7} lg={6}>

            <h1>{t('screenShots.title')}</h1>

            <p>{t('screenShots.content')}</p>

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default Screenshots;