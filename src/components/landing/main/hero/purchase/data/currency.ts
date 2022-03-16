import ISelect from "../../../../../../types/ISelect";

export const currency: ISelect[] = [
    {
        value: 'usd',
        label: 'USD',
    },
    {
        value: 'rub',
        label: 'RUB',
    },
];

export const defaultCurrency: ISelect = currency[0];