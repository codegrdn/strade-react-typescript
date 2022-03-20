import { useState } from 'react';
import { defaultCurrency } from '../../../../helpers/currencies';

const useCurrency = () => {
    const [currency, setCurrency] = useState(defaultCurrency);
    const changeCurrency = (currency: string) => {
        setCurrency(currency);
    }

    return { currency, changeCurrency }
}

export default useCurrency;