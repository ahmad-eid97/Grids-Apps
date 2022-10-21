import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './partnersHeader.module.scss';

const PartnersHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.partnersHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("partners.title")}</h1>

          <p>{t("partners.content")}</p>

        </div>

      </Container>

    </div>
  )
}

export default PartnersHeader