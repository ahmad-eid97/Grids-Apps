/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './happyClients.module.scss';

const HappyClients = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.wrapper}>

      <Container maxWidth="xl">

        <h6>{t('about.testimonials')}</h6>

        <h1>{t('about.testimonialsTitle')}</h1>

        <div className={cls.happyClients}>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            className={cls.swiper}
          >
            <SwiperSlide>
              <div className={cls.slide}>
                <img src="/imgs/testimonials/me.jpg" alt="userImage" />

                <Rating name="read-only" value={5} readOnly />
                <p>Awesome product. The guys have put huge effort into this app and focused on simplicity and ease of use. Awesome product. The guys have put huge effort into this app and focused on simplicity and ease of use. Awesome product. The guys have put huge effort into this app and focused on simplicity and ease of use.</p>

                <h5>ahmad eid</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cls.slide}>
                <img src="/imgs/testimonials/me.jpg" alt="userImage" />

                <Rating name="read-only" value={5} readOnly />
                <p>Awesome product. The guys have put huge effort into this app and focused on simplicity and ease of use.</p>

                <h5>ahmad eid</h5>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>

      </Container>

    </div>
  )
}

export default HappyClients