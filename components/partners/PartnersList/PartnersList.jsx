/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './partnersList.module.scss';

const PartnersList = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.partnersList}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h6>{t("partners.meet")}</h6>

          <h1>{t("partners.trust")}</h1>

          <p>{t("partners.partners")}</p>

        </div>

        <Grid container spacing={3}>

          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/01.png" alt="partnerImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/02.png" alt="partnerImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/03.png" alt="partnerImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/04.png" alt="partnerImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/05.png" alt="partnerImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/06.png" alt="partnerImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/07.png" alt="partnerImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={cls.partner}>
              <img src="/imgs/partners/03.png" alt="partnerImage" />
            </div>
          </Grid>

        </Grid>

        <div className={cls.clients}>

          <h6>{t("partners.worldWide")}</h6>

          <h2>2756</h2>

          <p>{t("partners.clients")}</p>

        </div>

      </Container>

    </div>
  )
}

export default PartnersList