import { useState } from 'react';

import { TermsHeader, TermsSidebar, TermsDetails } from '../../components';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

import { wrapper } from '../../store/store';

const Terms = ({ sidebarLinks, allSections }) => {
  const [currentTab, setCurrentTab] = useState("0")

  return (
    <div style={{ position: 'relative' }}>

      {/* HEADER SECTION */}
      <TermsHeader />

      <Container maxWidth="xl">

        <Grid container spacing={10}>

          <Grid item xs={12} md={4}>

            <TermsSidebar currentTab={currentTab} setCurrentTab={setCurrentTab} sidebarLinks={sidebarLinks} />

          </Grid>

          <Grid item xs={12} md={8}>

            <TermsDetails setCurrentTab={setCurrentTab} allSections={allSections} />

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

      let error = false;

      // FETCH SIDEBAR LINKS
      let sidebarLinks = {}

      const SIDEBAR_LINKS = await axios.get(`/categories/${sections_ids.terms}/${locale}`).catch(() => error = true);

      if (SIDEBAR_LINKS) sidebarLinks = SIDEBAR_LINKS.data;

      // GET ALL SECTIONS DATA
      const getSectionsData = async (catID) => {
        const response = await axios.get(`/category/${catID}/page/${1}/count/${50}/${locale}`).catch(() => error = true);
        if (response) return response.data
      }

      const allLinks = sidebarLinks.categories.map(link => {
        return getSectionsData(link.id)
      })

      // GREAT WAY TO MAKE ALL REQUESTS AT THE SAME TIME
      const allSections = await Promise.all([...allLinks]).catch(() => error = true);

      if (error) return {
        redirect: {
          destination: '/404',
          permanent: false
        }
      }
 
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
          locale,
          sidebarLinks,
          allSections
        },
      };
    }
);

export default Terms