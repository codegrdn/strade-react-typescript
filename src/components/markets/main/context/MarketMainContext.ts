import { currency } from './../../../landing/main/hero/purchase/data/currency';
import { defaultCurrency } from './../../../../helpers/currencies';
import React from "react";
import ICoin from "../../../../types/ICoin";

export enum MarketTableFiltersKeyTypes {
    category = 'category',
    search = 'search',
    platform = 'platform',
    coins = 'coins',
    lastPrice = 'lastPrice',
}

export interface CoinPlatformsState {
    [coin: string]: string,
}

interface IMarketMainPlatform {
    list: CoinPlatformsState,
    addPlatform: (platforms: CoinPlatformsState) => void
}

export interface MarketTableFiltersState {
    category?: string,
    search?: string,
    platform?: string,
    coins?: string,
    lastPrice?: string,
    page?: number,
    perPage?: number,
    isFavorite?: boolean,
    currency?: string,
}

interface IMarketMainFilters {
    list: MarketTableFiltersState,
    addFilter: (filters: MarketTableFiltersState) => void
}

interface ICoins {
    list: string[],
    removeCoin: (coin: string) => void,
    addCoin: (coin: string) => void
}

interface ICurrency {
    currency: string,
    changeCurrency: (currency: string) => void
}

interface IMarketMainContext {
    platforms: IMarketMainPlatform,
    filters:  IMarketMainFilters,
    coins: ICoins,
    currency: ICurrency,
}

export const marketMainState: IMarketMainContext = {
    platforms: {
        list: {},
        addPlatform: function (platforms) {},
    },
    filters: {
        list: {},
        addFilter: function (filters) {},
    },
    coins: {
        list: [],
        removeCoin: function (coin) {},
        addCoin: function (coin) {},
    },
    currency: {
        currency: defaultCurrency,
        changeCurrency: function (currency) {},
    }
}

export const MarketMainContext = React.createContext<IMarketMainContext>(marketMainState);