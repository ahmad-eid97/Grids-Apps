/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './projectsList.module.scss';

const ProjectsList = ({ mobProjects }) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div className={cls.projectsList}>

      <img className={cls.backImage} src="/imgs/projects/feature-shape.png" alt="backImage" />

      <Container maxWidth="xl">

        {mobProjects.topics.map((project, idx) => (

          <div container className={cls.project} spacing={5} alignItems="center" key={idx}>

            <div className={cls.images}>

              <div className={cls.image}>
                <img src="/imgs/projects/projectMob.jpg" alt="projectImage" />
              </div>

              <div className={cls.image}>
                <img src="/imgs/projects/projectMob2.jpg" alt="projectImage" />
              </div>

              <div className={cls.image}>
                <img src="/imgs/projects/projectMob2.jpg" alt="projectImage" />
              </div>

              <div className={cls.image}>
                <img src="/imgs/projects/projectMob3.jpg" alt="projectImage" />
              </div>
              
            </div>

            <div className={cls.details}>

              <h1>{project.title}</h1>

              <button onClick={() => router.push(`/${project.fields.find(f => f.title === 'link').value}`)}>{t('general.showProject')}</button>

            </div>

          </div>

        ))}

      </Container>

    </div>
  )
}

export default ProjectsList