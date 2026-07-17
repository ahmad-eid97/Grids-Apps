import React from 'react';
import cls from './styles.module.scss';

export default function DemoBar() {
  return (
    <div className={cls.demoBar}>
      <span className={cls.badge}>DEMO</span>
      <span className={cls.divider}>|</span>
      <span className={cls.text}>
        This is a demo for portfolio – the real website is offline. All content is static placeholder data.
      </span>
    </div>
  );
}
