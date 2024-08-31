import React, { useState } from 'react';
import styles from './EducationLayout.module.css';

export const EducationLayout = ({children, sectionName}) => {
    const [isActive, changeActive] = useState(false);

    const handleActiveChange = () => {
        changeActive(!isActive);
    }

  return (
    <section className={styles['education-layout-w']}>
        <div className={styles['film-strip']}>
            <button type='button' className={`${styles['education-layout-btn']} ${isActive ? styles['education-layout-btn-clicked'] : ''}`} onClick={handleActiveChange}>
              {sectionName}
            </button>
        </div>
        {isActive && <div className={styles['education-layout-c']}>{children}</div>}
    </section>
  )
}
