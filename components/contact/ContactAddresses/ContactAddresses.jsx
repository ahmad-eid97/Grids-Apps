import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './contactAddresses.module.scss';

const ContactAddresses = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <div className={cls.contactAddresses}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("keepInTouch.title")}</h1>

        </div>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>

            <div className={cls.way}>

              <i className="fa-sharp fa-solid fa-location-check"></i>

              <h2>New York – Seagram Building</h2>

              <p>00971 4 453 2605</p>
              
              <p>Mon – to – Sat … 8am-6pm</p>

            </div>

          </Grid>

          <Grid item xs={12} md={6}>

            <div className={cls.way}>

              <i className="fa-sharp fa-solid fa-location-check"></i>

              <h2>Dubai – AlHabtour – Floor 21</h2>

              <p>00971 4 453 2605</p>
              
              <p>Mon – to – Sat … 8am-6pm</p>

            </div>

          </Grid>

          <Grid item xs={12} md={6}>

            <div className={cls.way}>

              <i className="fa-sharp fa-solid fa-location-check"></i>

              <h2>Jordan – Amman – Alabdali</h2>

              <p>+(970)-599-814-392</p>
              
              <p>Sat – to – Thu … 8am-6pm</p>

            </div>

          </Grid>

          <Grid item xs={12} md={6}>

            <div className={cls.way}>

              <i className="fa-sharp fa-solid fa-location-check"></i>

              <h2>Palestine – Ramallah – Alersal</h2>

              <p>+(970)-599-814-392</p>
              
              <p>Sat – to – Thu … 8am-6pm</p>

            </div>

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default ContactAddresses