import { FC } from 'react';
import BarMarket from './bar/BarMarket';
import { useTranslation } from "react-i18next";
import CardMarketList from './card/list/CardMarketList';
import Table from './table/Table';
import FiltersPageMarket from './filters/FiltersPageMarket';
import { MarketMainContext } from './context/MarketMainContext';
import useCoins from './hooks/useCoins';
import useFilters from './hooks/useFilters';
import usePlatforms from './hooks/usePlatforms';
import useCurrency from './hooks/useCurrency';

interface MarketMainProps {

}

const MarketMain: FC<MarketMainProps> = () => {
    const { t } = useTranslation();
    const { filtersMarkets, addFiltersMarkets } = useFilters();
    const { coinsList, removeCoin, addCoin } = useCoins(addFiltersMarkets);
    const { platforms, addPlatform } = usePlatforms();
    const { currency, changeCurrency } = useCurrency();
    
    return (
        <main className='page-main'>
            <MarketMainContext.Provider value={{
                platforms: {
                    list: platforms,
                    addPlatform: addPlatform
                },
                filters: {
                    list: filtersMarkets,
                    addFilter: addFiltersMarkets
                },
                coins: {
                    list: coinsList,
                    removeCoin: removeCoin,
                    addCoin: addCoin
                },
                currency: {
                    currency: currency,
                    changeCurrency: changeCurrency,
                }
            }} >
                <section className="markets">
                    <BarMarket title={ t('markets.title-header') } />
                    
                    <CardMarketList />

                    <div className="markets__content custom-scroll">
                        <div className="markets__table-head">
                            <FiltersPageMarket />
                        </div>

                        <div className="markets__table-wrap custom-scroll">
                            <Table />
                        </div>
                    </div>
                    
                </section>
            </MarketMainContext.Provider>
        </main>
    )
}

export default MarketMain;
