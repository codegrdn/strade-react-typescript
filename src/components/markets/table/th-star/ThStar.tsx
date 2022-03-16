import React, { FC } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { addCoinAction, removeCoinAction } from '../../../../store/reducers/Coins';
import ICoin from '../../../../types/ICoin';

interface ThStarProps {
    coin: ICoin
}

const DEFAULT_CLASS: string = 'col-favourites-icon';
const ACTIVE_CLASS: string = 'col-favourites-icon--active';

const ThStar: FC<ThStarProps> = ({ coin }) => {
    const dispatch = useDispatch();
    const coins = useTypedSelector(state => state.coins);
    const [classes, setClasses] = useState(coins.filter((item) => (item.id === coin.id)).length ? DEFAULT_CLASS + " " +  ACTIVE_CLASS : DEFAULT_CLASS);

    const handleClasses = () => {
        if (DEFAULT_CLASS === classes) {
            setClasses(DEFAULT_CLASS + " " +  ACTIVE_CLASS);
            dispatch(addCoinAction(coin));
        } else {
            setClasses(DEFAULT_CLASS);
            dispatch(removeCoinAction(coin));
        }
    }
    
    return (
        <div className="col-favourites">
            <div className="col-favourites-img">
                <svg className={classes} onClick={handleClasses} width="14" height="14">
                    <use xlinkHref="#star-icon"></use>
                </svg>
            </div>
        </div>
    )
}

export default ThStar;