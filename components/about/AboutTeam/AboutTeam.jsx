/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './aboutTeam.module.scss';

const AboutTeam = ({ teamMembers }) => {
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
    <div className={cls.team}>

      <Container>

        <div className={cls.head}>

          <h6>{t('about.meet')}</h6>

          <h1>{t('about.greatness')}</h1>

          <p>{t('about.content')}</p>

        </div>

        <Swiper
          spaceBetween={50}
          breakpoints={breakpoints}
          className={`${cls.teamSwiper}`}
        >
          {teamMembers.topics.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <div className={cls.image}>
                  <img src={member.photo_file ? member.photo_file : "/imgs/testimonials/default.jpg"} alt="categoryName" />
                  <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
                </div>

                <div className={cls.details}>
                  <h2>{member.title}</h2>
                  <p>{member.fields.find(f => f.title === 'Job').value}</p>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>

    </div>
  )
}

export default AboutTeam;