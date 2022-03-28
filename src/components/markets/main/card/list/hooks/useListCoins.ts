import { useState, useEffect, useContext } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import IUseRequest from '../../../../../../types/IUseRequest';
import { MarketMainContext } from '../../../context/MarketMainContext';
import { getCoinsMarkets } from '../../../../../../api/rest/CoinService';

interface IUseListCoins extends IUseRequest {
    currency: string
}

const useListCoins = () : IUseListCoins  => {
    const { coins, currency } = useContext(MarketMainContext);
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);
    const [useCurrency, setUseCurrency] = useState(currency.currency)

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params);
            setResponse(result);
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
        if (coins.list.join(', ')) {
            sendData(getCoinsMarkets({ 
                vs_currency: currency.currency, 
                ids: coins.list.join(', ')
            }))
        }
    }, [coins.list, currency.currency]);

    return { 
        response: response,
        error: error,
        loading: loading,
        sendData: sendData,
        currency: useCurrency
    };
}

export default useListCoins;