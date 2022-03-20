import { FC, useContext, useEffect, useMemo, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useTranslation } from "react-i18next";
import { getColor, getColorClass } from '../../../../helpers/colors';
import useRequest from '../../../../hooks/useRequest';
import ICoin from '../../../../types/ICoin';
import CoinChart from '../chart/CoinChart';
import ThStar from './th-star/ThStar';
import { getCoinsMarkets } from '../../../../api/rest/CoinService';
import { MarketMainContext } from '../context/MarketMainContext';

interface RowTable extends ICoin {
    chart?: string,
}

interface TableProps {

}

const Table: FC<TableProps> = () => {
    const { t } = useTranslation();
    const { currency, filters, platforms } = useContext(MarketMainContext);
    const defaultParams = { vs_currency: currency.currency };

    const config = getCoinsMarkets(defaultParams);
    const { response, sendData }  = useRequest(config);

    const [isLoading, setIsLoading] = useState(true);
    
    const values = useMemo(() => {
        setIsLoading(true);

        let data = response?.data ? [...response.data] : [];
        if (Object.keys(filters.list).length) {
            if (filters.list.hasOwnProperty('search') && filters.list.search) {
                data = data.filter(coin => (coin.name.toLowerCase().includes(filters.list?.search?.toLowerCase())));
            }

            if (filters.list.hasOwnProperty('platform') && filters.list.platform) {
                const keyPlatform: string = platforms.hasOwnProperty(filters.list.platform) ? filters.list.platform : '';
                data = data.filter(coin => (platforms.list[keyPlatform]?.includes(coin.symbol.toLowerCase() + ',')));
            }

            if (filters.list?.hasOwnProperty('coins') && filters.list.coins?.length) {
                data = data.filter((coin) => (filters.list?.coins?.filter((coinFilter) => (coin.name.toLowerCase() === coinFilter.name.toLowerCase())).length));
            }

            if (filters.list.hasOwnProperty('lastPrice') && filters.list?.lastPrice) {
                if (filters.list.lastPrice.includes('Up')) {
                    data = data.filter((coin) => (coin.price_change_24h > 0));
                } else if (filters.list.lastPrice.includes('Down')) {
                    data = data.filter((coin) => (coin.price_change_24h < 0));
                }
            }
        }

        setIsLoading(false);
        return data;
    }, [response, filters.list]);

    useEffect(() => {
        console.log(filters.list);
        

        if (filters.list.hasOwnProperty('category') && filters.list.category) {
            sendData(getCoinsMarkets({ ...defaultParams, category: filters.list.category }));
        } else {
            sendData(getCoinsMarkets(defaultParams));
        }
    }, [currency, filters.list]);

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