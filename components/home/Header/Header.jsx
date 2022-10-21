/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import Grid from '@mui/material/Grid';

import ModalVideo from 'react-modal-video';

import { useTranslation } from 'next-i18next';

import cls from './header.module.scss'

const Header = ({ headerSlider }) => {
	const [isOpen, setOpen] = useState(false)
  const { t, i18n } = useTranslation('common')

  return (
    <div className={cls.header}>
      <Grid container className={cls.wrapper}>
        <Grid item xs={12} lg={6}>
          <div className={`${cls.image} ${cls[i18n.language]}`}>
            <img src={headerSlider.topics[0].photo_file} alt="bannerImage" />
            {/* <div href="https://www.youtube.com/watch?v=ObZwFExwzOo" className={`${cls.video_button} ${cls.popup}`}> */}
            <div className={cls.videoWrapper}>
              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={headerSlider.topics[0].fields.find(f => f.title === 'Video link').value} onClose={() => setOpen(false)} />

              <div className={`${cls.video} ${cls.popup}`} onClick={()=> setOpen(true)}>
                <i className="fa-duotone fa-play"></i>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={cls.header__details}>
            <h1>{headerSlider.topics[0].title}</h1>
            <p>{headerSlider.topics[0].details}</p>
            <button>{t("general.getStarted")}</button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header