import { AboutHeader, FewWords, AboutTeam, HappyClients, History } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

import cls from './about.module.scss';

const index = ({ aboutUsData, ourHistory, teamMembers, testimonials }) => {
  return (
    <div className={cls.about}>

      {/* HEADER SECTION */}
      <AboutHeader />

      {/* FEW WORDS SECTION */}
      <FewWords aboutUsData={aboutUsData} />

      {/* HISTORY SECTION */}
      <History ourHistory={ourHistory} />

      {/* TEAM SECTION */}
      <AboutTeam teamMembers={teamMembers} />

      {/* HAPPY CLIENTS */}
      <HappyClients testimonials={testimonials} />

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

      // FETCH SAMPLES
      let aboutUsData = [];

      const ABOUT_US_DATA = await axios.get(`/topics/${sections_ids.aboutUs}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (ABOUT_US_DATA) aboutUsData = ABOUT_US_DATA.data;

      // FETCH SAMPLES
      let ourHistory = [];

      const HISTORY_DATA = await axios.get(`/topics/${sections_ids.history}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (HISTORY_DATA) ourHistory = HISTORY_DATA.data;

      // FETCH SAMPLES
      let teamMembers = [];

      const TEAM_MEMBERS = await axios.get(`/topics/${sections_ids.teamMembers}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (TEAM_MEMBERS) teamMembers = TEAM_MEMBERS.data;

      // FETCH SAMPLES
      let testimonials = [];

      const TESTIMONIALS = await axios.get(`/topics/${sections_ids.testimonials}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (TESTIMONIALS) testimonials = TESTIMONIALS.data;

      if (error) {
        return {
          redirect: {
            destination: '/404',
            permanent: false
          }
        }
      }
 
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
          locale,
          aboutUsData,
          ourHistory,
          teamMembers,
          testimonials
        },
      };
    }
);

export default index