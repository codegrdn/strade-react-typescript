import { FC, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { getCoinsMarkets } from '../../../../../api/rest/CoinService';
import useRequest from '../../../../../hooks/useRequest';
import DataTable, { TableColumn } from 'react-data-table-component';
import { getColor, getColorClass } from '../../../../../helpers/colors';
import CoinChart from '../../../../markets/main/chart/CoinChart';
import RowTable from '../../../../../types/RowTableMarket';
import Loader from '../../../../shared/loader/Loader';

interface TableProps {

}

const Table: FC<TableProps> = () => {
    const { t } = useTranslation();
    const defaultParams = { 
        vs_currency: 'usd',
        per_page: 5,
        page: 1,
    };
    
    const config = getCoinsMarkets(defaultParams);
    const { response }  = useRequest(config);
    const [isLoading, setIsLoading] = useState(true);

    const values = useMemo(() => {
        setIsLoading(true);

        let data = response?.data ? [...response.data] : [];

        const timeout = setTimeout(() => {
            setIsLoading(false);
            clearTimeout(timeout);
        }, 1500);

        return data;
    }, [response]);

    const columns:  TableColumn<RowTable>[]  = [
        {
            id: 'name',
            name: t('markets.columns.name'),
            selector: row => row.name,
            cell: (row) => (
                <div className="col-favourites">
                        <img src={row.image} style={{marginRight: '10px', width: '40px'}} />
                    <p className="col-info">{row.name}</p>
                </div>
            ),
            sortable: true,
            minWidth: '20%',
            maxWidth: '30%'
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
            noDataComponent={t('landing.market-info.table-have-not-data')}
            columns={columns}
            data={[]}
            progressPending={isLoading}
            progressComponent={<Loader />}
        />
    )
}

export default Table;