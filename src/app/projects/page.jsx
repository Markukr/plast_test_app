import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
   title: "Проекти PLAST-DK",
   description: "Сторінка проектів Пласту у данії, PLAST-DK",
};

const Projects = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.selectTitle}>Відвідайте наші заходи</h1>
         <div className={styles.items}>
            <Link href="/projects/camps" className={styles.item}>
               <span className={styles.title}>Табори</span>
            </Link>
            <Link href="/projects/promotions" className={styles.item}>
               <span className={styles.title}>Акції</span>
            </Link>
            <Link href="/projects/meeting" className={styles.item}>
               <span className={styles.title}>Сходини</span>
            </Link>
         </div>
      </div>
   )
}

export default Projects