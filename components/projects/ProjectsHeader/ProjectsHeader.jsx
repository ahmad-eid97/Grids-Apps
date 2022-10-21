import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './projectsHeader.module.scss';

const ProjectsHeader = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className={cls.projectsHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h1>{t("projects.pageTitle")}</h1>

          <p>{t("projects.pageContent")}</p>

        </div>

      </Container>

    </div>
  )
}

export default ProjectsHeader