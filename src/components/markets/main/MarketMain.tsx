import { FC, useEffect } from 'react';
import BarMarket from './bar/BarMarket';
import { useTranslation } from "react-i18next";
import CardMarketList from './card/list/CardMarketList';
import Table from './table/Table';
import FiltersPageMarket from './filters/FiltersPageMarket';
import { getCoinsList } from '../../../api/rest/CoinService';
import useRequest from '../../../hooks/useRequest';
import ISelect from '../../../types/ISelect';
import { addPlatformsAction } from '../../../store/reducers/CoinPlatforms';
import { useDispatch } from 'react-redux';

interface MarketMainProps {

}

const MarketMain: FC<MarketMainProps> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const params = getCoinsList(
        {
            include_platform: true,
        }
    );
    const { response } = useRequest(params);

    useEffect(() => {
        let platformsResponse = response?.data;
        if (platformsResponse) {
            let platforms: ISelect[] = [];
            let platformKeys: any[] = [];
            let platformValues: any = {};

            platformsResponse.forEach((item: any) => {
                const keys = Object.keys(item?.platforms);

                if (!keys.length) {
                    return;
                }

                keys.forEach((key:string, i) => {
                    const formatKey:string = key.toLowerCase();

                    if (platformKeys.includes(formatKey)) {
                        platformValues[formatKey].push(item.symbol.toLowerCase());
                    } else {
                        platformKeys.push(formatKey);
                        platformValues[formatKey] = [item.symbol.toLowerCase()];
                    }
                });
            });

            platformKeys.forEach((key) => {
                platforms.push({ label: key, value: key.toLowerCase() })
                platformValues[key.toLowerCase()] = platformValues[key.toLowerCase()].join(', ');
            })

            dispatch(addPlatformsAction(platformValues));
        }
    }, [response]);

    return (
        <main className='page-main'>
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
        </main>
    )
}

export default MarketMain;
