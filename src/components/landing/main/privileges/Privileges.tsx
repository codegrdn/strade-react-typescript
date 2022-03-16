import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import PrivilegesList from './list/PrivilegesList';

interface PrivilegesProps {

}

const Privileges: FC<PrivilegesProps> = () => {
    const { t } = useTranslation();

    return (
        <section className="privileges">
            <div className="box">
                <div className="privileges__subtitle subtitle">{ t('landing.privileges.subtitle').toLocaleUpperCase() }</div>
                <h2 className="privileges__title title">{ t('landing.privileges.title') }</h2>
                
                <PrivilegesList />
            </div>
        </section>
    )
}

export default Privileges;