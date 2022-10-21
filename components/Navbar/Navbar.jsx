/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MobSidebar from './MobSidebar/MobSidebar';
import LangSwitch from '../switches/LangSwitch/LangSwitch';

import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './navbar.module.scss';

const Navbar = () => {
  const [scrollY, setScrollY] = useState();
  const [menuClosed, setMenuClosed] = useState(true);
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const { t, i18n } = useTranslation('nav')
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(document.body.scrollTop);
    };
    handleScroll();
    document.body.addEventListener("scroll", handleScroll);
  }, []);

  const openSidebar = () => {
    setMenuClosed(!menuClosed)
    setOpenMobMenu(true)
  }

  return (
    <div className={`${cls.navbar} ${scrollY >= 100 ? cls.scrolled : ''}`}>
      <Container maxWidth="xl">
        <div className={cls.wrapper}>
          <div className={cls.navbar__logo}>
            <img src="/imgs/navbar/logo.png" alt="logoImage" />
          </div>

          <div className={cls.list}>
            <ul>
              <Link href="/" exact>
                <li className={router.pathname === '/' ? cls.active : ''}>{t('nav.home')}</li>
              </Link>
              <Link href="/about">
                <li className={router.pathname === '/about' ? cls.active : ''}>{t('nav.about')}</li>
              </Link>
              <Link href="/services">
                <li className={router.pathname === '/services' ? cls.active : ''}>{t('nav.services')}</li>
              </Link>
              <Link href="/testimonials">
                <li className={router.pathname === '/testimonials' ? cls.active : ''}>{t('nav.testimonials')}</li>
              </Link>
              <Link href="/team">
                <li className={router.pathname === '/team' ? cls.active : ''}>{t('nav.team')}</li>
              </Link>
              <Link href="/contact">
                <li className={router.pathname === '/contact' ? cls.active : ''}>{t('nav.contact')}</li>
              </Link>
            </ul>
          </div>

          <div className={cls.switch}>

            <LangSwitch />

            <div className={cls.menuIcon} onClick={openSidebar}>
              {menuClosed && <p></p>}
              <p className={!menuClosed ? cls.top : ''}></p>
              <p className={!menuClosed ? cls.bottom : ''}></p>
            </div>

          </div>
        </div>
      </Container>
      { 
        openMobMenu && <MobSidebar mobSidebar={openMobMenu} setMobSidebar={setOpenMobMenu} setMenuClosed={setMenuClosed} />
      }

    </div>
  )
}

export default Navbar