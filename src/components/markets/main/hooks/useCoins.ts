import { useState } from 'react';

const useCoins = () => {
    const [coinsList, setCoinsList] = useState<string[]>([]);

    const removeCoin = (coinId: string) => {
        setCoinsList(coinsList.filter((item: string) => item !== coinId));
    }
    
    const addCoin = (coin: string) => {
        setCoinsList([...coinsList, coin]);
    }

    return {coinsList, removeCoin, addCoin}
}

export default useCoins;