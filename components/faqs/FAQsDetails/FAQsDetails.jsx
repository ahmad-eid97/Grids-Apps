import { useEffect } from 'react';

import DataAccordion from '../../UIs/DataAccordion/DataAccordion';

import cls from './FAQsDetails.module.scss';

const faqs = [
  {
    label: 'Who is Grids Apps for?',
    content: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.'
  },
  {
    label: 'Who is Grids Apps for?',
    content: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.'
  },
  {
    label: 'Who is Grids Apps for?',
    content: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.'
  },
  {
    label: 'Who is Grids Apps for?',
    content: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.'
  },
]

const FAQsDetails = ({ setActiveTab }) => {
  useEffect(() => {
    const element1 = document.getElementById('gettingStarted');
    const element2 = document.getElementById('howWorks');
    const element3 = document.getElementById('plugins');
    const element4 = document.getElementById('updating');
    const element5 = document.getElementById('security');
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

      <div className={cls.section} id="gettingStarted">
        <h2>Getting Started</h2>
        {faqs.map((one, idx) => (
          <DataAccordion key={idx} data={one} />
        ))}
      </div>

      <div className={cls.section} id="howWorks">
        <h2>How Grids Apps Works</h2>
        {faqs.map((one, idx) => (
          <DataAccordion key={idx} data={one} />
        ))}
      </div>

      <div className={cls.section} id="plugins">
        <h2>Plugins</h2>
        {faqs.map((one, idx) => (
          <DataAccordion key={idx} data={one} />
        ))}
      </div>

      <div className={cls.section} id="updating">
        <h2>Updating The App</h2>
        {faqs.map((one, idx) => (
          <DataAccordion key={idx} data={one} />
        ))}
      </div>

      <div className={cls.section} id="security">
        <h2>Security</h2>
        {faqs.map((one, idx) => (
          <DataAccordion key={idx} data={one} />
        ))}
      </div>

    </div>
  )
}

export default FAQsDetails