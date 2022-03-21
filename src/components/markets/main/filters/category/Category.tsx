import { FC, useContext, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { getList } from '../../../../../api/rest/CategoryService';
import useRequest from '../../../../../hooks/useRequest';
import ISelect from '../../../../../types/ISelect';
import SelectCore from '../../../../shared/select/core/SelectCore';
import { MarketMainContext } from '../../context/MarketMainContext';

interface CategoryProps {

}

const Category: FC<CategoryProps> = () => {
    const { t } = useTranslation();
    const { filters } = useContext(MarketMainContext);
    const defaultSelecte: ISelect = {
        label: t('markets.filters.select-category'),
        value: 0
    }

    const { response }  = useRequest(getList());
    const [selected, setSelected] = useState(defaultSelecte);

    const valuesSelect = useMemo(() => {
        let selectList = [defaultSelecte];

        if (response?.data) {
            response.data.forEach((item: any) => {
                selectList.push({
                    value: item.category_id,
                    label: item.name
                });
            });
        }

        return selectList;
    }, [response]);

    function handlerChangeSelect(e: any) {
        setSelected(e);
        filters.addFilter({ category: e.value });
    }

    return (
        <SelectCore values={valuesSelect} selected={selected} onChange={handlerChangeSelect} />
    )
}

export default Category;