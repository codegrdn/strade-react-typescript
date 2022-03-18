import { FC, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { getList } from '../../../../../api/rest/CategoryService';
import useRequest from '../../../../../hooks/useRequest';
import ISelect from '../../../../../types/ISelect';
import SelectCore from '../../../../shared/select/core/SelectCore';

interface CategoryProps {

}

const Category: FC<CategoryProps> = () => {
    const { t } = useTranslation();
    const defaultSelecte: ISelect = {
        label: t('markets.filters.select-category'),
        value: 0
    }

    const { response, sendData }  = useRequest(getList());
    const [isLoading, setIsLoading] = useState(true);
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
    }

    return (
        <SelectCore values={valuesSelect} selected={selected} onChange={handlerChangeSelect} />
    )
}

export default Category;