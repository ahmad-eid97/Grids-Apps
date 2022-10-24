/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import ModalVideo from 'react-modal-video';

import { useTranslation } from 'next-i18next';

import cls from './FAQsSidebar.module.scss';

const FAQsSidebar = ({ activeTab, setActiveTab, sidebarLinks, faqsVideo }) => {
	const [isOpen, setOpen] = useState(false)
  const { i18n } = useTranslation('common')

  const scrollIntoView = (element) => {
    setActiveTab(element)
    var element = document.getElementById(element);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.faqsSidebar}>
        <ul>
          {sidebarLinks.categories.map((link, idx) => (
           <li key={idx} className={activeTab === `${idx}` ? cls.active : ''} onClick={() => scrollIntoView(`${idx}`)}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> {link.title}</li>
          ))}
        </ul>
      </div>
    
      <div className={cls.video}>
        <img src={faqsVideo.topics[0].photo_file} alt={faqsVideo.topics[0].title} />
        <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
      </div>

      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={faqsVideo.topics[0].video_file} onClose={() => setOpen(false)} />

    </div>
  )
}

export default FAQsSidebar