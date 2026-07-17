import { cache } from 'react';
//= Static data
import { getStaticServiceDetails } from '../staticData';
//= Types
import type { SectionResponse, QuotePayload, QuoteResponse } from './types';

export const getServiceDetails = cache(async (locale: string, serviceId: number): Promise<SectionResponse> => {
  const l = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  return getStaticServiceDetails(serviceId, l);
});

export const sendQuote = async (_payload: QuotePayload): Promise<QuoteResponse> => {
  return { code: '200', msg: 'Your quote request has been received. We will be in touch shortly!' };
};
