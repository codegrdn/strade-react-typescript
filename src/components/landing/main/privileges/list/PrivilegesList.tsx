import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
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
                            <LazyLoad height={190}>
                                <img 
                                    width='190px'
                                    height='190px'
                                    className="privileges-list__img"
                                    src={privilege.image}
                                    alt={privilege.id} />
                            </LazyLoad>
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