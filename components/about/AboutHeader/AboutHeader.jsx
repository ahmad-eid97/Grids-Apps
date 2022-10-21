/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './aboutHeader.module.scss';

const AboutHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.aboutHeader}>

      <Container maxWidth="xl">

        <div className={cls.details}>

          <h1>{t("about.title")}</h1> 

          <div className={cls.links}>

            <span>{t("about.home")}</span>

            <span><i className={`fa-light fa-arrow-${i18n.language === 'en' ? 'right' : 'left'}`}></i></span>

            <span>{t("about.about")}</span>

          </div>

        </div>

      </Container>

      {/* <img src="/imgs/about/page-header-wave.png" alt="waveImage" className={cls.wave} /> */}

    </div>
  )
}

export default AboutHeader;