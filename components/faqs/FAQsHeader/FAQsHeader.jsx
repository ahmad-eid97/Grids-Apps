import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './FAQsHeader.module.scss';

const FAQsHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.faqsHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("faqs.title")}</h1>

          <p>{t("faqs.content")}</p>

        </div>

      </Container>

    </div>
  )
}

export default FAQsHeader