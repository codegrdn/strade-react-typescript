import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { defaultCurrency } from '../../../../helpers/currencies';

const useCurrency = () => {
    const [currency, setCurrency] = useState(defaultCurrency);
    const changeCurrency = (currency: string) => {
        setCurrency(currency);
    }

    return { currency, changeCurrency }
}

export default useCurrency;