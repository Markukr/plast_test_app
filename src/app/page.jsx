import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from './components/Button/Button'

export const metadata = {
  title: "PLAST-DK",
  description: "Головна сторінка пласту у данії, PLAST-DK",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Plast Danmark - скаутська організація для української молоді в Данії</h1>
        <p className={styles.desc}>Метою Пласту є сприяти всебічному, патріотичному вихованню та самовихованню української молоді.</p>
        <Button url="/projects" text="ПОЛЕТІЛИ" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  )
}
