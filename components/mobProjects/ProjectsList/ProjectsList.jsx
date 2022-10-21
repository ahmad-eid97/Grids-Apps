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

              <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab officia soluta</h1>

              <button>SHOW PROJECT</button>

            </div>

          </div>

        ))}

      </Container>

    </div>
  )
}

export default ProjectsList