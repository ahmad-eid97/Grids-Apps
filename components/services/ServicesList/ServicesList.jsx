/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './servicesList.module.scss';

const ServicesList = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <Container maxWidth="xl" className={cls.warpper}>

      <div className={cls.head}>
        <h1>{t('services.experts')}</h1>
      </div>

      <div className={cls.features}>

        <img src="/imgs/services/rocket.png" alt="rocketImage" className={`${cls.back} ${cls[i18n.language]}`} />

        <Grid container spacing={5} justifyContent="center">

          <Grid item xs={12} sm={6} md={4}>

            <div className={cls.one}>

              <img src="/imgs/services/counter1.png" alt="image" />

              <div>
                <p>17501</p>
                <span>Premium User</span>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>

            <div className={cls.one}>

              <img src="/imgs/services/counter2.png" alt="image" />

              <div>
                <p>1987</p>
                <span>Daily Visitors</span>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>

            <div className={cls.one}>

              <img src="/imgs/services/counter5.png" alt="image" />

              <div>
                <p>95%</p>
                <span>Satisfaction</span>
              </div>

            </div>

          </Grid>

        </Grid>

      </div>

      <div className={cls.servicesList}>

        <div className={cls.services}>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

        </div>

        <div className={cls.services}>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

        </div>

        <div className={cls.services}>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

          <div className={cls.service}>
            <div>
              <i className="fa-light fa-shuttlecock"></i>
              <h2>testing one</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?ipsum dolor sit amet consectetur adipisicing elit. Est nobis pariatur consectetur. Veniam fuga maxime excepturi placeat architecto ex totam iure in deleniti odio. Laborum eligendi impedit provident ex vel?</p>
          </div>

        </div>

      </div>
    </Container>
  )
}

export default ServicesList