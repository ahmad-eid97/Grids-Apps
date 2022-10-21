import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import cls from './servicesHeader.module.scss';

const ServicesHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.servicesHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("servicesPage.title")}</h1>

          <p>{t("services.content")}</p>

        </div>

      </Container>

    </div>
  )
}

export default ServicesHeader