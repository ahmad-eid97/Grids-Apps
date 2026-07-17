import React from 'react';
//= Components
import Header from '@/components/Common/InnerPagesHeader';
import ServiceWrapper from '@/components/Service';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getFAQs, getTestimonials, getVideo } from '@/api/sections';
import { getServiceDetails } from '@/api';
import { getContactData } from '@/api/home';
//= I18n
import getDictionary from '@/dictionaries/serverDictionary';

export async function generateMetadata() {
  const { translations, locale } = await getDictionary();

  return {
    title: `${translations.pagesTitles.websiteName} - ${translations.pagesTitles.serviceDetails}`,
    description: 'Transform your business with GridsApps - the cutting-edge software solution for streamlining operations and increasing productivity. Discover our innovative suite of apps today.',
    icons: {
      icon: '/imgs/favicon.png',
      shortcut: '/imgs/favicon.png'
    }
  }
}

export default async function ServiceDetailsPage({ params }: { params: { id: number } }) {
  const { translations: dictionary, locale } = await getDictionary();
  const translations = dictionary.serviceDetails.header;
  const [serviceDetails, faqs, testimonials, video, contactData] = await Promise.all([
    asyncHandler(async () => await getServiceDetails(locale, params.id)),
    asyncHandler(async () => await getFAQs(locale)),
    asyncHandler(async () => await getTestimonials(locale)),
    asyncHandler(async () => await getVideo(locale)),
    asyncHandler(async () => await getContactData(locale))
  ]);

  return (
    <>
      <Header
        title={translations.title}
        description={translations.description}
      />
      <ServiceWrapper
        serviceId={params?.id}
        data={{ serviceDetails, faqs, video, testimonials, contactData }}
      />
    </>
  )
}
