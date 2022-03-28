import {useState, useMemo, FC, useContext } from 'react';
import { useTranslation } from "react-i18next";
import SelectCore from '../../../../shared/select/core/SelectCore';
import ISelect from '../../../../../types/ISelect';
import { MarketMainContext } from '../../context/MarketMainContext';
import Loader from '../../../../shared/loader/Loader';

interface PlatformProps {

}

const Platform: FC<PlatformProps> = () => {
    const { t, i18n } = useTranslation();
    const { platforms, filters } = useContext(MarketMainContext);
    const [value, setValue] = useState<ISelect>({
        label: t('markets.filters.select-platform'),
        value: 0
    });
    const [loading, setLoading] = useState(false);

    const values = useMemo(() => {
        setLoading(false);

        if (Object.keys(platforms.list).length < 2) {
            return [{
                label: t('markets.filters.select-platform'),
                value: 0
            }];
        }

        let key = Object.keys(platforms.list);
        let array: ISelect[] = [];

        key.forEach((item) => {
            let label = item.replaceAll('-', ' ');
            label = label.charAt(0).toUpperCase() + label.slice(1);

            array.push({
                label: label,
                value: item,
            });
        });

        const result = [{
            label: t('markets.filters.select-platform'),
            value: 0
        }, ...array];

        setValue(result.filter((item) => (item.value === value.value))[0]);

        const timeout = setTimeout(() => {
            setLoading(true);
            clearTimeout(timeout);
        }, 1500);

        return result;
    }, [platforms.list, i18n.language])

    function handlerFilterMarket(e: any): void {
        setValue(e);
        filters.addFilter({ platform: e.value });
    }
    
    return (
        <>
            {
                !loading
                ? <Loader isRevert={true} style={{ height: '24px', width: '24px'}} />
                : <SelectCore selected={value} values={values} onChange={handlerFilterMarket} />
            }
        </>
    )
}

export default Platform;
