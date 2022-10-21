import { AboutHeader, FewWords, AboutTeam, HappyClients, History } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

import cls from './about.module.scss';

const index = () => {
  return (
    <div className={cls.about}>

      {/* HEADER SECTION */}
      <AboutHeader />

      {/* FEW WORDS SECTION */}
      <FewWords />

      {/* HISTORY SECTION */}
      <History />

      {/* TEAM SECTION */}
      <AboutTeam />

      {/* HAPPY CLIENTS */}
      <HappyClients />

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

export default index