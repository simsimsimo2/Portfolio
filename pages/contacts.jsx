import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Contacts() {
    return <>
    <Head>
        <title>Portfolio - Contacts</title>
        <meta name='description' content='Page of my contacts of my portfolio'/>
        
        <meta property='og:title' content='Portfolio - Contacts'/>
        <meta property='og:description' content='Page of my contacts of my portfolio'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
    <section className={`${styles.section}`}>
        <div className={`${styles.divButton}`}>
        <Link className={`${styles.buttonpushable}`} aria-label="Home" href="/">
            <span className={`${styles.buttonshadow}`}></span>
            <span className={`${styles.buttonedge}`}></span>
            <span className={`${styles.buttonfront}`}>
                Back
            </span>
        </Link>
        </div>
        <p className={`${styles.title}`}>
            Contacts
        </p>
        <p className={`${styles.description}`}>
            Here is the information to join me or to know more about me:
        </p>
        <nav className={`${styles.nav}`}>
            <ul>
                <li className={`${styles.li}`}>
                    <a href="https://linkedin.com/in/simon-gabriel-cloutier-a51903260" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </li>
                <li className={`${styles.li}`}>
                    <a href="https://github.com/simsimsimo2/" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
            </ul>
        </nav>
    </section>
    </>
}