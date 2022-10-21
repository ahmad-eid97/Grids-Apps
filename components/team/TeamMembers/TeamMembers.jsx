/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './teamMembers.module.scss';

const TeamMembers = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.teamMembers}>

      <Container>

        <div className={cls.head}>

          <h6>{t("team.meet")}</h6>

          <h1>{t("team.expert")}</h1>

          <p>{t("team.pageContent")}</p>

        </div>

        <Grid container spacing={10}>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <div className={cls.member}>
              
              <div className={cls.image}>
                <img src="/imgs/testimonials/me.jpg" alt="categoryName" />
                <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
              </div>

              <div className={cls.details}>
                <h2>Ahmad Eid</h2>
                <p>Front end developer</p>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

            </div>

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default TeamMembers