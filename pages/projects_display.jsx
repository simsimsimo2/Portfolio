import styles from '../styles/Project.module.css'
import Image from 'next/image'
import TableOn from '../public/img/Infinity_table/table_on.png'
import Gouv from '../public/img/Gouv-e-courses/Gouv1.png'
import Link from 'next/link'
import Head from 'next/head'

export default function Projects() {
    return <>
    <Head>
        <title>Portfolio - All my projects</title>
        <meta name='description' content='Page for all of my projects in my portfolio'/>
        
        <meta property='og:title' content='Portfolio - All my projects'/>
        <meta property='og:description' content='Page for all of my projects in my portfolio'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
        <section className={`${styles.Wrap} ${styles.section}`}>
            <div className={`${styles.divButton}`}>
                <Link className={`${styles.buttonpushable}`} href="/">
                    <span className={`${styles.buttonshadow}`}></span>
                    <span className={`${styles.buttonedge}`}></span>
                    <span className={`${styles.buttonfront} `}>
                        Back
                    </span>
                </Link>
            </div>
            <div>
                <div className={`${styles.container}`}>
                    <div>
                        <Image src={TableOn} alt='projet table' className={`${styles.img1}`}/>
                        <div className={`${styles.middle}`}>
                            <Link className={`${styles.buttonpushable}`} href="/projects_display/infinity_table">
                                <span className={`${styles.buttonshadow}`}></span>
                                <span className={`${styles.buttonedge}`}></span>
                                <span className={`${styles.buttonfront}`}>
                                    Infinity Table
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`${styles.container}`}>
                    <div>
                        <Image src={Gouv} alt='Web site' className={`${styles.img1}`}/>
                        <div className={`${styles.middle}`}>
                            <Link className={`${styles.buttonpushable}`} href="/projects_display/gouv-e-courses">
                                <span className={`${styles.buttonshadow}`}></span>
                                <span className={`${styles.buttonedge}`}></span>
                                <span className={`${styles.buttonfront}`}>
                                    Gouv-e-courses
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}