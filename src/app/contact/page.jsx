import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'


export const metadata = {
   title: "Контакти PLAST-DK",
   description: "Сторінка контактів Пласту у данії, PLAST-DK",
};

const Контакти = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Зв&apos;яжіться з нами</h1>
         <div className={styles.content}>
            <div className={styles.imgContainer}>
               <Image
                  src="/contact.png"
                  alt="contact"
                  fill={true}
                  className={styles.image}
               />
            </div>
            <form className={styles.form}>
               <input type="text" placeholder="Ваше ім'я" className={styles.input} />
               <input type="tel" placeholder="Номер телефону" className={styles.input} />
               <input type="text" placeholder="Email" className={styles.input} />

               <textarea className={styles.textArea} placeholder="Ваше повідомлення" cols="30" rows="10"></textarea>
               <Button url="#" text="Відпривати" />
            </form>
         </div>
      </div>
   )
}

export default Контакти