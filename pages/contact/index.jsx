import { useState } from 'react';

import { ContactHeader, ContactForm, ContactMap, ContactAddresses } from '../../components';
import InternalLoader from '../../components/UIs/InternalLoader/InternalLoader';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

const Contact = ({ contactInfo, addresses, initialMap }) => {
  const [currentMap, setCurrentMap] = useState(initialMap);
  const [loading, setLoading] = useState(false)
  const { t, i18n } = useTranslation('common');

  const getAddressMap = async (address) => {
    setLoading(true)
    const response = await axios.get(`/topic/maps/${address.id}/${i18n.language}`).catch(() => {
      setLoading(false)
    });

    if (!response) return;

    setCurrentMap(response.data)

    var element = document.getElementById("gmap_canvas");
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setLoading(false)
  }

  return (
    <div>
      {loading && <InternalLoader />}

      {/* HEADER SECTION */}
      <ContactHeader />

      {/* CONTACT FORM SECTION */}
      <ContactForm contactInfo={contactInfo} />

      {/* CONTACT MAP */}
      <ContactMap currentMap={currentMap} />

      {/* CONTACT ADDRESSES SECTION */}
      <ContactAddresses addresses={addresses} getAddressMap={getAddressMap} />

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

      // FETCH ADDRESSES
      let contactInfo = {};

      const CONTACT_INFO = await axios.get(`/website/contacts/${locale}`).catch(() => error = true);

      if (CONTACT_INFO) contactInfo = CONTACT_INFO.data.details;

      // FETCH ADDRESSES
      let addresses = {};

      const ADDRESSES = await axios.get(`/topics/${sections_ids.addresses}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (ADDRESSES) addresses = ADDRESSES.data;

      // FETCH INITIAL MAP
      let initialMap = {};

      const INITIAL_MAP = await axios.get(`/topic/maps/${addresses.topics[0].id}/${locale}`).catch(() => error = true);

      if (INITIAL_MAP) initialMap = INITIAL_MAP.data;

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
          contactInfo,
          addresses,
          initialMap
        },
      };
    }
);

export default Contact