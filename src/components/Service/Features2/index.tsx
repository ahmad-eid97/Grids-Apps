'use client';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './features.module.scss';

type Props = {}

export default function Features2({ }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.serviceDetails.features;

  return (
    <div className={cls.features}>
      <div className='container'>
        <div className={cls.head}>
          <h2>{translations.title}</h2>
          <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est</p>
        </div>
        <img src="/imgs/services/group.svg" alt="feature" />
      </div>
    </div>
  )
}