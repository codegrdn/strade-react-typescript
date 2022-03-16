import ISelect from "../../../../../../types/ISelect";

export const coins: ISelect[] = [
    {
        value: 'bitcoin',
        label: 'BTC',
    },
    {
        value: 'ethereum',
        label: 'ETH',
    },
    {
        value: 'ripple',
        label: 'XRP',
    },
];

export const coinsDefault: ISelect = coins[0];

export const coinIds:string[] = ['bitcoin' , 'ethereum', 'ripple'];