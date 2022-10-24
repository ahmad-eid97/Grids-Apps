/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './happyClients.module.scss';

const HappyClients = ({ testimonials }) => {
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
            {testimonials.topics.map((client, idx) => (

              <SwiperSlide key={idx}>
                <div className={cls.slide}>
                  <img src={client.photo_file ? client.photo_file : "/imgs/testimonials/default.jpg"} alt="userImage" />

                  <Rating name="read-only" value={+client.fields.find(f => f.title === 'rate').value} readOnly />
                  <p>{client.details}</p>

                  <h5>{client.title}</h5>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>

        </div>

      </Container>

    </div>
  )
}

export default HappyClients