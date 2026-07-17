'use client';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import cls from './video.module.scss';

type Props = {}

export default function Video({ }: Props) {
  return (
    <div className='container'>
      <div className={cls.header}>
        <h2>Lorem Ipsum is simply dummy text of the printing</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting printing and dummy text ever since the 1500s</p>
      </div>
      <div className={cls.video}>
        <div className={cls.textSide}>
          <div className={cls.box}>
            <h3>Lorem Ipsum is simply dummy text.</h3>
            <ul>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
            </ul>
          </div>
        </div>
        <div className={cls.videoSide}>
          <img src="/imgs/services/video.png" alt="video" />
          <Icon icon="lets-icons:video-fill" />
        </div>
      </div>
    </div>
  )
}