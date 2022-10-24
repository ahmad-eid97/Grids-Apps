/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './contactForm.module.scss';

const ContactMap = ({ currentMap }) => {
  const { t, i18n } = useTranslation('common');
  
  return (
    <div className={cls.contactMap}>

      <Container maxWidth="xl" className={cls.wrapper}>

        <img src="/imgs/contact/earth.png" alt="earthImage" />

        <h1>{t("contact.easy")}</h1>

        <div className={cls.map}>
          <div className="gmap_canvas" id="gmap_canvas">
            <iframe src={'https://maps.google.com/maps?q=' + `${currentMap.maps[0].longitude}` + ',' + `${currentMap.maps[0].latitude}` + '&t=&z=15&ie=UTF8&iwloc=&output=embed'} />
          </div>
          <div className={cls.back}></div>
        </div>

      </Container>

    </div>
  )
}

export default ContactMap