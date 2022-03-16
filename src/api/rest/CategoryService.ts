import { baseUrlApi } from './../../env';
import axios, { AxiosRequestConfig } from "axios";

interface CategoryListParams {

}

const url = `${baseUrlApi}/coins/categories`;

export const getList = () => {
    return {
        url: `${url}/list`,
        method: 'GET',
        params: []
    }
}
