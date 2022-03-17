import { FC, useMemo } from 'react';
import { useState } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { AreaChart, Area, YAxis } from 'recharts';
import { getChart } from '../../../../api/rest/CoinService';
import useRequestChart from './hooks/useRequestChart';

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

const CoinChart: FC<CoinChartProps> = ({coinId, color, width = 140, height = 70}) => {
    const currence = useTypedSelector(state => state.currence.currence);
    const config = useMemo(() => {
        return getChart(coinId, {
            vs_currency: currence,
            days: '1'
        });
    }, [currence])

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

        setIsLoading(true);
        return prices;
    }, [response])

    return (
        <>
            {
                isLoading 
                && <AreaChart
                        width={width}
                        height={height}
                        data={chart}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}>
                            <YAxis hide={true} type="number" domain={['auto', 'auto']} />
                            <Area type="monotone" dataKey="y" stroke={color} fill={color} />
                    </AreaChart>
                }
        
        </>
    );
}

export default CoinChart;