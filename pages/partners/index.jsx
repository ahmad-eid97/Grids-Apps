import { PartnersHeader, PartnersList } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../../store/store';

const Partners = () => {
  return (
    <div>

      {/* HEADER SECTION */}
      <PartnersHeader />

      {/* PARTNERS LIST SECTION */}
      <PartnersList />

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

export default Partners;