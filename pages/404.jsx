import { useState } from 'react'
import styles from '../styles/404.module.css'
import Image from 'next/image'
import Cheems from '../public/img/Cheems_404.png'
import PetCheems from '../public/img/petCheems.gif'
import Link from 'next/link'
import React from "react";
import Head from 'next/head'

export default function NotFound() {
    const [visibleState, setVisible] = useState();
    const toggler = () => {
        setVisible(!visibleState);
        console.log(visibleState);
    }

    return <>
    <Head>
        <title>Portfolio - Page not found</title>
        <meta name='description' content='Page not found in my portfolio'/>
        
        <meta property='og:title' content='Portfolio - Page not found'/>
        <meta property='og:description' content='Page not found in my portfolio'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
        <div className={`${styles.container}`}>
            <div className={`${styles.notfoundbox}`}>
                <div className={`${styles.column}`}>
                    <p className={`${styles.text404}`}>404!</p>
                    <p className={`${styles.textpet}`}>This page was not found, but you can stay and pet him &#9472;&#62;</p>
                    <p className={`${styles.textpet}`}>Or</p>
                    <Link className={`${styles.linkhome}`} aria-label="Home" href="/">GO HOME &#60;&#9472;</Link>
                </div>
                <div className={`${styles.cheemsBox}`} onClick={toggler}>
                {!visibleState &&
                    <Image src={Cheems} alt="Cheems is sad" className={`${styles.cheems}`}/>
                }
                {visibleState &&
                    <Image src={PetCheems} alt="Cheems is now happy" className={`${styles.petCheems}`}/>
                }
                </div>
            </div>
        </div>
    </>
}