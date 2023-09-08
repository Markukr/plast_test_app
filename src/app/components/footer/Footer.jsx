import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
   return (
      <div className={styles.container}>
         <div>Copyright by MARK_ONE © 2023 Пласт Данія</div>
         <div className={styles.social}>
            <Link href="https://www.facebook.com/plastdanmark">
               <Image src="/social/1.png" width={25} height={25} className={styles.icon} alt="PLAST DK Facebook acount"
               />
            </Link>
            <Link href="https://instagram.com/plast.denmark?igshid=MzRlODBiNWFlZA==">
               <Image src="/social/2.png" width={25} height={25} className={styles.icon} alt="PLAST DK Instagram acount" />
            </Link>
            <Image src="/social/3.png" width={25} height={25} className={styles.icon} alt="PLAST DK" />
            <Image src="/social/4.png" width={25} height={25} className={styles.icon} alt="PLAST DK" />
         </div>
      </div >
   )
}

export default Footer