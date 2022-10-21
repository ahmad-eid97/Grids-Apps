import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './testimonialsHead.module.scss';

const TestimonialsHead = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.testimonialsHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("testimonials.pageTitle")}</h1>

          <p>{t("testimonials.pageContent")}</p>

        </div>

      </Container>

    </div>
  )
}

export default TestimonialsHead