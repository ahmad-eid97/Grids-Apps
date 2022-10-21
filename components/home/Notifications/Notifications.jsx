/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from "./notifications.module.scss";

const Notifications = ({ notifications }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.notifications}>

      {/* <Container> */}

        <Grid container alignItems="center" spacing={4}>

          <Grid item lg={6} className={cls.imageSide}>

            <img src="/imgs/notifications/newslater1.png" alt="image" />

          </Grid>

          <Grid item lg={6}>

            <div className={cls.details}>
              <h1>{notifications.topics[0].title}</h1>

              <p>{notifications.topics[0].details}</p>
            </div>

          </Grid>

        </Grid>

      {/* </Container> */}

    </div>
  )
}

export default Notifications