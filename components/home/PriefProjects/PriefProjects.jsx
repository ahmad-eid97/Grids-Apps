/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './priefProjects.module.scss';

const PriefProjects = ({ priefProjects }) => {
  const [mounted, setMounted] = useState(false)
  const { t, i18n } = useTranslation('common')

  const breakpoints = {
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 4,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    },
    1400: {
      slidesPerView: 7,
    },
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (

    <>
      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t('priefProjects.title')}</h1>
          <p>{t('priefProjects.content')}</p>

        </div>

      </Container>

      <div className={cls.priefProjects}>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          breakpoints={breakpoints}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          className={cls.swiper}
        >
          {priefProjects.topics.slice(0, (priefProjects.topics.length / 3)).map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <img src={project.photo_file} alt="projectImage" />
                <h5>{project.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`${cls.swiper2} ${cls[i18n.language]}`}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            breakpoints={breakpoints}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            speed={1500}
            loop={true}
          >
            {priefProjects.topics.slice(0, (priefProjects.topics.length / 3)).map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className={cls.slide}>
                  <img src={project.photo_file} alt="projectImage" />
                  <h5>{project.title}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          breakpoints={breakpoints}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          className={cls.swiper}
        >
          {priefProjects.topics.slice(0, (priefProjects.topics.length / 3)).map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <img src={project.photo_file} alt="projectImage" />
                <h5>{project.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </>

  )
}

export default PriefProjects