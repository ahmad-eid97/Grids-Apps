'use client';
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './features.module.scss';

type Props = {}

export default function Features3({ }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.serviceDetails.features;

  return (
    <div className={cls.features}>
      <div className='container'>
        <div className={cls.head}>
          <h2>{translations.title}</h2>
          <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est</p>
          <div className={cls.items}>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum </p>
          </div>
        </div>
        <div className={cls.content}>
          <div className={cls.imageSide}>
            <img src="/imgs/services/dashboard.svg" alt="feature" />
          </div>
          <div className={cls.textSide}>
            <h3>Lorem Ipsum is simply dummy text.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
            <ul>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
              <li><Icon icon="icon-park-solid:correct" /> Lorem Ipsum is simply</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}