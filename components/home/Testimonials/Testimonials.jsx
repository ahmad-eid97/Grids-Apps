/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import { useTranslation } from 'next-i18next';

import cls from './testimonials.module.scss';

const Testimonials = ({ testimonials }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.testimonials}>
      <Container maxWidth="xl">

        <Grid container alignItems="center" spacing={3} className={cls.testWrapper}>

          <Grid item lg={6}>

            <div className={cls.wrapper}>

              <div className={cls.clients}>

                {testimonials.topics.slice(0, 3).map((singleTestimonial, idx) => (

                  <div className={cls.client} key={idx}>
                    <div className={cls.user}>
                      <img src={singleTestimonial.photo_file ? singleTestimonial.photo_file : "/imgs/testimonials/default.jpg"} alt="userImage" />
                      <div className={cls.details}>
                        <h4>{singleTestimonial.title}</h4>
                      <p>{singleTestimonial.fields.find(one => one.title === 'job').value}</p>
                      </div>
                    </div>
                    <Rating name="read-only" value={+singleTestimonial.fields.find(one => one.title === 'rate').value} readOnly />
                    <p>{singleTestimonial.details}</p>
                  </div>

                ))}

              </div>

              <div className={cls.clients}>

                {testimonials.topics.slice(3, 5).map((singleTestimonial, idx) => (

                  <div className={cls.client} key={idx}>
                  <div className={cls.user}>
                      <img src={singleTestimonial.photo_file ? singleTestimonial.photo_file : "/imgs/testimonials/default.jpg"} alt="userImage" />
                    <div className={cls.details}>
                      <h4>{singleTestimonial.title}</h4>
                      <p>{singleTestimonial.fields.find(one => one.title === 'job').value}</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={+singleTestimonial.fields.find(one => one.title === 'rate').value} readOnly />
                    <p>{singleTestimonial.details}</p>
                  </div>

                ))}

              </div>

            </div>

          </Grid>

          <Grid item lg={6}>

            <div className={cls.testSide}>

              <h6>{t("testimonials.testimonials")}</h6>

              <h1>{t("testimonials.title")}</h1>

              <p>{t("testimonials.content")}</p>

              <button>{t("general.getStarted")}</button>

            </div>

          </Grid>

        </Grid>

      </Container>
    </div>
  )
}

export default Testimonials