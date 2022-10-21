import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './keepInTouch.module.scss';

const KeepInTouch = ({ addresses }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.keepInTouch}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t('keepInTouch.title')}</h1>

        </div>

        <Grid container spacing={3}>

          {addresses.topics.map((address, idx) => (

            <Grid item xs={12} md={6} key={idx}>

              <div className={cls.way}>

                <i className="fa-sharp fa-solid fa-location-check"></i>

                <h2>{address.title}</h2>

                <p>{address.fields.find(f => f.title === 'Number').value}</p>
                
                <p>{address.fields.find(f => f.title === 'Time').value}</p>

              </div>

            </Grid>

          ))}

        </Grid>

      </Container>

    </div>
  )
}

export default KeepInTouch