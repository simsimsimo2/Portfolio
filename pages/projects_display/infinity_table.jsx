import styles from '../../styles/projects/Infinity_table.module.css'
import Image from 'next/image'
import TableOn from '../../public/img/Infinity_table/table_on.png'
import TableOff from '../../public/img/Infinity_table/table_off.png'
import Table1 from '../../public/img/Infinity_table/table1.png'
import Table2 from '../../public/img/Infinity_table/table2.png'
import Table3 from '../../public/img/Infinity_table/table3.png'
import Table4 from '../../public/img/Infinity_table/table4.png'
import Table5 from '../../public/img/Infinity_table/table5.png'
import Table6 from '../../public/img/Infinity_table/table6.png'
import Table7 from '../../public/img/Infinity_table/table7.png'
import Table8 from '../../public/img/Infinity_table/table8.png'
import Table9 from '../../public/img/Infinity_table/table9.png'
import Table10 from '../../public/img/Infinity_table/table10.png'
import Table11 from '../../public/img/Infinity_table/table11.png'
import Table12 from '../../public/img/Infinity_table/table12.png'
import Link from 'next/link'
import Head from 'next/head'

import React from 'react';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Table(){
    return <>
    <Head>
        <title>Portfolio - Infinity table</title>
        <meta name='description' content='Page for my infinity table project in my portfolio'/>
        
        <meta property='og:title' content='Portfolio - Infinity table'/>
        <meta property='og:description' content='Page for my infinity table project in my portfolio'/>
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
                Infinity table
            </p>
            <p className={`${styles.description}`}>
                Its a table with a mirror at the bottom and a 2
                sided mirror on top and a framework with LEDS in between.
                All of it is hand made by myself and with the help of my father.
            </p>
            <div className={`${styles.container}`}>
                <Carousel autoPlay axis="horizontal" interval="5000" infiniteLoop>
                    <Image src={TableOff} alt='Table with mirror illusion off' className={`${styles.img}`}/>
                    <Image src={TableOn} alt='Table with mirror illusion on' className={`${styles.img}`}/>
                    <Image src={Table1} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table2} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table3} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table4} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table5} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table6} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table7} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table8} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table9} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table10} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table11} alt='Table construction pictures' className={`${styles.img}`}/>
                    <Image src={Table12} alt='Table construction pictures' className={`${styles.img}`}/>
                </Carousel>
            </div>
        </section>
    </>
}