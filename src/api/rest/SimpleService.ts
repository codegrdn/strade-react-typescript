import { baseUrlApi } from './../../env';
import { AxiosRequestConfig } from "axios";

const url = `${baseUrlApi}/simple`;

export enum ValuesBoolean {
    YES = 'true',
    NO = 'false'
}

interface IPrice {
    vs_currencies: string,
    ids: string,
    include_market_cap?: ValuesBoolean,
    include_24hr_vol?: ValuesBoolean,
    include_24hr_change?: ValuesBoolean,
    include_last_updated_at?: ValuesBoolean,
}

export const getPrice: (params: IPrice) => AxiosRequestConfig = (params) => {
    return {
        url: `${url}/price`,
        method: 'GET',
        params: params
    }
}