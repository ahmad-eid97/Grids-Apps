import { useState, useRef } from "react";

import LangSwitch from "../../switches/LangSwitch/LangSwitch";

import Link from 'next/link'
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import cls from "./MobSidebar.module.scss";

const MobileMenu = ({ mobSidebar, setMobSidebar, setMenuClosed }) => {
  const [closing, setClosing] = useState(true)
  const router = useRouter()
  let backdrop = useRef();
  const { t, i18n } = useTranslation();

  // COMPONENT HANDLERS
  const close = () => {
    setClosing(false)
    setMenuClosed(true)
    setTimeout(() => {
      setMobSidebar(false);
    }, 300)
  };

  const closeMenu = (e) => {
    if (backdrop.current === e.target) {
      setClosing(false)
      setMenuClosed(true)
      setTimeout(() => {
        setMobSidebar(false);
      }, 300)
    }
  };

  const navigateBtns = (link) => {
    router.push(link)
    close()
  }

  return (
    <div className={`${cls.wrapper} ${closing ? cls.show : cls.hide}`}>

      <div className={cls.dropLayer} onClick={closeMenu} ref={backdrop}></div>

      <div className={`${cls.mobSidebar} ${cls[i18n.language]}`} sx={{ bgcolor: 'background.secondary' }}>

        <div className={cls.items}>
          <ul>
            <Link href="/" passHref>
              <li onClick={close} className={`${router.pathname == "/" ? cls.active : ""}`}>
                <i className={`fa-regular fa-square ${cls[i18n.language]}`}></i>
                Home
              </li>
            </Link>
            <Link href="/about" passHref>
              <li onClick={close} className={`${router.pathname == "/about" ? cls.active : ""}`}>
                <i className={`fa-regular fa-square ${cls[i18n.language]}`}></i>
                About Us
              </li>
            </Link>
            <Link href="/services" passHref>
              <li onClick={close} className={`${router.pathname == "/services" ? cls.active : ""}`}> 
                <i className={`fa-regular fa-square ${cls[i18n.language]}`}></i>
                Services
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li onClick={close} className={`${router.pathname == "/contact" ? cls.active : ""}`}>
                <i className={`fa-regular fa-square ${cls[i18n.language]}`}></i>
                Contact
              </li>
            </Link>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default MobileMenu;
