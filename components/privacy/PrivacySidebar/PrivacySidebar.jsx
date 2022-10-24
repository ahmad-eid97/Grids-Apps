/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import cls from './privacySidebar.module.scss';

const PrivacySidebar = ({ currentTab, setCurrentTab, sidebarLinks }) => {
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
          {sidebarLinks.categories.map((link, idx) => (
            <li key={idx} className={currentTab === `${idx}` ? cls.active : ''} onClick={() => scrollIntoView(`${idx}`)}><i className={`fa-light fa-caret-${i18n.language === 'en' ? 'right' : 'left'}`}></i> {link.title}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default PrivacySidebar