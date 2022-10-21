import { useState } from 'react';

import { PrivacyHeader, PrivacySidebar, PrivacyDetails } from '../../components';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

const Privacy = () => {
  const [currentTab, setCurrentTab] = useState('')

  return (
    <div style={{ position: 'relative' }}>

      {/* HEADER SECTION */}
      <PrivacyHeader />

      <Container maxWidth="xl">

        <Grid container spacing={10}>

          <Grid item xs={12} md={4}>

            <PrivacySidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

          </Grid>

          <Grid item xs={12} md={8}>

            <PrivacyDetails setCurrentTab={setCurrentTab} />

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale, resolvedUrl }) => {
      const languageRedirection = langRedirection(req, locale);
      const routerRedirection = routeRedirection(req, resolvedUrl);

      if (languageRedirection) return languageRedirection;
      if (routerRedirection) return routerRedirection;
 
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
          locale
        },
      };
    }
);

export default Privacy