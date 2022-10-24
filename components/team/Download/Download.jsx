/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import cls from './download.module.scss';

const Download = ({ teamLinks }) => {
  const { t, i18n } = useTranslation('common');
  
  return (
    <div className={cls.download}>

      <Container maxWidth="xl">

        <div className={cls.wrapper}>

          <h1>{t("team.download")}</h1>

          <div>
            {teamLinks.topics.map((link, idx) => (
              <Link href={link.fields.find(f => f.title === 'link').value} key={idx}>
                <img src={link.photo_file} alt={link.title} />
              </Link>
            ))}
          </div>

        </div>

      </Container>

    </div>
  )
}

export default Download