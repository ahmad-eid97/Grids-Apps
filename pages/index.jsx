/* eslint-disable react/jsx-no-undef */
import { 
  Header, 
  Start, 
  Testimonials, 
  WebApp, 
  Samples, 
  Projects, 
  Solutions, 
  PriefProjects, 
  KeepInTouch, 
  Notifications, 
  Screenshots, 
  Contact, 
  Services,
  Platforms,
  Team
} from '../components';

import langRedirection from '../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../store/store';

import axios from "../utils/axios";

import { sections_ids } from '../utils/sectionsData';

export default function Home({ 
    headerSlider, 
    steps, 
    notifications, 
    solutions, 
    testimonials, 
    pwaFeatures, 
    projects, 
    platforms, 
    priefProjects,
    webServices,
    screenshots,
    teamMembers,
    samples,
    addresses
  }) {
  const { t: translate } = useTranslation('common');

  return (
    <div className="app">

      {/* HEADER SECTION */}
      <Header headerSlider={headerSlider} />

      {/* START SECTION */}
      <Start steps={steps} />

      {/* SOLUTIONS SECTION */}
      <Solutions solutions={solutions} />

      {/* TESTIMONIALS SECTION */}
      <Testimonials testimonials={testimonials} />

      {/* WEB APP SECTION */}
      <WebApp pwaFeatures={pwaFeatures} />

      {/* PROJECTS SECTION */}
      <Projects projects={projects} />

      {/* NOTIFICATIONS SECTION */}
      <Notifications notifications={notifications} />

      {/* PLATFORMS SECTION */}
      <Platforms platforms={platforms} />

      {/* PRIEF PROJECTS SLIDER SECTION */}
      <PriefProjects priefProjects={priefProjects} />

      {/* SERVICES SECTION */}
      <Services webServices={webServices} />

      {/* SCREENSHOTS SECTION */}
      <Screenshots screenshots={screenshots} />

      {/* TEAM SECTION */}
      <Team teamMembers={teamMembers} />

      {/* SAMPLES SECTION */}
      <Samples samples={samples} />

      {/* KEEP IN TOUCH SECTION */}
      <KeepInTouch addresses={addresses} />

      {/* CONTACT SECTION */}
      <Contact />
      
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

      // TO HANDLE IF THERE IS ANY ERROR IN ANY AXIOS REQUEST TO REDIRECT USER TO 404 PAGE...
      let error = false

      // FETCH HEADER SLIDER
      let headerSlider = [];

      const HEADER_SLIDER = await axios.get(`/topics/${sections_ids.headerSlider}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (HEADER_SLIDER) headerSlider = HEADER_SLIDER.data;

      // FETCH HEADER SLIDER
      let steps = [];

      const STEPS = await axios.get(`/topics/${sections_ids.steps}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (STEPS) steps = STEPS.data;

      // FETCH NOTIFICATIONS
      let notifications = [];

      const NOTIFICATIONS = await axios.get(`/topics/${sections_ids.notifications}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (NOTIFICATIONS) notifications = NOTIFICATIONS.data;

      // FETCH TESTIMONIALS
      let testimonials = [];

      const TESTIMONIALS_RESPONSE = await axios.get(`/topics/${sections_ids.testimonials}/page/${1}/count/${50}/${locale}`).catch((err) => {
        error = true
      });

      if (TESTIMONIALS_RESPONSE) testimonials = TESTIMONIALS_RESPONSE.data;

      // FETCH SOLUTIONS
      let solutions = [];

      const SOLUTIONS_LIST = await axios.get(`/topics/${sections_ids.solutions}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (SOLUTIONS_LIST) solutions = SOLUTIONS_LIST.data;

      // FETCH SOLUTIONS
      let pwaFeatures = [];

      const PWAFEATURES_LIST = await axios.get(`/topics/${sections_ids.pwaFeatures}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (PWAFEATURES_LIST) pwaFeatures = PWAFEATURES_LIST.data;

      // FETCH PROJECTS
      let projects = [];

      const PROJECTS = await axios.get(`/topics/${sections_ids.projects}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (PROJECTS) projects = PROJECTS.data;

      // FETCH PLATFORMS
      let platforms = [];

      const PLATFORMS = await axios.get(`/topics/${sections_ids.platforms}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (PLATFORMS) platforms = PLATFORMS.data;

      // FETCH PRIEF PROJECTS
      let priefProjects = [];

      const PRIEF_PROJECTS = await axios.get(`/topics/${sections_ids.priefProjects}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (PRIEF_PROJECTS) priefProjects = PRIEF_PROJECTS.data;

      // FETCH WEB SERVICES
      let webServices = [];

      const WEB_SERVICES = await axios.get(`/topics/${sections_ids.webServices}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (WEB_SERVICES) webServices = WEB_SERVICES.data;

      // FETCH SCREENSHOTS
      let screenshots = [];

      const SCREENSHOTS = await axios.get(`/topics/${sections_ids.screenshots}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (SCREENSHOTS) screenshots = SCREENSHOTS.data;

      // FETCH TEAM
      let teamMembers = [];

      const TEAM = await axios.get(`/topics/${sections_ids.teamMembers}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (TEAM) teamMembers = TEAM.data;

      // FETCH SAMPLES
      let samples = [];

      const SAMPLES = await axios.get(`/topics/${sections_ids.samples}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (SAMPLES) samples = SAMPLES.data;

      // FETCH SAMPLES
      let addresses = [];

      const ADDRESSES = await axios.get(`/topics/${sections_ids.addresses}/page/${1}/count/${50}/${locale}`).catch(() => error = true);

      if (ADDRESSES) addresses = ADDRESSES.data;


      // RETURN STATEMENTS
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
          headerSlider,
          steps,
          notifications,
          solutions,
          testimonials,
          pwaFeatures,
          projects,
          platforms,
          priefProjects,
          webServices,
          screenshots,
          teamMembers,
          samples,
          addresses
        },
      };
    }
);
