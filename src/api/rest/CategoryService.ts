import { baseUrlApi } from './../../env';
import { AxiosRequestConfig } from "axios";

const url = `${baseUrlApi}/coins/categories`;

export const getList: () => AxiosRequestConfig = () => {
    return {
        url: `${url}/list`,
        method: 'GET',
        params: []
    }
}
