import { cache } from 'react';
//= Static data
import {
  getStaticServices,
  getStaticSolutions,
  getStaticSteps,
  getStaticActivities,
  getStaticTestimonials,
  getStaticPlatforms,
  getStaticVideo,
  getStaticBriefProjects,
  getStaticTeam,
  getStaticBlogs,
  getStaticAddresses,
  getStaticMainSlider,
  staticSocialLinks,
  getStaticSiteMetadata,
  getStaticContactData,
} from '../staticData';
//= Types
import type { IContactData, IWebsiteMetadata, IWebsiteSocial, SectionsResponse } from './types';

export const getAllSections = cache(async (locale: string) => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return {
    mainSlider: getStaticMainSlider(l),
    services: getStaticServices(l),
    solutions: getStaticSolutions(l),
    steps: getStaticSteps(l),
    projects: { topics: [] } as SectionsResponse,
    samples: [],
    activites: getStaticActivities(l),
    testimonials: getStaticTestimonials(l),
    platforms: getStaticPlatforms(l),
    video: getStaticVideo(l),
    briefProjects: getStaticBriefProjects(l),
    team: getStaticTeam(l),
    blogs: getStaticBlogs(l).topics ?? [],
    addresses: getStaticAddresses(l),
  };
});

export const getSocialLinks = cache(async (): Promise<IWebsiteSocial> => {
  return staticSocialLinks;
});

export const getSiteMetadata = cache(async (locale: string): Promise<IWebsiteMetadata> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticSiteMetadata(l);
});

export const getContactData = cache(async (locale: string): Promise<IContactData> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticContactData(l);
});
