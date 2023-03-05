import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import monStyle from '../public/img/monStyle.png'
import Link from 'next/link'

export default function Menu() {
    return <>
        <section className={`${styles.section}`}>
            <nav className={`${styles.nav}`}>
                <ul className={`${styles.ul}`}>
                    <li>
                        <Link className={`
                        ${styles.grow} 
                        ${styles.li} 
                        ${styles.welcome} 
                        ${styles.contact}`}
                        aria-label="Contacts"
                        href="/contacts"></Link>
                    </li>
                    <li>
                        <Link className={`
                        ${styles.grow}
                        ${styles.li}
                        ${styles.toMy} 
                        ${styles.project}`}
                        aria-label="Projects"
                        href="/projects_display"></Link>
                    </li>
                    <li>
                        <Link className={`
                        ${styles.grow}
                        ${styles.li} 
                        ${styles.universe} 
                        ${styles.about}`}
                        aria-label="About me"
                        href="/about"></Link>
                    </li>
                </ul>
            </nav>
            <div className={`${styles.div}`}>
                <Link href="/404">
                    <Image src={monStyle} alt="Moi" className={`${styles.img} ${styles.jump}`} priority />
                </Link>
            </div>
        </section>
    </>
}