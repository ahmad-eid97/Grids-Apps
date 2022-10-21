import { useState, useEffect } from 'react';

import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import Cookies from 'universal-cookie';
const cookie = new Cookies();

import cls from './langSwitch.module.scss'

const LangSwitch = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [lang, setLang] = useState(cookie.get('GridsAppsLang'));
  const router = useRouter();
  const { t, i18n } = useTranslation('nav');

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const switchLang = () => {
    let lang = ''
    const currentLang = cookie.get('GridsAppsLang');
    if (currentLang === 'en') lang = 'ar'
    else lang = 'en'

    setLang(lang)
    i18n.changeLanguage(lang)
    cookie.set('GridsAppsLang', lang, {path: "/"})

    if (lang === 'ar') {
      router.replace(router, null, { locale: lang });
    } else {
      router.replace(router, router.asPath, { locale: lang });
    }
  }

  if (!hasMounted) return null;

  return (
    <div className={cls.lang}>
      <h5 onClick={switchLang}>{lang === 'ar' ? 'English' : 'العربية'}</h5>
    </div>
  )
}

export default LangSwitch;