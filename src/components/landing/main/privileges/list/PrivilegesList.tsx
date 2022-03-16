import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { privileges } from './data/privileges';

interface PrivilegesListProps {

}

const PrivilegesList: FC<PrivilegesListProps> = () => {
    const { t } = useTranslation();

    return (
        <ul className="privileges__list privileges-list">
            {
                privileges.map((privilege) => (
                    <li className="privileges-list__item" key={privilege.id}>
                        <div className="privileges-list__picture">
                            <img className="privileges-list__img" src={privilege.image} alt={privilege.id} />
                        </div>
                        <div className="privileges-list__subtitle">{ t(privilege.subtitle).toUpperCase() }</div>
                        <div className="privileges-list__title">{ t(privilege.title) }</div>
                        <div className="privileges-list__descr">
                            <p>{ t(privilege.description) }</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default PrivilegesList;