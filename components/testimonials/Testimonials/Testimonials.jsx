/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import ModalVideo from 'react-modal-video';

import { useTranslation } from 'next-i18next';

import cls from './testimonials.module.scss';

const Testimonials = () => {
	const [isOpen, setOpen] = useState(false);
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

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

                <div className={`${cls.client} ${cls.active}`}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

              </div>

              <div className={cls.clients}>

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

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

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

              </div>

              <div className={cls.clients}>

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

                <div className={`${cls.client} ${cls.active}`}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

                <div className={cls.client}>
                  <div className={cls.user}>
                    <img src="/imgs/testimonials/me.jpg" alt="userImage" />
                    <div className={cls.details}>
                      <h4>ahmad eid</h4>
                      <p>front end developer</p>
                    </div>
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo recusandae quis impedit rerum non dignissimos quas ipsa sed dolores harum.</p>
                  <h6>Awesome App</h6>
                </div>

              </div>

            </div>

          </Grid>

        </Grid>

        <div className={cls.videos}>

          <Grid container spacing={5}>

            <Grid item md={4}>
              <div className={cls.video}>
                <img src="/imgs/testimonials/video.png" alt="videoImage" />
                <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
              </div>
            </Grid>

            <Grid item md={4}>
              <div className={cls.video}>
                <img src="/imgs/testimonials/video.png" alt="videoImage" />
                <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
              </div>
            </Grid>

            <Grid item md={4}>
              <div className={cls.video}>
                <img src="/imgs/testimonials/video.png" alt="videoImage" />
                <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
              </div>
            </Grid>

            <Grid item md={4}>
              <div className={cls.video}>
                <img src="/imgs/testimonials/video.png" alt="videoImage" />
                <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
              </div>
            </Grid>

            <Grid item md={4}>
              <div className={cls.video}>
                <img src="/imgs/testimonials/video.png" alt="videoImage" />
                <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
              </div>
            </Grid>

            <Grid item md={4}>
              <div className={cls.video}>
                <img src="/imgs/testimonials/video.png" alt="videoImage" />
                <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
              </div>
            </Grid>

          </Grid>

        </div>

        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ObZwFExwzOo" onClose={() => setOpen(false)} />

      </Container>

    </div>
  )
}

export default Testimonials