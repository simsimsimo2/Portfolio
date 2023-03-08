import styles from '../styles/Contact.module.css';
import Link from 'next/link';
import Head from 'next/head';
import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';

export default function Contacts() {
    const form = useRef();
    
    const sendEmail = () => {

    emailjs.sendForm('service_a5z2ecy', 'template_mit8dsc', form.current, 'GUOiLYivT6IcS945v')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => setEmail(event.target.value);

    const [name, setName] = useState('');
    const handleNameChange = (event) => setName(event.target.value);

    const [message, setMessage] = useState('');
    const handleMessageChange = (event) => setMessage(event.target.value);

    const [errorEmail, setErrorEmail] = useState('');
    const validateEmail = () => {
        if(!email){
            setErrorEmail('*The email is required!*');
            return false;
        }
        else if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
            setErrorEmail('*The email is not valid!*');
            return false;
        }
        else {
            setErrorEmail('');
            return true;
        }
    }

    const [errorName, setErrorName] = useState('');
    const validateName = () => {
        if(!name){
            setErrorName('*The name is required!*');
            return false;
        }
        else if(name.length < 3) {
            setErrorName('*The name is too short! Try to add your last name*');
            return false;
        }
        else {
            setErrorName('');
            return true;
        }
    }
    const [errorMessage, setErrorMessage] = useState('');
    const validateMessage = () => {
        if(!message){
            setErrorMessage('*The message is required!*');
            return false;
        }
        else if(message.length < 20) {
            setErrorMessage('*The message is too short!*');
            return false;
        }
        else if(message.length > 2600) {
            setErrorMessage('*The message is too long!*');
            return false;
        }
        else {
            setErrorMessage('');
            return true;
        }
    }

    const [send, setSend] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        
        let validEmail = validateEmail();
        let validName = validateName();
        let validMessage = validateMessage();

        if(validEmail && validName && validMessage) {
            sendEmail();
            setName('');
            setEmail('');
            setMessage('');
            setSend('Thank\'s for your message, Ill be in touch with you shortly! ( •̀ ω •́ )✧');
        }
        
    }

    return (
    <>
    <Head>
        <title>Portfolio - Contacts</title>
        <meta name='description' content='Page of my contacts of my portfolio'/>
        
        <meta property='og:title' content='Portfolio - Contacts'/>
        <meta property='og:description' content='Page of my contacts of my portfolio'/>
        <meta property='og:image' content='http://localhost:3000/img/doge.png'/>
    </Head>
    <section className={`${styles.section}`}>
        <div className={`${styles.divButton}`}>
        <Link className={`${styles.buttonpushable}`} aria-label="Home" href="/">
            <span className={`${styles.buttonshadow}`}></span>
            <span className={`${styles.buttonedge}`}></span>
            <span className={`${styles.buttonfront}`}>
                Back
            </span>
        </Link>
        </div>
        <p className={`${styles.title}`}>
            Contacts
        </p>
        <p className={`${styles.description}`}>
            Here is the information to know more about me or you can send me a message with the form:
        </p>
        <nav className={`${styles.nav}`}>
            <ul className={`${styles.ul}`}>
                <li className={`${styles.li}`}>
                    <a 
                    href="https://linkedin.com/in/simon-gabriel-cloutier-a51903260" 
                    target="_blank" rel="noopener noreferrer" 
                    className={`${styles.a}`}>
                        Linkedin
                    </a>
                </li>
                <li className={`${styles.li}`}>
                    <a 
                    href="https://github.com/simsimsimo2/" 
                    target="_blank" rel="noopener noreferrer" 
                    className={`${styles.a}`}>
                        Github
                    </a>
                </li>
            </ul>
        </nav>
        <form className={`${styles.form}`} ref={form} onSubmit={handleSubmit} noValidate>
                {send &&
                    <div className={styles.sent}>
                        {send}
                    </div>
                }
            <div>
                <input 
                type="text" 
                placeholder="Your name" 
                name="name" 
                value={name} 
                onChange={handleNameChange} 
                onBlur={validateName} 
                className={`${styles.contactInfo} ${styles.feedbackInput}`} 
                required />
                {errorName &&
                    <div className={styles.error}>
                        {errorName}
                    </div>
                }
            </div>
            <div>
                <input 
                type="email" 
                placeholder="Your email" 
                name="email" 
                value={email} 
                onChange={handleEmailChange} 
                onBlur={validateEmail}
                className={`${styles.contactInfo} ${styles.feedbackInput}`} 
                required />
                {errorEmail &&
                    <div className={styles.error}>
                        {errorEmail}
                    </div>
                }
            </div>
            <div>
                <textarea 
                placeholder="Your message" 
                name="message" 
                value={message} 
                onChange={handleMessageChange} 
                onBlur={validateMessage} 
                className={`${styles.textarea} ${styles.feedbackInput}`} 
                required />
                {errorMessage &&
                    <div className={styles.error}>
                        {errorMessage}
                    </div>
                }
            </div>
            <div>
                <input type="submit" className={`${styles.buttonSend}`} value="SUBMIT"/>
            </div>
        </form>
    </section>
    </>)
}