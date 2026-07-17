'use client';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './details.module.scss'
import clsx from 'clsx';

type Props = {}

export default function Details({ }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.serviceDetails.details;

  return (
    <div className={cls.details}>
      <div className='container'>
        <div className={cls.content}>
          <div className={cls.textSide}>
            <h2>{translations.title}</h2>
            <p>
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde.

              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est
            </p>
          </div>
          <div className={cls.imagesSide}>
            <div className={clsx(cls.floating, cls[locale])}>
              <img src="/imgs/decorations/dark_dots.svg" alt="dots" />
              <img src="/imgs/decorations/vector_line.svg" alt="dots" />
              <img src="/imgs/decorations/rectangle.svg" alt="dots" />
            </div>
            <div className={cls.partOne}>
              <img src="/imgs/decorations/likes.svg" alt="dots" />
              <img src="/imgs/decorations/stats.svg" alt="dots" />
            </div>
            <div className={cls.partTwo}>
              <img src="/imgs/decorations/followers.svg" alt="dots" />
              <img src="/imgs/decorations/reach.svg" alt="dots" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}