import { useEffect, useState } from 'react'
import styles from '../styles/IndicateurHorsLigne.module.css'

export default function IndicateurHorsLigne() {
    const [enLigne, setEnLigne] = useState(true)
    const handleOnline = () => setEnLigne(true)
    const handleOffline = () => setEnLigne(false)
    const handleClick = () => setEnLigne(true)

    useEffect(() => {
        setEnLigne(window.navigator.onLine);

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    return !enLigne && <div className={styles.indicateur}>
        <div className={styles.contenu}>
            <div className={styles.image}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6.817 5.084l-2.057-2.937 1.639-1.147 14.601 20.853-1.638 1.147-1.401-2h-12.461c-3.037 0-5.5-2.463-5.5-5.5 0-2.702 1.951-4.945 4.521-5.408.105-1.965.965-3.73 2.296-5.008zm3.032-1.771c.681-.204 1.403-.313 2.151-.313 4.006 0 7.267 3.141 7.479 7.092 2.57.463 4.521 2.706 4.521 5.408 0 1.898-.962 3.571-2.424 4.56l-1.149-1.64c.947-.627 1.573-1.702 1.573-2.92 0-2.969-2.688-3.766-4.433-3.72.324-3.983-2.114-6.78-5.567-6.78-.317 0-.624.023-.922.068l-1.229-1.755zm-4.349 15.687h11.061l-8.595-12.274c-1.038 1.169-1.618 2.895-1.533 5.054-1.954-.113-4.433.923-4.433 3.72 0 1.93 1.57 3.5 3.5 3.5z"/></svg>
            </div>
            You are offline
        </div>
        <input type="button" value='X' onClick={handleClick} className={styles.fermer}/>
    </div>
}