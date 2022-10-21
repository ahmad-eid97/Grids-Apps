import { useState } from 'react';

import { TermsHeader, TermsSidebar, TermsDetails } from '../../components';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

const Terms = () => {
  const [currentTab, setCurrentTab] = useState('')

  return (
    <div style={{ position: 'relative' }}>

      {/* HEADER SECTION */}
      <TermsHeader />

      <Container maxWidth="xl">

        <Grid container spacing={10}>

          <Grid item xs={12} md={4}>

            <TermsSidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

          </Grid>

          <Grid item xs={12} md={8}>

            <TermsDetails setCurrentTab={setCurrentTab} />

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

export default Terms