import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './termsHeader.module.scss';

const TermsHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.termsHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("terms.title")}</h1>

          <p>{t("terms.content")}</p>

        </div>

      </Container>

    </div>
  )
}

export default TermsHeader