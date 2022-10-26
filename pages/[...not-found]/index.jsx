/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import langRedirection from '../../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from '../../store/store';

import cls from './notFound.module.scss';

const NotFound = () => {
  const { t } = useTranslation('common')

  return (
    <div className={cls.notFound}>
      <div className={cls.wrapper}>
        <img src="/imgs/notFound/notFound.png" alt="notFoundImage" />
        <h3>{t('notFound.message')}</h3>
        <button>
          <Link href="/">
            {t('notFound.return')}
          </Link>
        </button>
      </div>
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
 
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
          locale,
        },
      };
    }
);

export default NotFound