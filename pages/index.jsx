import Head from 'next/head'
import Menu from '../components/Menu'

export default function Accueil() {
    return <>
    <Head>
        <title>Portfolio - Simon-Gabriel Cloutier</title>
        <meta name='description' content='Home page of my portfolio'/>
        
        <meta property='og:title' content='Portfolio - Simon-Gabriel Cloutier'/>
        <meta property='og:description' content='Home page of my portfolio'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
    <Menu/>
    </>
}