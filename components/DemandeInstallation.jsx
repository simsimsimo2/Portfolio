import { useEffect, useState } from "react"
import styles from "../styles/DemandeInstallation.module.css"

export default function DemandeInstallation() {
    const [demandeInstallation, setDemandeInstallation] = useState(null);
    const handleDemandeInstallation = (event) => {
        event.preventDefault();
        setDemandeInstallation(event);
    }

    const handleClickInstaller = async () => {
        demandeInstallation.prompt();
        const { outcome } = await demandeInstallation.userChoice;
        if(outcome === 'accepted'){
            setDemandeInstallation(null);
        }
    }

    const handleClickCacher = () => setDemandeInstallation(null);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', handleDemandeInstallation);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleDemandeInstallation);
            setDemandeInstallation(null);
        }

    }, [])

    return demandeInstallation && <div className={styles.demande}>

        <div className={styles.contenu}>
            <div className={styles.image}>
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.864 3.424c.502-.301 1.136.063 1.136.642 0 .264-.138.509-.365.644-2.476 1.486-4.135 4.197-4.135 7.292 0 4.691 3.808 8.498 8.498 8.498s8.497-3.807 8.497-8.498c0-3.093-1.656-5.803-4.131-7.289-.225-.136-.364-.38-.364-.644 0-.582.635-.943 1.137-.642 2.91 1.748 4.858 4.936 4.858 8.575 0 5.519-4.479 9.998-9.997 9.998s-9.998-4.479-9.998-9.998c0-3.641 1.951-6.83 4.864-8.578zm.831 8.582s2.025 2.021 3.779 3.774c.147.147.339.22.53.22.192 0 .384-.073.531-.22 1.753-1.752 3.779-3.775 3.779-3.775.145-.145.217-.336.217-.526 0-.192-.074-.384-.221-.531-.292-.293-.766-.294-1.056-.004l-2.5 2.499v-10.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v10.693l-2.498-2.498c-.289-.289-.762-.286-1.054.006-.147.147-.221.339-.222.531 0 .19.071.38.215.524z" fill-rule="nonzero"/></svg>
            </div>
            Install website
            <input type="button" value="Installer" onClick={handleClickInstaller} className={styles.installer}/>
        </div>

        <input type="button" value="X" onClick={handleClickCacher} className={styles.fermer}/>
    </div>
}