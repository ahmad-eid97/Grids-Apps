import { TestimonialsHead, TestimialsList } from '../../components';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import axios from '../../utils/axios';
import { sections_ids } from '../../utils/sectionsData';

const Testimonials = ({ testimonials, testimonialsVideos }) => {
  return (
    <div>

      {/* HEADER SECTION */}
      <TestimonialsHead />

      {/* TESTIMONIAL SECTION */}
      <TestimialsList testimonials={testimonials} testimonialsVideos={testimonialsVideos} />

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
      let testimonials = [];

      const TESTIMONIALS = await axios.get(`/topics/${sections_ids.testimonials}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (TESTIMONIALS) testimonials = TESTIMONIALS.data;

      // FETCH SAMPLES
      let testimonialsVideos = [];

      const TESTIMONIALS_VIDEOS = await axios.get(`/topics/${sections_ids.testimonialsVideos}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (TESTIMONIALS_VIDEOS) testimonialsVideos = TESTIMONIALS_VIDEOS.data;

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
          testimonials,
          testimonialsVideos
        },
      };
    }
);

export default Testimonials