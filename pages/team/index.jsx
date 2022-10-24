import { TeamHeader, TeamMembers, Download } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

const Team = ({ teamMembers, teamLinks }) => {
  return (
    <div>

      {/* TEAM HEADER SECTION */}
      <TeamHeader />

      {/* TEAM MEMBERS SECTION */}
      <TeamMembers teamMembers={teamMembers} />

      {/* SDOWNLOAD SECTION */}
      <Download teamLinks={teamLinks} />

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

      // FETCH TEAM LINKS
      let teamLinks = {};

      const TEAM_LINKS = await axios.get(`/topics/${sections_ids.teamLinks}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (TEAM_LINKS) teamLinks = TEAM_LINKS.data;

      // FETCH TEAM MEMBERS
      let teamMembers = {};

      const TEAM_MEMBERS = await axios.get(`/topics/${sections_ids.teamMembers}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (TEAM_MEMBERS) teamMembers = TEAM_MEMBERS.data;
 
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
          locale,
          teamLinks,
          teamMembers
        },
      };
    }
);

export default Team;