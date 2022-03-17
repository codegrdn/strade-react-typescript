import ISelect from "../types/ISelect";

export const selectCurrency: ISelect[] = [
    {
        value: 'usd',
        label: 'USD',
    },
    {
        value: 'gbp',
        label: 'GBP',
    },
    {
        value: 'rub',
        label: 'RUB',
    },
];

export const getSelectedDefaultCurrency  = (currency: string) : ISelect => {
    return selectCurrency.filter((item: ISelect) => (item.value === currency))[0];
}

export const defaultCurrency: string = 'usd';