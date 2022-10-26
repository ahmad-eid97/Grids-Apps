import { PartnersHeader, PartnersList } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

const Partners = ({ partners, clientsSatisfied }) => {
  return (
    <div>

      {/* HEADER SECTION */}
      <PartnersHeader />

      {/* PARTNERS LIST SECTION */}
      <PartnersList partners={partners} clientsSatisfied={clientsSatisfied} />

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

      // FETCH PARTNERS
      let partners = [];

      const PARTNERS_LIST = await axios.get(`/topics/${sections_ids.partners}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (PARTNERS_LIST) partners = PARTNERS_LIST.data;

      // FETCH CLIENTS SATISFIED
      let clientsSatisfied = [];

      const CLIENTS_SAT = await axios.get(`/topics/${sections_ids.clientsSatisfied}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (CLIENTS_SAT) clientsSatisfied = CLIENTS_SAT.data;

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
          partners,
          clientsSatisfied
        },
      };
    }
);

export default Partners;