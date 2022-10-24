import { MobProjectsHeader, MobProjectsList } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

const MobProjects = ({ mobProjects }) => {
  return (
    <div>

      {/* HEADER SECTION */}
      <MobProjectsHeader />

      {/* PROJECTS LIST SECTION */}
      <MobProjectsList mobProjects={mobProjects} />

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

      // FETCH WEB PROJECTS
      let mobProjects = {};

      const MOB_PROJECTS = await axios.get(`/topics/${sections_ids.mobProjects}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (MOB_PROJECTS) mobProjects = MOB_PROJECTS.data;

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
          mobProjects
        },
      };
    }
);

export default MobProjects