/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './projectsList.module.scss';

const ProjectsList = ({ webProjects }) => {
  const router = useRouter()

  return (
    <div className={cls.projectsList}>

      <img className={cls.backImage} src="/imgs/projects/feature-shape.png" alt="backImage" />

      <Container maxWidth="xl">

        {webProjects.topics.map((project, idx) => (

          <Grid container className={cls.project} spacing={5} alignItems="center" key={idx}>

            <Grid item md={7}>

              <div className={cls.imageSide}>
                <img src={project.photo_file} alt="projectImage" />
              </div>

            </Grid>

            <Grid item md={5}>

              <div className={cls.details}>

                <h1>{project.title}</h1>

                <button onClick={() => router.push(`/${project.fields.find(f => f.title === 'link').value}`)}>SHOW PROJECT</button>

              </div>

            </Grid>

          </Grid>

        ))}

      </Container>

    </div>
  )
}

export default ProjectsList