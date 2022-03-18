import { FC, useEffect, useMemo, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useTranslation } from "react-i18next";
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { getColor, getColorClass } from '../../../../helpers/colors';
import useRequest from '../../../../hooks/useRequest';
import ICoin from '../../../../types/ICoin';
import CoinChart from '../chart/CoinChart';
import ThStar from './th-star/ThStar';
import { getCoinsMarkets } from '../../../../api/rest/CoinService';

interface RowTable extends ICoin {
    chart?: string,
}

interface TableProps {

}

const Table: FC<TableProps> = () => {
    const { t } = useTranslation();
    const filters = useTypedSelector(state => state.filters);
    const currency = useTypedSelector(state => state.currency.currency);
    const platforms = useTypedSelector(state => state.platforms);
    const defaultParams = { vs_currency: currency };

    const config = getCoinsMarkets(defaultParams);
    const { response, sendData }  = useRequest(config);

    const [isLoading, setIsLoading] = useState(true);
    
    const values = useMemo(() => {
        setIsLoading(true);

        let data = response?.data ? [...response.data] : [];
        if (Object.keys(filters).length) {
            if (filters.hasOwnProperty('search')) {
                data = data.filter(coin => (coin.name.toLowerCase().includes(filters?.search?.toLowerCase())));
            }

            if (filters.hasOwnProperty('platform') && filters.platform) {
                const keyPlatform: string = platforms.hasOwnProperty(filters.platform) ? filters.platform : '';

                data = data.filter(coin => (platforms[keyPlatform]?.includes(coin.symbol.toLowerCase() + ',')));
            }  

            if (filters?.hasOwnProperty('coins')) {
                data = data.filter((coin) => (filters?.coins?.filter((coinFilter) => (coin.name.toLowerCase() === coinFilter.name.toLowerCase())).length));
            }

            if (filters.hasOwnProperty('lastPrice') && filters?.lastPrice) {
                if (filters.lastPrice.includes('Up')) {
                    data = data.filter((coin) => (coin.price_change_24h > 0));
                } else if (filters.lastPrice.includes('Down')) {
                    data = data.filter((coin) => (coin.price_change_24h < 0));
                }
            }
        }

        setIsLoading(false);
        return data;
    }, [response, filters]);

    useEffect(() => {
        if (filters.hasOwnProperty('category') && filters.category) {
            sendData(getCoinsMarkets({ ...defaultParams, category: filters.category }));
        } else {
            sendData(getCoinsMarkets(defaultParams));
        }
    }, [currency, filters]);

    const columns:  TableColumn<RowTable>[]  = [
        {
            id: 'name',
            name: t('markets.columns.name'),
            selector: row => row.name.toLowerCase(),
            format: (row, index) => (row.name),
            cell: (row) => (
                <div className="col-favourites">
                        <ThStar coin={row} />
                        <img src={row.image} style={{marginRight: '10px', width: '40px'}} />
                    <p className="col-info">{row.name}</p>
                </div>
            ),
            sortable: true,
        },
        {
            id: 'current_price',
            name: t('markets.columns.last-price'),
            selector: row => row.current_price,
            cell: (row) => (
                <p className="col-info">
                    <span className={getColorClass(row.price_change_24h)}>{row.current_price}</span>
                </p>
            ),
            sortable: true,
        },
        {
            id: 'price_change_percentage_24h',
            name: t('markets.columns.24h-сhange'),
            selector: row => row.price_change_percentage_24h,
            cell: (row) => (
                <p className="col-info">
                    <span className={getColorClass(row.price_change_percentage_24h)}>{row.price_change_percentage_24h} %</span>
                </p>
            ),
            sortable: true,
        },
        {
            id: 'high_24h',
            name: t('markets.columns.24h-high'),
            selector: row => row.high_24h,
            cell: (row) => (
                <p className="col-info">
                    <span className={getColorClass(row.high_24h)}>{row.high_24h}</span>
                </p>
            ),
            sortable: true,
        },
        {
            id: 'low_24h',
            name: t('markets.columns.24h-low'),
            selector: row => row.low_24h,
            cell: (row) => (
                <p className="col-info">
                    <span className={getColorClass(row.low_24h)}>{row.low_24h}</span>
                </p>
            ),
            sortable: true,
        },
        {
            id: 'market_cap',
            name: t('markets.columns.market-cap'),
            selector: row => row.market_cap,
            sortable: true,
        },
        {
            id: 'total_volume',
            name: t('markets.columns.24h-volume'),
            selector: row => row.total_volume,
            sortable: true,
        },
        {
            id: 'chart',
            name: "",
            cell: (row) => (
                <CoinChart coinId={row.id} color={getColor(row.price_change_percentage_24h)} width={140} height={70} />
            ),
            sortable: false,
        },
    ];
    
    return (
        <DataTable
            className="markets__table table"
            columns={columns}
            data={values}
            progressPending={isLoading}
            pagination
        />
    )
}

export default Table;