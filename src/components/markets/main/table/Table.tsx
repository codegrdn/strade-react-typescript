import { FC, useContext, useEffect, useMemo, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useTranslation } from "react-i18next";
import { getColor, getColorClass } from '../../../../helpers/colors';
import useRequest from '../../../../hooks/useRequest';
import ICoin from '../../../../types/ICoin';
import CoinChart from '../chart/CoinChart';
import ThStar from './th-star/ThStar';
import { getCoinsMarkets, ICoinsMarkets } from '../../../../api/rest/CoinService';
import { MarketMainContext } from '../context/MarketMainContext';
import { formatingPrice } from '../../../../helpers/formating';
import { signCurrency } from '../../../../helpers/currencies';
import Loader from '../../../shared/loader/Loader';

interface RowTable extends ICoin {
    chart?: string,
}

interface TableProps {

}

const Table: FC<TableProps> = () => {
    const { t } = useTranslation();
    const { currency, filters, platforms } = useContext(MarketMainContext);
    const [useCurrency, setUseCurrency] = useState(currency.currency);

    let defaultParams: ICoinsMarkets = { vs_currency: currency.currency };
    if (filters.list.hasOwnProperty('category') && filters.list.category) {
        defaultParams = { ...defaultParams, category: filters.list.category };
    }

    const config = getCoinsMarkets(defaultParams);
    const { response, sendData, loading }  = useRequest(config);

    const [isLoading, setIsLoading] = useState(true);
    
    const values = useMemo(() => {
        setIsLoading(true);

        let data = response?.data ? [...response.data] : [];
        if (Object.keys(filters.list).length) {
            if (filters.list.hasOwnProperty('search') && filters.list.search) {
                data = data.filter(coin => (coin.name.toLowerCase().includes(filters.list?.search?.toLowerCase())));
            }

            if (filters.list.hasOwnProperty('platform') && filters.list.platform) {
                const keyPlatform: string = platforms.list.hasOwnProperty(filters.list.platform) ? filters.list.platform : '';
                data = data.filter(coin => (platforms.list[keyPlatform]?.includes(' ' + coin.id.toLowerCase() + ',')));
            }

            if (filters.list.isFavorite) {
                data = data.filter(
                    (coin) => (
                        filters.list.coins?.split(',')?.filter((coinFilter) => (
                            coin.id.toLowerCase() === coinFilter.toLowerCase()
                        )
                    ).length)
                );
            }

            if (filters.list.hasOwnProperty('lastPrice') && filters.list?.lastPrice) {
                if (filters.list.lastPrice.includes('Up')) {
                    data = data.filter((coin) => (coin.price_change_24h > 0));
                } else if (filters.list.lastPrice.includes('Down')) {
                    data = data.filter((coin) => (coin.price_change_24h < 0));
                }
            }
        }

        setUseCurrency(currency.currency);

        const timeout = setTimeout(() => {
            setIsLoading(false);
            clearTimeout(timeout);
        }, 1500);

        return data;
    }, [response, filters.list, platforms.list]);

    useEffect(() => {
        if (!loading) {
            if (filters.list.hasOwnProperty('category') && filters.list.category) {
                sendData(getCoinsMarkets({ ...defaultParams, category: filters.list.category }));
            } else {
                sendData(getCoinsMarkets(defaultParams));
            }
        }
    }, [currency.currency, filters.list]);

    const columns:  TableColumn<RowTable>[]  = [
        {
            id: 'name',
            name: t('markets.columns.name'),
            selector: row => row.name.toLowerCase(),
            format: (row, index) => (row.name),
            cell: (row) => (
                <div className="col-favourites">
                        <ThStar coin={row} />
                        <img src={row.image} width='40px' height='40px' style={{marginRight: '10px'}} alt={row.id} />
                    <p className="col-info">{row.name}</p>
                </div>
            ),
            sortable: true,
            minWidth: '25%',
            maxWidth: '40%'
        },
        {
            id: 'current_price',
            name: t('markets.columns.last-price'),
            selector: row => row.current_price,
            cell: (row) => (
                <p className="col-info">
                    <span className={`${getColorClass(row.price_change_24h)} white-space-text`}>{formatingPrice(row.current_price, signCurrency[useCurrency])}</span>
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
                    <span className={`${getColorClass(row.price_change_percentage_24h)} white-space-text`}>{row.price_change_percentage_24h} %</span>
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
                    <span className={`${getColorClass(row.high_24h)} white-space-text`}>{formatingPrice(row.high_24h, signCurrency[useCurrency])}</span>
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
                    <span className={`${getColorClass(row.low_24h)} white-space-text`}>{formatingPrice(row.low_24h, signCurrency[useCurrency])}</span>
                </p>
            ),
            sortable: true,
        },
        {
            id: 'market_cap',
            name: t('markets.columns.market-cap'),
            selector: row => row.market_cap,
            cell: (row) => (<span className="white-space-text">{formatingPrice(row.market_cap, signCurrency[useCurrency])}</span>),
            sortable: true,
        },
        {
            id: 'total_volume',
            name: t('markets.columns.24h-volume'),
            selector: row => row.total_volume,
            cell: (row) => (<span className="white-space-text">{formatingPrice(row.total_volume, signCurrency[useCurrency])}</span>),
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
    
    function handlerChangePage(page: any) {
        filters.addFilter({...filters.list, page: page})
    }

    function handlerChangeRowsPerPage(currentRowsPerPage: any) {
        filters.addFilter({...filters.list, perPage: currentRowsPerPage})
    }

    return (
        <DataTable
            className="markets__table table"
            noDataComponent={t('landing.market-info.table-have-not-data')}
            columns={columns}
            data={values}
            progressPending={isLoading}
            progressComponent={<Loader />}
            onChangePage={handlerChangePage}
            onChangeRowsPerPage={handlerChangeRowsPerPage}
            paginationPerPage={filters.list.perPage}
            paginationDefaultPage={filters.list.page}
            pagination
        />
    )
}

export default Table;