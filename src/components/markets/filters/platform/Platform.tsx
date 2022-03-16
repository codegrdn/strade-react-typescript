import {useState, useMemo, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import SelectCore from '../../../shared/select/core/SelectCore';
import ISelect from '../../../../types/ISelect';
import { addFilterMarketTableAction } from '../../../../store/reducers/MarketTableFilters';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

interface PlatformProps {

}

const Platform: FC<PlatformProps> = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const platforms = useTypedSelector(state => state.platforms);
    const defaultOption: ISelect = {
        label: t('markets.filters.select-platform'),
        value: 0
    }
    const [value, setValue] = useState(defaultOption);

    const values = useMemo(() => {
        if (Object.keys(platforms).length < 2) {
            return [defaultOption];
        }

        delete platforms.coin;

        let key = Object.keys(platforms);
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
    }, [platforms])

    function handlerFilterMarket(e: any): void {
        setValue(e);
        dispatch(addFilterMarketTableAction({platform: e.value}));
    }
    
    return (
        <>
            <SelectCore selected={value} values={values} onChange={handlerFilterMarket} />
        </>
    )
}

export default Platform;
