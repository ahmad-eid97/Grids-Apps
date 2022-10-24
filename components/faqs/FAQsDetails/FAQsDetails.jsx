import { useEffect } from 'react';

import DataAccordion from '../../UIs/DataAccordion/DataAccordion';

import cls from './FAQsDetails.module.scss';

const FAQsDetails = ({ setActiveTab, allSections }) => {
  useEffect(() => {
    const element1 = document.getElementById('0');
    const element2 = document.getElementById('1');
    const element3 = document.getElementById('2');
    const element4 = document.getElementById('3');
    const element5 = document.getElementById('4');
    let elements = [element1, element2, element3, element4, element5];

    const handleScroll = () => {
      elements.forEach(element => {
        if (window.pageYOffset >= element.getBoundingClientRect().top - 300) {
          setActiveTab(element.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll())

    return () => window.removeEventListener("scroll", handleScroll);

  })

  return (
    <div className={cls.faqsDetails}>

      {allSections.map((section, idx) => (
        <div className={cls.section} id={idx} key={idx}>
          <h2>{section.cat_title}</h2>
          {section.topics.map((topic, idx) => (
            <DataAccordion key={idx} data={topic} />
          ))}
        </div>
      ))}

    </div>
  )
}

export default FAQsDetails