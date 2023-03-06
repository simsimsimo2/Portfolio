import styles from '../styles/Project.module.css'
import Image from 'next/image'
import TableOn from '../public/img/Projects/Led_table/table_on.png'
import Gouv from '../public/img/Projects/Gouv-e-courses/Gouv1.png'
import Freenove from '../public/img/Projects/Freenove/freenove.jpg'
import VNS from '../public/img/Projects/SeparateurVNS/Slice3D.png'
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
                            <Link className={`${styles.buttonpushable}`} href="/projects_display/Led_table">
                                <span className={`${styles.buttonshadow}`}></span>
                                <span className={`${styles.buttonedge}`}></span>
                                <span className={`${styles.buttonfront}`}>
                                    LED Table
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
                <div className={`${styles.container}`}>
                    <div>
                        <Image src={Freenove} alt='Small 4WD robot' className={`${styles.img1}`}/>
                        <div className={`${styles.middle}`}>
                            <Link className={`${styles.buttonpushable}`} href="/projects_display/freenove">
                                <span className={`${styles.buttonshadow}`}></span>
                                <span className={`${styles.buttonedge}`}></span>
                                <span className={`${styles.buttonfront}`}>
                                    Freenove 4WD smart car
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`${styles.container}`}>
                    <div>
                        <Image src={VNS} alt='bottle top splitter' className={`${styles.img1}`}/>
                        <div className={`${styles.middle}`}>
                            <Link className={`${styles.buttonpushable}`} href="/projects_display/separateurVNS">
                                <span className={`${styles.buttonshadow}`}></span>
                                <span className={`${styles.buttonedge}`}></span>
                                <span className={`${styles.buttonfront}`}>
                                    VNS splitter
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}