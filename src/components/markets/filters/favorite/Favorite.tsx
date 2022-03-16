import React, { FC } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { addFilterMarketTableAction, clearFilterMarketTableAction, MarketTableFiltersKeyTypes  } from '../../../../store/reducers/MarketTableFilters';
import { useTranslation } from "react-i18next";

enum Classes {
    DEFAULT_CLASS = 'markets__coin-item',
    ACTIVE_CLASS = 'markets__coin-item--active',
}

interface FavoriteProps {

}

const Favorite: FC<FavoriteProps>  = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [classes, setClasses] = useState<string>(Classes.DEFAULT_CLASS);
    const coins = useTypedSelector(state => state.coins);

    const handlerClick = () => {
        if (Classes.DEFAULT_CLASS === classes) {
            setClasses(Classes.DEFAULT_CLASS + " " +  Classes.ACTIVE_CLASS);
            dispatch(addFilterMarketTableAction({coins: coins}));
        } else {
            setClasses(Classes.DEFAULT_CLASS);
            dispatch(clearFilterMarketTableAction({ key: MarketTableFiltersKeyTypes.coins }));
        }
    }

    return (
        <ul className="markets__coin-list">
            <li className={classes} onClick={handlerClick}>{t('markets.filters.favourites')}</li>
        </ul>
    )
}

export default Favorite;