import { cache } from 'react';
//= Static data
import { getStaticAboutData, getStaticAboutHistory } from '../staticData';
//= Types
import type { SectionsResponse } from '@/types';

export const getAboutData = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticAboutData(l);
});

export const getAboutHistory = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticAboutHistory(l);
});
