import { useEffect, useState } from 'react';
import { getCoinsList } from '../../../../api/rest/CoinService';
import useRequest from '../../../../hooks/useRequest';
import ISelect from '../../../../types/ISelect';
import { CoinPlatformsState } from '../context/MarketMainContext';

const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<CoinPlatformsState>({});
    const  addPlatform = (newPlatforms: any) => {
        setPlatforms({...platforms, ...newPlatforms});
    }

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

                keys.forEach((key:string) => {
                    if (!key) {
                        return;
                    }

                    const formatKey:string = key.toLowerCase();

                    if (platformKeys.includes(formatKey)) {
                        platformValues[formatKey].push(item.id.toLowerCase());
                    } else {
                        platformKeys.push(formatKey);
                        platformValues[formatKey] = [item.id.toLowerCase()];
                    }
                });
            });

            platformKeys.forEach((key) => {
                platforms.push({ label: key, value: key.toLowerCase() })
                platformValues[key.toLowerCase()] = platformValues[key.toLowerCase()].join(', ');
            })

            setPlatforms(platformValues);
        }
    }, [response]);

    return {platforms, addPlatform}
}

export default usePlatforms;