import { FC, useContext, useMemo } from 'react';
import { useState } from 'react';
import { AreaChart, Area, YAxis } from 'recharts';
import { getChart } from '../../../../api/rest/CoinService';
import useRequestChart from './hooks/useRequestChart';
import { MarketMainContext } from '../context/MarketMainContext';

interface CoinChartProps {
    coinId: string,
    color: string,
    width: number,
    height: number,
}

interface DataChart {
    x: number,
    y: number,
}

const CoinChart: FC<CoinChartProps> = ({ coinId, color, width = 140, height = 70 }) => {
    const { currency } = useContext(MarketMainContext);
    const config = useMemo(() => {
        return getChart(coinId, {
            vs_currency: currency.currency,
            days: '1'
        });
    }, [currency.currency])

    const { response } = useRequestChart(config);

    const [isLoading, setIsLoading] = useState(false);
    const chart: DataChart[] = useMemo(() => {
        setIsLoading(false);
        let prices: DataChart[] = [];

        response?.data?.prices?.forEach((item: any) => {
            prices.push({
                x: item[0],
                y: item[1],
            })
        })

        const timeout = setTimeout(() => {
            setIsLoading(true);
            clearTimeout(timeout);
        }, 1500);

        return prices;
    }, [response])

    return (
        <AreaChart
            width={width}
            height={height}
            data={chart}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 10,
            }}>
            <YAxis hide={true} type="number" domain={['auto', 'auto']} />
            <Area type="monotone" dataKey="y" stroke={color} fill={color} />
        </AreaChart>
    )
}

export default CoinChart;