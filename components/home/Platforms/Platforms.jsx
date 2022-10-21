import { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import { useTranslation } from 'next-i18next';

import cls from './platforms.module.scss';

const Platforms = ({ platforms }) => {
  const [counterOn, setCounterOn] = useState(true)
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.platforms}>

      <Container>

        <h1>{t('platforms.title')}</h1>

        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

          <Grid container className={cls.wrapper} justifyContent="center">

            {platforms.topics.map((topic, idx) => (

              <Grid item md={2} key={idx}>

                {counterOn && 
                <CountUp
                  start={0}
                  end={+topic.fields.find(one => one.title === 'percentage').value}
                  duration={2.75}
                  decimals={0}
                  prefix="%"
                  delay={0}
                />}

                <h5>{topic.title}</h5>

              </Grid>

            ))}

          </Grid>

        </ScrollTrigger>

      </Container>

    </div>
  )
}

export default Platforms;