import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export default interface IUseRequest {
    response?: AxiosResponse,
    error?: AxiosError,
    loading: boolean,
    sendData: (params: AxiosRequestConfig) => void,
}