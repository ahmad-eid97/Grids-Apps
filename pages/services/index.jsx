import { ServicesHeader, ServicesList } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

const Services = ({ servicesFeatures, servicesList }) => {
  return (
    <div>

      {/* HEADER SECTION */}
      <ServicesHeader />

      {/* SERVICES SECTION */}
      <ServicesList servicesFeatures={servicesFeatures} servicesList={servicesList} />

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
      let servicesFeatures = [];

      const SERVICES_FEATURES = await axios.get(`/topics/${sections_ids.servicesFeatures}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (SERVICES_FEATURES) servicesFeatures = SERVICES_FEATURES.data;

      // FETCH SAMPLES
      let servicesList = [];

      const SERVICES_LIST = await axios.get(`/topics/${sections_ids.servicesList}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (SERVICES_LIST) servicesList = SERVICES_LIST.data;

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
          servicesFeatures,
          servicesList
        },
      };
    }
);

export default Services;