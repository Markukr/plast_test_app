import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'

export const metadata = {
   title: "Про PLAST-DK",
   description: "Сторінка про пласт у данії, PLAST-DK",
};

const About = () => {
   return (
      <div className={styles.container}>
         <div className={styles.imgContainer}>
            <Image
               src="/hero_about.jpeg"
               fill={true}
               alt="img"
               className={styles.img}
            />
            <div className={styles.imgText}>
               <h1 className={styles.imgTitle}>Місія Пласту у Данії</h1>
               <h2 className={styles.imgDesc}>
                  Ми віримо, що виховання молоді – найкращий шлях до успіху.</h2>
            </div>
         </div>
         <div className={styles.textContainer}>
            <div className={styles.item}>
               <h1 className={styles.title}>Про Пласт</h1>
               <p className={styles.desc}>Пласт — українська скаутська організація. Метою Пласту є сприяти всебічному, патріотичному вихованню та самовихованню української молоді. Пласт виховує молодь як свідомих, відповідальних і повновартісних громадян місцевої, національної та світової спільноти, провідників суспільства. Також Пласт є неполітичною та позаконфесійною організацією.
                  <br />
                  <br />
                  Пласт був створений у 1911 році, невдовзі після заснування скаутського руху Робертом Бейден-Пауелом в 1907 р.,а вже 12 квітня 1912 року у Львові пластуни склали першу Пластову присягу. Серед засновників організації були д-р. Олександр Тисовський, Петро Франко (син Івана Франка) та Іван Чмола.
                  <br />
                  <br />
                  В основі назви “Пласт” лежить відповідник англійського Scout (розвідник), взятий за прикладом пластунів-козаків-розвідників. Гербом Пласту є трилиста квітка лілії — символ скаутського руху відомий як Fleur-de-lis — та тризуб, сплетенів одну гармонійну цілісність.
                  <br />
                  <br />
                  Для досягнення виховних цілей Пласт застосовує власну унікальну методу виховання. На відміну від більшості скаутських організацій світу, де членство завершується із досягненням 25-ліття, для членства у Пласті немає обмежень. Умовний віковий поділ передбачає 5 вікових категорії: пташата (до 6 років, можуть бути членами Пласту лише разом зі своїми батьками), новаки (6-12 років), юнаки (12-18 років), старші пластуни (18-35 років) та пластуни-сеніори (від 35 років).

               </p>
            </div>
            <div className={styles.item}>
               <h1 className={styles.title}>Мета Пласту</h1>
               <p className={styles.desc}>Метою Пласту є сприяти всебічному, патріотичному вихованню та самовихованню української молоді на засадах християнської моралі; виховувати молодь як свідомих, відповідальних і повновартісних громадян місцевої, національної та світової спільноти, провідників суспільства на ідейних засадах Пласту.
                  <br />
                  <br />
                  Щоб осягнути цю мету, Пласт розвиває духовні, розумові, соціальні і фізичні прикмети своїх членів; плекає серед молоді традиції її предків і передання та розуміння її історії, культури та національних традицій.
               </p>
               <Button url="/contact" text="Зв'язатися з нами" />
            </div>
         </div>
      </div>
   )
}

export default About