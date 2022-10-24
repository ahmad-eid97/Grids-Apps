/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './servicesList.module.scss';

const ServicesList = ({  servicesFeatures, servicesList }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <Container maxWidth="xl" className={cls.warpper}>

      <div className={cls.head}>
        <h1>{t('services.experts')}</h1>
      </div>

      <div className={cls.features}>

        <img src="/imgs/services/rocket.png" alt="rocketImage" className={`${cls.back} ${cls[i18n.language]}`} />

        <Grid container spacing={5} justifyContent="center">

          {servicesFeatures.topics.map((feature, idx) => (

            <Grid item xs={12} sm={6} md={4} key={idx}>

              <div className={cls.one}>

                <img src={feature.photo_file} alt="image" />

                <div>
                  <p>{feature.fields.find(f => f.title === 'number').value}</p>
                  <span>{feature.title}</span>
                </div>

              </div>

            </Grid>

          ))}

        </Grid>

      </div>

      <div className={cls.servicesList}>

        <div className={cls.services}>

          {servicesList.topics.slice(0, Math.floor((servicesList.topics.length / 3))).map((service, idx) => (

            <div className={cls.service} key={idx}>
              <div>
                <i className="fa-light fa-shuttlecock"></i>
                <h2>{service.title}</h2>
              </div>
              <p>{service.details}</p>
            </div>

          ))}

        </div>

        <div className={cls.services}>

          {servicesList.topics.slice(Math.floor((servicesList.topics.length / 3)), Math.floor(((servicesList.topics.length * 2) / 3))).map((service, idx) => (

            <div className={cls.service} key={idx}>
              <div>
                <i className="fa-light fa-shuttlecock"></i>
                <h2>{service.title}</h2>
              </div>
              <p>{service.details}</p>
            </div>

          ))}

        </div>

        <div className={cls.services}>

          {servicesList.topics.slice(Math.floor(((servicesList.topics.length * 2) / 3)), servicesList.topics.length).map((service, idx) => (

            <div className={cls.service} key={idx}>
              <div>
                <i className="fa-light fa-shuttlecock"></i>
                <h2>{service.title}</h2>
              </div>
              <p>{service.details}</p>
            </div>

          ))}

        </div>

      </div>
    </Container>
  )
}

export default ServicesList