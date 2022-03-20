import { FC, useContext } from 'react';
import { useState } from 'react';
import ICoin from '../../../../../types/ICoin';
import { MarketMainContext } from '../../context/MarketMainContext';

interface ThStarProps {
    coin: ICoin
}

const DEFAULT_CLASS: string = 'col-favourites-icon';
const ACTIVE_CLASS: string = 'col-favourites-icon--active';

const ThStar: FC<ThStarProps> = ({ coin }) => {
    const { coins } = useContext(MarketMainContext);
    const [classes, setClasses] = useState(coins.list.filter((item) => (item.id === coin.id)).length ? DEFAULT_CLASS + " " +  ACTIVE_CLASS : DEFAULT_CLASS);

    const handleClasses = () => {
        if (DEFAULT_CLASS === classes) {
            setClasses(DEFAULT_CLASS + " " +  ACTIVE_CLASS);
            coins.addCoin(coin);
        } else {
            setClasses(DEFAULT_CLASS);
            coins.removeCoin(coin);
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