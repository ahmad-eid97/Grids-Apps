'use client';
import { useRouter } from "next13-progressbar";
//= Types
import { ITopic } from "@/types";
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Styles
import cls from './item.module.scss';

type Props = {
  item: ITopic;
}

export default function ServiceItem({ item }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.common.services;
  const router = useRouter();

  return (
    <div className={cls.service}>
      <div className={cls.image}>
        <img loading='lazy' src={item.photo_file || ''} alt={item.title} />
      </div>
      <div className={cls.content}>
        <h3>{item.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: `${item.details.substring(0, 200)}...` || '' }}></div>
      </div>
      <button onClick={() => router.push(`/service/${item.id}`)}>{translations.service.readMore}</button>
    </div >
  )
}