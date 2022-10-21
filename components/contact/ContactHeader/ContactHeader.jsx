/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './contactHeader.module.scss';

const Contact = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <div className={cls.contactHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("contact.title")}</h1>

          <p>{t("contact.content")}</p>

        </div>

      </Container>

    </div>
  )
}

export default Contact