import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Link } from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Clowns</title>
        <meta name="description" content="Clown App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&family=Rubik+Moonrocks&family=Rye&family=Sigmar+One&family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className={styles.menu}>
        <div className={styles.rightMenu}>
            <Link href="/mint"> Mint </Link> 
            <Link href="/schedule"> Schedule </Link> 
            <img src="logos/etherscan.png" width="25vw" className={styles.menuImage}/>
            <img src="logos/opensea.svg" width="25vw" className={styles.menuImage}/>
            <img src="logos/twitter.svg" width="25vw" className={styles.menuImage}/>
        </div>
      </div>

    </div>
  )
}
