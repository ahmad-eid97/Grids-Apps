'use client';
import React, { useState } from 'react'
//= Components
import { Icon } from '@iconify/react';
import ModalVideo from 'react-modal-video';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import type { SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './styles.module.scss';

type Props = {
  withoutNumbers?: boolean;
  data: {
    platforms: SectionsResponse | undefined;
    video: SectionsResponse | undefined;
  }
}

export default function Video({ withoutNumbers, data: { platforms, video } }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.video;
  const [isOpen, setOpen] = useState(false);

  const numbers = platforms?.topics?.map(topic => ({
    id: topic.id,
    value: topic.fields[0].value || '',
    title: topic.title,
  })) || [
      {
        id: 1,
        value: '90%',
        title: translations.pwa,
      },
      {
        id: 2,
        value: '95%',
        title: translations.websites,
      },
      {
        id: 3,
        value: '92%',
        title: translations.android,
      },
      {
        id: 4,
        value: '85%',
        title: translations.ios,
      },
      {
        id: 5,
        value: '89%',
        title: translations.desktop,
      }
    ];

  return (
    <>
      <section className={cls.video}>
        <div className="container">
          <div className={cls.wrapper}>
            <div className={cls.meta}>
              <h2>{translations.title}</h2>
              <p>{translations.sub_title}</p>
            </div>
            <div className={cls.video_wrapper}>
              <div className={cls.play} onClick={() => setOpen(true)}>
                <Icon icon='mingcute:play-fill' />
              </div>
            </div>
            {
              !withoutNumbers ?
                <div className={cls.numbers}>
                  {
                    numbers.map((number, index) => (
                      <div className={clsx(cls.number, locale === 'ar' ? cls.rtl : '')} key={index}>
                        <h4>{number.value}%</h4>
                        <p>{number.title}</p>
                      </div>
                    ))
                  }
                </div>
                :
                null
            }
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={video?.topics?.[0]?.video_file || "L61p2uyiMSo"}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
