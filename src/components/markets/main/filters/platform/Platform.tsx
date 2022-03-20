import {useState, useMemo, FC, useContext } from 'react';
import { useTranslation } from "react-i18next";
import SelectCore from '../../../../shared/select/core/SelectCore';
import ISelect from '../../../../../types/ISelect';
import { MarketMainContext } from '../../context/MarketMainContext';

interface PlatformProps {

}

const Platform: FC<PlatformProps> = () => {
    const { t } = useTranslation();
    const { platforms, filters } = useContext(MarketMainContext);
    const defaultOption: ISelect = {
        label: t('markets.filters.select-platform'),
        value: 0
    }
    const [value, setValue] = useState(defaultOption);

    const values = useMemo(() => {
        if (Object.keys(platforms.list).length < 2) {
            return [defaultOption];
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

        return [defaultOption, ...array];
    }, [platforms.list])

    function handlerFilterMarket(e: any): void {
        setValue(e);
        filters.addFilter({ platform: e.value });
    }
    
    return (
        <>
            <SelectCore selected={value} values={values} onChange={handlerFilterMarket} />
        </>
    )
}

export default Platform;
