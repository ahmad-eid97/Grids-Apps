/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './contactForm.module.scss';

const ContactMap = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.contactMap}>

      <Container maxWidth="xl" className={cls.wrapper}>

        <img src="/imgs/contact/earth.png" alt="earthImage" />

        <h1>{t("contact.easy")}</h1>

        <div className={cls.map}>
          <div className="gmap_canvas">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://putlocker-is.org"></a><a href="https://www.embedgooglemap.net"></a>
          </div>
          <div className={cls.back}></div>
        </div>

      </Container>

    </div>
  )
}

export default ContactMap