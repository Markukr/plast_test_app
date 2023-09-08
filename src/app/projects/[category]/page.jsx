import React from 'react'
import styles from './page.module.css'
import Button from '@/app/components/Button/Button';
import Image from 'next/image';
import { items } from './data.js';
import { notFound } from 'next/navigation';

export const metadata = {
   title: "PLAST-DK",
   description: "Сторінка проектів Пласту у данії, PLAST-DK",
};

const getData = (cat) => {
   const data = items[cat]

   if (data) {
      return data
   }

   return notFound()
}

const Category = ({ params }) => {
   const data = getData(params.category)
   return (
      <div className={styles.container}>
         <h1 className={styles.catTitle}>{params.category}</h1>

         {data.map(item => (

            <div className={styles.item} key={item.id}>
               <div className={styles.content}>
                  <h1 className={styles.title}>{item.title}</h1>
                  <p className={styles.desc}>{item.desc}</p>
                  <Button text="Переглянути" url={item.href} />
               </div>
               <div className={styles.imgContainer}>
                  <Image
                     className={styles.img}
                     fill={true}
                     src={item.image}

                     alt=""
                  />
               </div>
            </div>
         ))}
      </div>
   );
};

export default Category