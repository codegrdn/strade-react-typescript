import { useState } from 'react';
import ICoin from '../../../../types/ICoin';

const useCoins = () => {
    const [coinsList, setCoinsList] = useState<ICoin[]>([]);
    const removeCoin = (coin: ICoin) => {
        setCoinsList(coinsList.filter((item: ICoin) => item.id !== coin.id));
    }
    
    const addCoin = (coin: ICoin) => {
        setCoinsList([...coinsList, coin]);
    }

    return {coinsList, removeCoin, addCoin}
}

export default useCoins;