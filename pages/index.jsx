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
      
      // GET ALL SECTIONS DATA
      const getSectionsData = async (sectionID) => {
        const response = await axios.get(`/topics/${sectionID}/page/${1}/count/${50}/${locale}`).catch(() => error = true);
        if (response) return response.data
      }

      const allSectionsLinks = [
        sections_ids.headerSlider,
        sections_ids.steps,
        sections_ids.notifications,
        sections_ids.testimonials,
        sections_ids.solutions,
        sections_ids.pwaFeatures,
        sections_ids.projects,
        sections_ids.platforms,
        sections_ids.priefProjects,
        sections_ids.webServices,
        sections_ids.screenshots,
        sections_ids.teamMembers,
        sections_ids.samples,
        sections_ids.addresses
      ]

      const allLinks = allSectionsLinks.map(link => {
        return getSectionsData(link)
      })

      // GREAT WAY TO MAKE ALL REQUESTS AT THE SAME TIME
      const allSections = await Promise.all([...allLinks]).catch(() => error = true);


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
          headerSlider: allSections.find(s => s.section_title === 'HeaderSlider'),
          steps: allSections.find(s => s.section_title === 'steps'),
          notifications: allSections.find(s => s.section_title === 'Notifications'),
          testimonials: allSections.find(s => s.section_title === 'Testimonials'),
          solutions: allSections.find(s => s.section_title === 'solutions'),
          pwaFeatures: allSections.find(s => s.section_title === 'PWAFeatures'),
          projects: allSections.find(s => s.section_title === 'Projects'),
          platforms: allSections.find(s => s.section_title === 'Platforms'),
          priefProjects: allSections.find(s => s.section_title === 'Prief Projects'),
          webServices: allSections.find(s => s.section_title === 'Web Services'),
          screenshots: allSections.find(s => s.section_title === 'Screenshots'),
          teamMembers: allSections.find(s => s.section_title === 'Team'),
          samples: allSections.find(s => s.section_title === 'Circle Projects'),
          addresses: allSections.find(s => s.section_title === 'address')
        },
      };
    }
);
