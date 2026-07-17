'use client';
//= Components
import { Icon } from '@iconify/react';
//= Types
import { ITopic } from '@/types';
//= Styles
import cls from './mobileProject.module.scss';

type Props = { project: ITopic; }

export default function MobileProject({ project }: Props) {
  return (
    <div className={cls.card}>
      <div className={cls.screenshot}>
        <img loading="lazy" src={project.photo_file || ''} alt={project.title} />
        <div className={cls.overlay}>
          <h4>{project.title.length > 50 ? project.title.substring(0, 50) + '\u2026' : project.title}</h4>
          <p>{project.details}</p>
        </div>
      </div>
      <div className={cls.footer}>
        <div className={cls.storeBadges}>
          <img loading="lazy" src="/imgs/apps/google.png" alt="Google Play" />
          <img loading="lazy" src="/imgs/apps/store.png" alt="App Store" />
        </div>
        <a href="#" className={cls.arrowBtn} aria-label="View project">
          <Icon icon="ph:arrow-up-right-bold" />
        </a>
      </div>
    </div>
  )
}