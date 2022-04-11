import { useState, useEffect, useContext } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import IUseRequest from '../../../../../../types/IUseRequest';
import { MarketMainContext } from '../../../context/MarketMainContext';
import { getCoinsMarkets } from '../../../../../../api/rest/CoinService';
import ICoin from '../../../../../../types/ICoin';
import defaultCoin from '../../../../../../helpers/coin';

interface IUseListCoins extends IUseRequest {
    currency: string,
    coin: ICoin,
}

const useCoin = (coinId: string) : IUseListCoins  => {
    const { currency } = useContext(MarketMainContext);
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);
    const [coin, setCoin] = useState<ICoin>(defaultCoin());
    const [useCurrency, setUseCurrency] = useState(currency.currency)

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params);
            setResponse(result);
            setCoin(result.data[0]);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
            setUseCurrency(currency.currency);
        }
    };

    const sendData = async (params: AxiosRequestConfig) => {
        await fetchData(params);
    }

    useEffect(() => {
        sendData(getCoinsMarkets({ 
            vs_currency: currency.currency, 
            ids: coinId
        }))
    }, [currency.currency]);

    return { 
        response: response,
        error: error,
        loading: loading,
        sendData: sendData,
        currency: useCurrency,
        coin: coin,
    };
}

export default useCoin;