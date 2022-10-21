import { useState } from 'react';

import Box from '@mui/material/Box';

import { useTranslation } from 'react-i18next';

import cls from './dataAccordion.module.scss'

const Accordion = ({ data }) => {
  // COMPONENT HOOKS
  const [showSub, setShowSub] = useState('')
  const { i18n } = useTranslation()

  // COMPONENT HANDLERS
  const showSubList = (e, list) => {
    if(showSub === list) {
      setShowSub('')
    }
    else {
      setShowSub(list)
    }

    let subMenu = e.target.nextElementSibling;

    if (subMenu) {
      let maxHeight = subMenu.scrollHeight;

      if (!subMenu.style.maxHeight) {
        subMenu.style.maxHeight = maxHeight + 'px';
      } else {
        subMenu.style.maxHeight = null;
      }
    }
  }

  return (
    <Box className={`${cls.accordion_link} ${showSub === 'products' ? cls.showSub : ''} ${cls[i18n.language]}`}>

      <Box className={`${cls.link} ${cls[i18n.language]}`} onClick={(e) => showSubList(e, 'products')}>

        <Box className={`${cls.label} ${cls[i18n.language]}`}>

          {data.label}

        </Box>

        <Box className={cls.icon}>
          <i className={`${cls[i18n.language]} fa-light fa-down`}></i>
        </Box>

      </Box>

      <Box className={`${cls.subMenu} ${cls[i18n.language]} subMenu`}>

        {showSub === 'products' && <Box className={cls.dropLayer} onClick={(e) => showSubList(e, '')}></Box>}

        <Box className={cls.accordionBody}>

          <p>
            {data.content}
          </p>

        </Box>

      </Box>

    </Box>
  )
}

export default Accordion