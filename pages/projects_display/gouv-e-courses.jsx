import styles from '../../styles/projects/ProjectFormat.module.css'
import Image from 'next/image'
import gouv1 from '../../public/img/Projects/Gouv-e-courses/Gouv1.png'
import gouv2 from '../../public/img/Projects/Gouv-e-courses/Gouv2.png'
import gouv3 from '../../public/img/Projects/Gouv-e-courses/Gouv3.png'
import gouv4 from '../../public/img/Projects/Gouv-e-courses/Gouv4.png'
import gouv5 from '../../public/img/Projects/Gouv-e-courses/Gouv5.png'
import gouv6 from '../../public/img/Projects/Gouv-e-courses/Gouv6.png'
import gouv7 from '../../public/img/Projects/Gouv-e-courses/Gouv7.png'
import gouv8 from '../../public/img/Projects/Gouv-e-courses/Gouv8.png'
import gouv9 from '../../public/img/Projects/Gouv-e-courses/Gouv9.png'
import Link from 'next/link'
import Head from 'next/head'

import React from 'react';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Gouv(){
    return <>
    <Head>
        <title>Portfolio - Website Gouv-e-courses</title>
        <meta name='description' content='Page for my first website in my portfolio'/>

        <meta property='og:title' content='Portfolio - Website Gouv-e-courses'/>
        <meta property='og:description' content='Page for my first website in my portfolio'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
        <section className={`${styles.section}`}>
            <div className={`${styles.divButton}`}>
            <Link className={`${styles.buttonpushable}`} aria-label="Projects" href="/projects_display">
                <span className={`${styles.buttonshadow}`}></span>
                <span className={`${styles.buttonedge}`}></span>
                <span className={`${styles.buttonfront} ${styles.text}`}>
                    Back
                </span>
            </Link>
            </div>
            <p className={`${styles.title}`}>
                Gouv-e-courses
            </p>
            <p className={`${styles.description}`}>
                Here is a website made in one of my classes 
                at La Cite college with one of my classmates. 
                This site allows you to register for additional 
                government courses. And all the changes 
                like registration, addition of courses and 
                etc are displayed live.
            </p>
            <a 
                className={`${styles.description}`} 
                href="https://gouv-e-courses.onrender.com/connexionUtilisateur">
                Web site 
            </a>
            <div className={`${styles.container}`}>
                <Carousel autoPlay axis="horizontal" interval="5000" infiniteLoop dynamicHeight>
                    <Image src={gouv1} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv2} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv3} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv4} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv5} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv6} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv7} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv8} alt='Screen shot of the web site' className={`${styles.img}`}/>
                    <Image src={gouv9} alt='Screen shot of the web site' className={`${styles.img}`}/>
                </Carousel>
            </div>
        </section>
    </>
}