/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import cls from './privacySidebar.module.scss';

const PrivacySidebar = ({ currentTab, setCurrentTab }) => {
  const { i18n } = useTranslation('common')

  const scrollIntoView = (element) => {
    setCurrentTab(element)
    var elementFound = document.getElementById(element);
    elementFound.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.privacySidebar}>
        <ul>
          <li className={currentTab === 'general' ? cls.active : ''} onClick={() => scrollIntoView('general')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> General</li>
          <li className={currentTab === 'property' ? cls.active : ''} onClick={() => scrollIntoView('property')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Intellectual Property</li>
          <li className={currentTab === 'security2' ? cls.active : ''} onClick={() => scrollIntoView('security2')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i>Security and storage</li>
          <li className={currentTab === 'information' ? cls.active : ''} onClick={() => scrollIntoView('information')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i>Usage Information</li>
          <li className={currentTab === 'cookies' ? cls.active : ''} onClick={() => scrollIntoView('cookies')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Cookies</li>
          <li className={currentTab === 'address' ? cls.active : ''} onClick={() => scrollIntoView('address')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> IP Address</li>
        </ul>
      </div>

    </div>
  )
}

export default PrivacySidebar