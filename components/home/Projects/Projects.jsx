/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './projects.module.scss';

const Projects = ({ projects }) => {
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
    <div className={cls.projects}>

      <h1>{t("projects.title")}</h1>

      <Swiper
        spaceBetween={30}
        breakpoints={breakpoints}
        className={`${cls.swiper} projectSwiper`}
      >
        {projects.topics.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className={cls.project}>
              <img src={project.photo_file} alt={project.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Projects