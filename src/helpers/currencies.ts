import ISelect from "../types/ISelect";

interface ISelectCurrency extends ISelect {
    sign: string
}


export const selectCurrency: ISelectCurrency[] = [
    {
        value: 'usd',
        label: 'USD',
        sign: '$'
    },
    {
        value: 'gbp',
        label: 'GBP',
        sign: '£'
    },
    {
        value: 'rub',
        label: 'RUB',
        sign: '₽'
    },
];

export const getSelectedDefaultCurrency  = (currency: string) : ISelect => {
    return selectCurrency.filter((item: ISelect) => (item.value === currency))[0];
}

export const defaultCurrency: string = 'usd';

interface ISignCurrency {
    [currency: string]: string,
}

export const signCurrency: ISignCurrency = {
    usd: '$',
    gbp: '£',
    rub: '₽',
}