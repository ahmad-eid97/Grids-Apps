/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './services.module.scss';

const Services = ({ webServices }) => {
  const { t, i18n } = useTranslation('common');

  const breakpoints = {
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  }

  return (
    <div className={cls.services}>

      <Container maxWidth="xl">

        <h1>{t("services.title")}</h1>

        <div>

          <Swiper
            spaceBetween={30}
            breakpoints={breakpoints}
            className={`${cls.swiper} servicesSlider`}
          >
            {webServices.topics.slice(0 ,(webServices.topics.length / 2)).map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className={cls.slide}>
                  <h3>{service.title}</h3>
                  <p>{service.details}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <div>

          <Swiper
            spaceBetween={30}
            breakpoints={breakpoints}
            className={`${cls.swiper} ${cls.swiper2} servicesSlider`}
          >
            {webServices.topics.slice(0 ,(webServices.topics.length / 2)).map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className={cls.slide}>
                  <h3>{service.title}</h3>
                  <p>{service.details}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </Container>

    </div>
  )
}

export default Services