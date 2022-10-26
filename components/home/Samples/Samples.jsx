/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './smaples.module.scss';

const Samples = ({ samples }) => {
  const [selectedSample, setSelectedSample] = useState(samples.topics[0] || {})
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.wrapper}>

      <Container>
        
        <div className={cls.head}>

          <h6>{t('samples.features')}</h6>

          <h1>{t('samples.title')}</h1>

          <p>{t('samples.content')}</p>

        </div>

      </Container>

      <div className={cls.samples}>

        <Container maxWidth="xl">

          <img className={cls.background} src="/imgs/samples/mocup.png" alt="mocupImage" />

          <div className={cls.content}>
            <h6>{t('samples.started')}</h6>
            <div className={cls.system}>

              {samples.topics.map((sample) => (
                <div key={sample.id} className={sample.id === selectedSample.id ? cls.active : ''} onClick={() => setSelectedSample(sample)}>

                  {sample.fields.find(f => f.title === 'Type').value === '1' && 
                    <>
                      <i className="fa-brands fa-apple"></i>
                      <h5>{t('samples.ios')}</h5>  
                    </>
                  }
                  {sample.fields.find(f => f.title === 'Type').value === '2' && 
                    <>
                      <i className="fa-brands fa-android"></i>
                      <h5>{t('samples.android')}</h5>
                    </>
                  }
                  {sample.fields.find(f => f.title === 'Type').value === '3' && 
                    <>
                      <i className="fa-sharp fa-solid fa-desktop"></i>
                      <h5>{t('samples.web')}</h5>
                    </>
                  }
                  
                </div>
              ))}
            </div>
            <img className={cls.samp} src={selectedSample.photo_file} alt="mocup-screen" />
          </div>

        </Container>

      </div>

    </div>

  )
}

export default Samples