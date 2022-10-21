/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './download.module.scss';

const Download = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.download}>

      <Container maxWidth="xl">

        <div className={cls.wrapper}>

          <h1>{t("team.download")}</h1>

          <div>
            <img src="/imgs/team/apple.png" alt="apple" />
            <img src="/imgs/team/google.png" alt="apple" />
          </div>

        </div>

      </Container>

    </div>
  )
}

export default Download