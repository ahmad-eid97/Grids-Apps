//= Components
import Info from "./Info";
import Features from "./Features";
import Details from "./Details";
import Features2 from "./Features2";
import Features3 from "./Features3";
import ServiceVideo from "./Video";
import Details2 from "./Details2";
import FAQ from "./FAQ";
import Testimonials from '@/components/Home/Testimonials';
import Video from '@/components/Home/Video';
import ServiceContact from "./Contact";
//= Types
import { SectionsResponse, SectionResponse, IContactData } from '@/types';
//= Styles
import cls from './wrapper.module.scss';

type Props = {
  serviceId: number;
  data: {
    serviceDetails: SectionResponse | undefined;
    faqs: SectionsResponse | undefined;
    video: SectionsResponse | undefined;
    testimonials: SectionsResponse | undefined;
    contactData: IContactData | undefined;
  }
}

export default function ServiceWrapper({ serviceId, data }: Props) {
  return (
    <div className={cls.wrapper}>
      <Info serviceDetails={data?.serviceDetails?.topic[0]} />
      <Features />
      <Details />
      <Features2 />
      <Features3 />
      <ServiceVideo />
      <Details2 />
      <FAQ data={data?.faqs} />
      <Testimonials data={data.testimonials} />
      <Video data={{ platforms: undefined, video: data.video }} withoutNumbers />
      <ServiceContact serviceId={serviceId} contactData={data?.contactData} />
    </div>
  )
}