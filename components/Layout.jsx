import IndicateurHorsLigne from "./IndicateurHorsLigne"
import DemandeInstallation from "./DemandeInstallation";

export default function Layout({children}) {
    return <>
        <DemandeInstallation/>
        <IndicateurHorsLigne/>
        {children}
    </>
}