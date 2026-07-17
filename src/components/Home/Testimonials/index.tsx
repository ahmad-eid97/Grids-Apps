'use client';
import React, { useEffect, useState } from 'react'
//= Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  whiteBackground?: boolean;
  data: SectionsResponse | undefined;
}

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 2000,
  style: {
    padding: '20px'
  }
}

export default function Testimonials({ data, whiteBackground }: Props) {
  const [isClient, setIsClient] = useState(false);
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.testimonials;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides = data?.topics?.map(topic => ({
    id: topic.id,
    logo: topic.photo_file || '',
    user: {
      name: topic.title,
      position: topic.fields[0].value
    },
    content: topic.details
  })) || [
      {
        id: 1,
        logo: '/imgs/testimonials/logo.png',
        user: {
          name: 'Larry Pageim Fred & Sergey Brin',
          position: translations.position
        },
        content: translations.lorem
      },
      {
        id: 2,
        logo: '/imgs/testimonials/logo.png',
        user: {
          name: 'Hassan Ali',
          position: translations.position
        },
        content: translations.lorem
      },
      {
        id: 3,
        logo: '/imgs/testimonials/logo.png',
        user: {
          name: 'Nader Hantash',
          position: translations.position
        },
        content: translations.lorem
      },
      {
        id: 4,
        logo: '/imgs/testimonials/logo.png',
        user: {
          name: 'Ahmad Eid',
          position: translations.position
        },
        content: translations.lorem
      }
    ];

  return (
    <section className={clsx(cls.testimonials, { [cls.white]: whiteBackground })}>
      <div className="container">
        <div className={cls.meta}>
          <h2>{translations.title}</h2>
          <p>{translations.sub_title}</p>
        </div>
        <div className={cls.testimonials_swiper}>
          {
            isClient ?
              <Swiper {...swiperOptions} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {
                  slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className={cls.testimonial}>
                        <div className={cls.image}>
                          <img loading='lazy' src={slide.logo} alt={slide.user.name} />
                        </div>
                        <div className={cls.content}>
                          <p dangerouslySetInnerHTML={{ __html: slide.content }} />
                        </div>
                        <div className={cls.user}>
                          <h4>{slide.user.name}</h4>
                          <p>{slide.user.position}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              :
              null
          }
        </div>
      </div>
    </section>
  )
}
