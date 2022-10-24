/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import ModalVideo from 'react-modal-video';

import { useTranslation } from 'next-i18next';

import cls from './testimonials.module.scss';

const Testimonials = ({ testimonials, testimonialsVideos }) => {
	const [isOpen, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({})
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.testimonials}>

      <Container maxWidth="xl">

        <div className={cls.head}>

          <h6>{t("testimonials.pageTestimonials")}</h6>

          <h1>{t("testimonials.pageTestimonialsTitle")}</h1>

        </div>

        <Grid container spacing={5}>

          <Grid item lg={5}>

            <div className={cls.wrapper}>

              <div className={cls.clients}>

                {testimonials.topics.slice(0, 3).map((single, idx) => (

                  <div className={cls.client} key={idx}>
                    <div className={cls.user}>
                      <img src={single.photo_file ? single.photo_file : "/imgs/testimonials/default.jpg"} alt="userImage" />
                      <div className={cls.details}>
                        <h4>{single.title}</h4>
                        <p>{single.fields.find(f => f.title === 'job').value}</p>
                      </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                    <p>{single.details}</p>
                    <h6>Grids Apps Clients</h6>
                  </div>

                ))}

              </div>

              <div className={cls.clients}>

                {testimonials.topics.slice(5, 7).map((single, idx) => (

                  <div className={cls.client} key={idx}>
                    <div className={cls.user}>
                      <img src={single.photo_file ? single.photo_file : "/imgs/testimonials/default.jpg"} alt="userImage" />
                      <div className={cls.details}>
                        <h4>{single.title}</h4>
                        <p>{single.fields.find(f => f.title === 'job').value}</p>
                      </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                    <p>{single.details}</p>
                    <h6>Grids Apps Clients</h6>
                  </div>

                ))}

              </div>

            </div>

          </Grid>

          <Grid item lg={2}>

            <div className={cls.middle}>

              <div className={cls.circle}>01</div>
              <div className={cls.circle}>02</div>
              <div className={cls.circle}>03</div>

            </div>

          </Grid>

          <Grid item lg={5}>

            <div className={cls.wrapper}>

              <div className={cls.clients}>

                {testimonials.topics.slice(3, 5).map((single, idx) => (

                  <div className={cls.client} key={idx}>
                    <div className={cls.user}>
                      <img src={single.photo_file ? single.photo_file : "/imgs/testimonials/default.jpg"} alt="userImage" />
                      <div className={cls.details}>
                        <h4>{single.title}</h4>
                        <p>{single.fields.find(f => f.title === 'job').value}</p>
                      </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                    <p>{single.details}</p>
                    <h6>Grids Apps Clients</h6>
                  </div>

                ))}

              </div>

              <div className={cls.clients}>

                {testimonials.topics.slice(7, 10).map((single, idx) => (

                  <div className={cls.client} key={idx}>
                    <div className={cls.user}>
                      <img src={single.photo_file ? single.photo_file : "/imgs/testimonials/default.jpg"} alt="userImage" />
                      <div className={cls.details}>
                        <h4>{single.title}</h4>
                        <p>{single.fields.find(f => f.title === 'job').value}</p>
                      </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                    <p>{single.details}</p>
                    <h6>Grids Apps Clients</h6>
                  </div>

                ))}

              </div>

            </div>

          </Grid>

        </Grid>

        <div className={cls.videos}>

          <Grid container spacing={5}>

            {testimonialsVideos.topics.map((video, idx) => (

              <Grid item md={4} key={idx}>
                <div className={cls.video}>
                  <img src={video.photo_file} alt={video.title} />
                  <i className="fa-duotone fa-play" onClick={()=> {
                    setOpen(true)
                    setCurrentVideo(video.fields.find(f => f.title === 'link').value)
                  }}></i>
                </div>
              </Grid>

            ))}

          </Grid>

        </div>

        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={currentVideo} onClose={() => {setOpen(false); setCurrentVideo({})}} />

      </Container>

    </div>
  )
}

export default Testimonials