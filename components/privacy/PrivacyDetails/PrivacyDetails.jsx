import { useEffect } from 'react';

import cls from './privacyDetails.module.scss';

const PrivacyDetails = ({ setCurrentTab, allSections }) => {
  useEffect(() => {
    const element1 = document.getElementById('0');
    const element2 = document.getElementById('1');
    const element3 = document.getElementById('2');
    const element4 = document.getElementById('3');
    const element5 = document.getElementById('4');
    const element6 = document.getElementById('5');
    let elements = [element1, element2, element3, element4, element5, element6];

    const handleScroll = () => {
      elements.forEach(element => {
        if (window.pageYOffset >= element.getBoundingClientRect().top - 400) {
          setCurrentTab(element.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll())

    return () => window.removeEventListener("scroll", handleScroll);

  })

  return (
    <div className={cls.privacyDetails}>

      {allSections.map((section, idx) => (

        <div className={cls.section} id={idx} key={idx}>
          <h2>{section.topics[0].title}</h2>
          <p>{section.topics[0].details}</p>
        </div>

      ))}

    </div>
  )
}

export default PrivacyDetails