import { baseUrlApi } from './../../env';
import { AxiosRequestConfig } from "axios";

const url = `${baseUrlApi}/coins`;

export interface ICoinsMarkets {
    vs_currency: string,
    ids?: string,
    category?: string,
    order?: string,
    per_page?: number,
    page?: number,
    sparkline?: boolean,
    price_change_percentage?: string,
}

export const getCoinsMarkets: (params: ICoinsMarkets) => AxiosRequestConfig = (params) => {
    return {
        url: `${url}/markets`,
        method: 'GET',
        params: params
    }
}

interface ICoinListParams {
    include_platform: boolean,
}

export const getCoinsList: (params: ICoinListParams) => AxiosRequestConfig = (params = { include_platform: false }) => {
    return {
        url: `${url}/list`,
        method: 'GET',
        params: params
    }
}


interface ICoinChartParams {
    vs_currency: string,
    days: string,
    interval?: string,
}

export const getChart: (id: string, params: ICoinChartParams)  => AxiosRequestConfig = (id, params) => {
    return {
        url: `${url}/${id}/market_chart`,
        method: 'GET',
        params: params
    }
}