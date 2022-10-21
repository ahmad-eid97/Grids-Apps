import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './history.module.scss';

const History = () => {
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    setMounted(true)
  }, [])

  const breakpoints = {
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 5,
    },
  }

  if (!mounted) return null;

  return (
    <div className={cls.history}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h6>{t("about.history")}</h6>
          <h1>{t("about.successfull")}</h1>
          <p>{t("about.historyContent")}</p>

        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          breakpoints={breakpoints}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          className={`${cls.swiper} historySwiper`}
        >
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cls.slide}>
              <div className={`${cls.box} box`}>
                <h6>We Are Growing</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum</p>
              </div>
              <p className={`${cls.line} line`}></p>
              <p className={cls.circle}></p>
            </div>
          </SwiperSlide>
        </Swiper>

      </Container>

    </div>
  )
}

export default History