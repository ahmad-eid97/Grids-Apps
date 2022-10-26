/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CountUp from 'react-countup';

import { useTranslation } from 'next-i18next';

import cls from './partnersList.module.scss';

const PartnersList = ({ partners, clientsSatisfied }) => {
  const [counterOn, setCounterOn] = useState(false)
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    const section = document.getElementById('counterSection');

    const handleScroll = () => {
      if (document.body.scrollTop > section.offsetTop - 800 && document.body.scrollTop < section.offsetTop + 100) {
        if (!counterOn) {
          setCounterOn(true)
        }
      } else {
        if (counterOn) {
          setCounterOn(false)
        }
      }
    };

    window.addEventListener('scroll', handleScroll());

    return () => window.removeEventListener('scroll', handleScroll);

  })

  return (
    <div className={cls.partnersList}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h6>{t("partners.meet")}</h6>

          <h1>{t("partners.trust")}</h1>

          <p>{t("partners.partners")}</p>

        </div>

        <Grid container spacing={3}>

          {partners.topics.map((partner, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <div className={cls.partner}>
                <img src={partner.photo_file} alt="partnerImage" />
              </div>
            </Grid>
          ))}

        </Grid>

        <div className={cls.clients} id="counterSection">

          <h6>{t("partners.worldWide")}</h6>

          {counterOn && 
            <h2>
              <CountUp
                start={0}
                end={+clientsSatisfied.topics[0].title}
                duration={2.75}
                decimals={0}
                prefix=""
                delay={0}
              />
            </h2>
          }

          <p>{clientsSatisfied.topics[0].details}</p>

        </div>

      </Container>

    </div>
  )
}

export default PartnersList