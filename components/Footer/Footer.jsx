/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './footer.module.scss';

const Footer = () => {
  const { t, i18n } = useTranslation('nav');

  return (
    <div className={cls.footer}>

      <Container maxWidth="xl">

        <div className={cls.logo}>

          <img src="/imgs/footer/logo.png" alt="logoImage" />

        </div>

        <div className={cls.icons}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-google-play"></i>
          <i className="fa-brands fa-google"></i>
        </div>

        <div className={`${cls.links} ${cls[i18n.language]}`}>

          <span>{t("footer.about")}</span>

          <span>{t("footer.faqs")}</span>

          <span>{t("footer.contact")}</span>

          <span>{t("footer.terms")}</span>

          <span>{t("footer.privacy")}</span>

        </div>

        <div className={cls.rights}>

          <p>{t("footer.rights")}</p>

        </div>

      </Container>

    </div>
  )
}

export default Footer