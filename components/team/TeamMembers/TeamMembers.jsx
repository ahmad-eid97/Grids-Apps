/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './teamMembers.module.scss';

const TeamMembers = ({ teamMembers }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.teamMembers}>

      <Container>

        <div className={cls.head}>

          <h6>{t("team.meet")}</h6>

          <h1>{t("team.expert")}</h1>

          <p>{t("team.pageContent")}</p>

        </div>

        <Grid container spacing={10} justifyContent="center">

          {teamMembers.topics.map((member, idx) => (

            <Grid item xs={12} sm={6} lg={4} key={idx}>

              <div className={cls.member}>
                
                <div className={cls.image}>
                  <img src={member.photo_file ? member.photo_file : "/img/testimonials/default.jpg"} alt="categoryName" />
                  <img src="/imgs/team/topTeam.png" alt="image" className={cls.rotate} />
                </div>

                <div className={cls.details}>
                  <h2>{member.title}</h2>
                  <p>{member.fields.find(f => f.title === 'Job').value}</p>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>

              </div>

            </Grid>

          ))}

        </Grid>

      </Container>

    </div>
  )
}

export default TeamMembers