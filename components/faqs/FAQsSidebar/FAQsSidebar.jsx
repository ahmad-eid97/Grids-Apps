/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import ModalVideo from 'react-modal-video';

import { useTranslation } from 'next-i18next';

import cls from './FAQsSidebar.module.scss';

const FAQsSidebar = ({ activeTab, setActiveTab }) => {
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
          <li className={activeTab === 'gettingStarted' ? cls.active : ''} onClick={() => scrollIntoView('gettingStarted')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Getting Started</li>
          <li className={activeTab === 'howWorks' ? cls.active : ''} onClick={() => scrollIntoView('howWorks')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> How Grids Apps Works</li>
          <li className={activeTab === 'plugins' ? cls.active : ''} onClick={() => scrollIntoView('plugins')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Plugins</li>
          <li className={activeTab === 'updating' ? cls.active : ''} onClick={() => scrollIntoView('updating')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Updating The App</li>
          <li className={activeTab === 'security' ? cls.active : ''} onClick={() => scrollIntoView('security')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Security</li>
        </ul>
      </div>
    
      <div className={cls.video}>
        <img src="/imgs/testimonials/video.png" alt="videoImage" />
        <i className="fa-duotone fa-play" onClick={()=> setOpen(true)}></i>
      </div>

      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ObZwFExwzOo" onClose={() => setOpen(false)} />

    </div>
  )
}

export default FAQsSidebar