import { cache } from 'react';
//= Static data
import {
  getStaticPlatforms,
  getStaticTeam,
  getStaticTestimonials,
  getStaticBlogs,
  getStaticPackages,
  getStaticFAQs,
  getStaticVideo,
  getStaticAddresses,
  getStaticPrivacy,
  getStaticTerms,
  getStaticRefund,
} from '../staticData';
//= Types
import type { SectionResponse } from './types';
import type { SectionsResponse } from '@/types';

export const getPlatforms = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticPlatforms(l);
});

export const getTeam = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticTeam(l);
});

export const getTestimonials = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticTestimonials(l);
});

export const getBlogs = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticBlogs(l);
});

export const getBlogById = cache(async (id: number | string, locale: string) => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const numId = Number(id);
  const blogs = getStaticBlogs(l);
  return blogs.topics?.find(t => t.id === numId) ?? blogs.topics?.[0];
});

export const getPackages = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticPackages(l);
});

export const getFAQs = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticFAQs(l);
});

export const getVideo = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticVideo(l);
});

export const getAddresses = cache(async (locale: string): Promise<SectionsResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticAddresses(l);
});

export const getPrivacy = cache(async (locale: string): Promise<SectionResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticPrivacy(l);
});

export const getTerms = cache(async (locale: string): Promise<SectionResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticTerms(l);
});

export const getRefund = cache(async (locale: string): Promise<SectionResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticRefund(l);
});
