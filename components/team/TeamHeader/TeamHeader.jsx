import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './teamHeader.module.scss';

const TeamHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.teamHeader}>

      <Container maxWidth="xl">

        <div className={cls.head}>
          <h1>{t("team.members")}</h1>
          <div>
            <span>{t("team.home")}</span>
            <i className="fa-light fa-arrow-right"></i>
            <span>{t("team.pages")}</span>
            <i className="fa-light fa-arrow-right"></i>
            <span>{t("team.members")}</span>
          </div>
        </div>

      </Container>

    </div>
  )
}

export default TeamHeader