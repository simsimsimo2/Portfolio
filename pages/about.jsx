import styles from '../styles/About.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Moi from '../public/img/Moi.jpeg'
import Head from 'next/head'

export default function About() {
    return <>
    <Head>
        <title>Portfolio - About me</title>
        <meta name='description' content='Page about me of my portfolio'/>
        
        <meta property='og:title' content='Portfolio - About me'/>
        <meta property='og:description' content='Page about me of my portfolio'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
    <section className={`${styles.section}`}>
        <div className={`${styles.divButton}`}>
        <Link className={`${styles.buttonpushable}`} aria-label="Home" href="/">
            <span className={`${styles.buttonshadow}`}></span>
            <span className={`${styles.buttonedge}`}></span>
            <span className={`${styles.buttonfront} ${styles.text}`}>
                Back
            </span>
        </Link>
        </div>
        <Image src={Moi} alt='Picture of me' className={`${styles.moi}`}/>
        <p className={`${styles.title}`}>
            About me
        </p>
        <p className={`${styles.description}`}>
            
        </p>
        <p className={`${styles.cv}`}>
            Click on one of the links below to download my resume:
        </p>
        <p className={`${styles.cv}`}>
            <a href='CV_Simon-Gabriel_Cloutier/CV-Eng.docx' download='CV_Simon-Gabriel_Cloutier_Eng'>My resume (Eng)</a>
        </p>
        <p className={`${styles.cv}`}>
            <a href='CV_Simon-Gabriel_Cloutier/CV-Fr.docx' download='CV_Simon-Gabriel_Cloutier_Fr'>Mon résumé (Fr)</a>
        </p>
    </section>
    </>
}