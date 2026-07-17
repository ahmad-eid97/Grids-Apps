'use client';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './details.module.scss'
import clsx from 'clsx';

type Props = {}

export default function Details2({ }: Props) {
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
          <div className={cls.imageSide}>
            <img src="/imgs/services/statistics.png" alt="statistics" />
          </div>
        </div>
      </div>
    </div>
  )
}