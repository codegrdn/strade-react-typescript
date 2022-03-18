import ISelect from "../../../../types/ISelect";

export const coins: ISelect[] = [
    {
        value: 'ETH',
        label: 'ETH'
    },
    {
        value: 'BTC',
        label: 'BTC'
    },
    {
        value: 'BNB',
        label: 'BNB'
    },
    {
        value: 'XRP',
        label: 'XRP'
    },
    {
        value: 'TRON',
        label: 'TRON'
    },
    {
        value: 'OKB',
        label: 'OKB'
    },
]

export const selectedCoin: ISelect = coins[0];