'use client';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './features.module.scss';

type Props = {}

export default function Features({ }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.serviceDetails.features;

  return (
    <div className={cls.features}>
      <div className='container'>
        <div className={cls.head}>
          <h2>{translations.title}</h2>
          <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est</p>
        </div>
        <div className={cls.list}>
          {[...Array(6)].map((_, idx) => (
            <div className={cls.item} key={idx}>
              <img src="/imgs/services/feature.png" alt="feature" />
              <h3>Feature</h3>
              <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}