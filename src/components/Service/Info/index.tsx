'use client';
//= Types
import { ITopic } from '@/types';
//= Styles
import cls from './info.module.scss';

type Props = {
  serviceDetails: ITopic | undefined;
}

export default function Info({ serviceDetails }: Props) {
  return (
    <div className='container'>
      <div className={cls.info}>
        <h2>{serviceDetails?.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: serviceDetails?.details ? serviceDetails?.details : '' }}></div>
        <div className={cls.items}>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
          <p>Lorem ipsum </p>
        </div>
      </div>
    </div>
  )
}