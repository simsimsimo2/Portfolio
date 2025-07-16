import styles from '../../styles/projects/ProjectFormat.module.css'
import Image from 'next/image'
import freenove from '../../public/img/Projects/Freenove/freenove.jpg'
import pic1 from '../../public/img/Projects/Freenove/pic1.jpg'
import pic2 from '../../public/img/Projects/Freenove/pic2.jpg'
import pic3 from '../../public/img/Projects/Freenove/pic3.jpg'
import pic4 from '../../public/img/Projects/Freenove/pic4.jpg'
import server from '../../public/img/Projects/Freenove/server.png'
import control from '../../public/img/Projects/Freenove/image control.png'
import Link from 'next/link'
import Head from 'next/head'

import React from 'react';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import background from '../../public/img/background/grayWall.jpg'

export default function Freenove4WD(){
    return <>
    <Head>
        <title>Portfolio - Freenove 4WD smart car</title>
        <meta name='description' content='Page for my 4WD smart car'/>

        <meta property='og:title' content='Portfolio - Freenove 4WD smart car'/>
        <meta property='og:description' content='Page for my 4WD smart car'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
        <section className={`${styles.section}`}>
            <Image
            fill
            className={`${styles.background}`}
            src={background}
            alt={"Background"}
            />
            <div className={`${styles.divButton}`}>
            <Link className={`${styles.buttonpushable}`} aria-label="Projects" href="/projects_display">
                <span className={`${styles.buttonshadow}`}></span>
                <span className={`${styles.buttonedge}`}></span>
                <span className={`${styles.buttonfront} ${styles.text}`}>
                    Back
                </span>
            </Link>
            </div>
            <h1 className={`${styles.title}`}>
                Freenove 4WD smart car
            </h1>
            <p className={`${styles.description}`}>
            This is a robot that I purchased from Amazon. 
            It was loose and I had to build it by hand. 
            This robot is controlled by a Raspberry pi 4 
            which allows it to be controlled remotely by 
            internet &#40;app on phone and pc&#41;. The robot contains 
            several modules that I am still discovering. Like for 
            example: a light sensor, camera that can move with the 
            robot&#39;s head, LEDs all around him, motors for the wheels, 
            small AI function to detect faces, etc.
            </p>
            <a 
                className={`${styles.description}`} 
                href="https://www.freenove.com">
                Web site of the company Freenove
            </a>
            <div className={`${styles.container}`}>
                <Carousel autoPlay axis="horizontal" interval="5000" infiniteLoop dynamicHeight>
                    <Image src={freenove} alt='Picture of the robot from the shop' className={`${styles.img}`}/>
                    <Image src={pic1} alt='Picture of the robot1' className={`${styles.img}`}/>
                    <Image src={pic2} alt='Picture of the robot2' className={`${styles.img}`}/>
                    <Image src={pic3} alt='Picture of the robot3' className={`${styles.img}`}/>
                    <Image src={pic4} alt='Picture of the robot4' className={`${styles.img}`}/>
                    <Image src={server} alt='Screenshot from the server' className={`${styles.img}`}/>
                    <Image src={control} alt='Screenshot from the control' className={`${styles.img}`}/>
                </Carousel>
            </div>
        </section>
    </>
}