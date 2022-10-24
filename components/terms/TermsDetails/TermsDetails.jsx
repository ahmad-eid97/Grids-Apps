import { useEffect } from 'react';

import cls from './termsDetails.module.scss';

const TermsDetails = ({ setCurrentTab, allSections }) => {
  useEffect(() => {
    const element1 = document.getElementById(0);
    const element2 = document.getElementById(1);
    const element3 = document.getElementById(2);
    const element4 = document.getElementById(3);
    const element5 = document.getElementById(4);
    let elements = [element1, element2, element3, element4, element5];

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

  console.log(allSections)

  return (
    <div className={cls.termsDetails}>

      {allSections.map((section, idx) => (

        <div className={cls.section} id={idx} key={idx}>
          <h2>{section.topics[0].title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
        </div>

      ))}

    </div>
  )
}

export default TermsDetails