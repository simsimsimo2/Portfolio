import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import monStyle from '../public/img/monStyle.png'
import background from '../public/img/background/rightHexa.jpg'
import Link from 'next/link'

export default function Menu() {
    return <>
        <section className={`${styles.section}`}>

    {/*Main pages of the website*/}

    {/*Background*/}
    <Image
      fill
      className={`${styles.background}`}
      src={background}
      alt={"Background"}
    />
    {/*List of link*/}
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
                </ul>
            </nav>
        </section>
    </>
}