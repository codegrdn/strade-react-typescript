import { FC, useContext } from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { MarketMainContext } from '../../context/MarketMainContext';

enum Classes {
    DEFAULT_CLASS = 'markets__coin-item',
    ACTIVE_CLASS = 'markets__coin-item--active',
}

interface FavoriteProps {

}

const Favorite: FC<FavoriteProps>  = () => {
    const {t} = useTranslation();
    const { filters, coins } = useContext(MarketMainContext);
    const [classes, setClasses] = useState<string>(Classes.DEFAULT_CLASS);

    const handlerClick = () => {
        if (Classes.DEFAULT_CLASS === classes) {
            setClasses(Classes.DEFAULT_CLASS + " " +  Classes.ACTIVE_CLASS);
            filters.addFilter({coins: coins.list});
        } else {
            setClasses(Classes.DEFAULT_CLASS);
            filters.addFilter({coins: []});
        }
    }

    return (
        <ul className="markets__coin-list">
            <li className={classes} onClick={handlerClick}>{t('markets.filters.favourites')}</li>
        </ul>
    )
}

export default Favorite;