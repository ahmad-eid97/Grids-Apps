import { cache } from 'react';
//= Static data
import { getStaticWebProjects, getStaticMobileProjects } from '../staticData';
//= Types
import type { SectionResponse } from './types';

export const getWebProjects = cache(async (locale: string): Promise<SectionResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const d = getStaticWebProjects(l);
  return { section_title: d.section_title, topics: d.topics ?? [] };
});

export const getMobileApps = cache(async (locale: string): Promise<SectionResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const d = getStaticMobileProjects(l);
  return { section_title: d.section_title, topics: d.topics ?? [] };
});
