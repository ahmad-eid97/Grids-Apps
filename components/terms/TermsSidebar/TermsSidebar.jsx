/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import cls from './termsSidebar.module.scss';

const TermsSidebar = ({ currentTab, setCurrentTab }) => {
  const { i18n } = useTranslation('common')

  const scrollIntoView = (element) => {
    setCurrentTab(element)
    var elementFound = document.getElementById(element);
    elementFound.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.termsSidebar}>
        <ul>
          <li className={currentTab === 'pricing' ? cls.active : ''} onClick={() => scrollIntoView('pricing')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Pricing</li>
          <li className={currentTab === 'conditions' ? cls.active : ''} onClick={() => scrollIntoView('conditions')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> Conditions</li>
          <li className={currentTab === 'security2' ? cls.active : ''} onClick={() => scrollIntoView('security2')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i>Security and storage</li>
          <li className={currentTab === 'information' ? cls.active : ''} onClick={() => scrollIntoView('information')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i>Usage Information</li>
          <li className={currentTab === 'address' ? cls.active : ''} onClick={() => scrollIntoView('address')}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> IP Address</li>
        </ul>
      </div>

    </div>
  )
}

export default TermsSidebar