import React from 'react';
//= Styles
import cls from './styles.module.scss';

type Props = {
  title: string;
  description: string;
  image?: string;
}

function Header({ title, description, image = '/imgs/innser_pages.svg' }: Props) {
  return (
    <header className={cls.header}>
      <div className={cls.icon}>
        <img loading='lazy' src={image} alt="header image" />
      </div>
      <div className={cls.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}

export default Header