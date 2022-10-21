import { useEffect } from 'react';

import cls from './termsDetails.module.scss';

const TermsDetails = ({ setCurrentTab }) => {
  useEffect(() => {
    const element1 = document.getElementById('pricing');
    const element2 = document.getElementById('conditions');
    const element3 = document.getElementById('security2');
    const element4 = document.getElementById('information');
    const element5 = document.getElementById('address');
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

  return (
    <div className={cls.termsDetails}>

      <div className={cls.section} id="pricing">
        <h2>Pricing</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
      </div>

      <div className={cls.section} id="conditions">
        <h2>Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
      </div>

      <div className={cls.section} id="security2">
        <h2>Security and storage</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
      </div>

      <div className={cls.section} id="information">
        <h2>Usage Information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
      </div>

      <div className={cls.section} id="address">
        <h2>IP Address</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
      </div>

    </div>
  )
}

export default TermsDetails