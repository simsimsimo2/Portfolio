import styles from '../../styles/projects/ProjectFormat.module.css'
import Image from 'next/image'
import pic1 from '../../public/img/Projects/SeparateurVNS/pic1.jpg'
import pic2 from '../../public/img/Projects/SeparateurVNS/Sketch.png'
import pic3 from '../../public/img/Projects/SeparateurVNS/Slice3D.png'
import pic4 from '../../public/img/Projects/SeparateurVNS/pic3.jpg'
import pic5 from '../../public/img/Projects/SeparateurVNS/pic4.jpg'
import pic6 from '../../public/img/Projects/SeparateurVNS/pic5.jpg'
import Link from 'next/link'
import Head from 'next/head'

import React from 'react';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function SeparateurVNS(){
    return <>
    <Head>
        <title>Portfolio - VNS splitter</title>
        <meta name='description' content='Page for my VNS splitter'/>

        <meta property='og:title' content='Portfolio - VNS splitter'/>
        <meta property='og:description' content='Page for my VNS splitter'/>
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
                VNS splitter
            </p>
            <p className={`${styles.description}`}>
                This project started at the pharmacy 
                where I worked. to close the jars of pills for 
                the patients, we had to choose between the non-secure 
                lid or VNS &#40;just lift to open&#41; or secure &#40;by aligning the 
                two arrows together to open&#41;. But the two types of lids 
                mixed up easily, so I took measurements and made a 
                separator myself with my 3D printer.
            </p>
            <div className={`${styles.container}`}>
                <Carousel autoPlay axis="horizontal" interval="5000" infiniteLoop dynamicHeight>
                    <Image src={pic1} alt='Picture of the start of my project' className={`${styles.img}`}/>
                    <Image src={pic2} alt='Picture of my sketch' className={`${styles.img}`}/>
                    <Image src={pic3} alt='Picture of my 3D slicing' className={`${styles.img}`}/>
                    <Image src={pic4} alt='Picture of the print' className={`${styles.img}`}/>
                    <Image src={pic5} alt='Picture of my project' className={`${styles.img}`}/>
                    <Image src={pic6} alt='Picture of my project' className={`${styles.img}`}/>
                </Carousel>
            </div>
        </section>
    </>
}