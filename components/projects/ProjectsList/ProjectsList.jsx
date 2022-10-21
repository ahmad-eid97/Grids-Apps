/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './projectsList.module.scss';

const projects = [{}, {}, {}, {}, {}, {}]

const ProjectsList = () => {
  return (
    <div className={cls.projectsList}>

      <img className={cls.backImage} src="/imgs/projects/feature-shape.png" alt="backImage" />

      <Container maxWidth="xl">

        {projects.map((project, idx) => (

          <Grid container className={cls.project} spacing={5} alignItems="center" key={idx}>

            <Grid item md={7}>

              <div className={cls.imageSide}>
                <img src="/imgs/projects/project.jpg" alt="projectImage" />
              </div>

            </Grid>

            <Grid item md={5}>

              <div className={cls.details}>

                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab officia soluta</h1>

                <button>SHOW PROJECT</button>

              </div>

            </Grid>

          </Grid>

        ))}

      </Container>

    </div>
  )
}

export default ProjectsList