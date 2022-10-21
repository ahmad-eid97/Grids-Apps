import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './privacyHeader.module.scss';

const PrivacyHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.privacyHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("privacy.title")}</h1>

          <p>{t("privacy.content")}</p>

        </div>

      </Container>

    </div>
  )
}

export default PrivacyHeader