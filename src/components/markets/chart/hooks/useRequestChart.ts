import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import IUseRequest from '../../../../types/IUseRequest';

const useRequestChart = ( axiosParams: AxiosRequestConfig ) : IUseRequest  => {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(axiosParams.method === "GET" || axiosParams.method === "get");

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params);
            setResponse(result);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const sendData = async (params: AxiosRequestConfig) => {
        await fetchData(params);
    }

    useEffect(() => {
        if (axiosParams.method === "GET" || axiosParams.method === "get") {
            fetchData(axiosParams);
        }
    }, [axiosParams]);

    return { response: response, error: error, loading: loading, sendData: sendData };
}

export default useRequestChart;