import { FC, useContext, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { GroupBase, StylesConfig } from 'react-select';
import { getList } from '../../../../../api/rest/CategoryService';
import useRequest from '../../../../../hooks/useRequest';
import ISelect from '../../../../../types/ISelect';
import Loader from '../../../../shared/loader/Loader';
import SelectCore from '../../../../shared/select/core/SelectCore';
import { MarketMainContext } from '../../context/MarketMainContext';

interface CategoryProps {

}

const Category: FC<CategoryProps> = () => {
    const [loading, setLoading] = useState(false);
    const { i18n, t } = useTranslation();
    const { filters } = useContext(MarketMainContext);
    const { response } = useRequest(getList());
    const [selected, setSelected] = useState<ISelect>({
        label: t('markets.filters.select-category'),
        value: 0
    });

    const valuesSelect = useMemo(() => {
        setLoading(false);

        let selectList: ISelect[] = [{
            label: t('markets.filters.select-category'),
            value: 0
        }];

        if (response?.data) {
            response.data.forEach((item: any) => {
                selectList.push({
                    value: item.category_id,
                    label: item.name
                });
            });
        }
        setSelected(filters.list.category ? selectList.filter((item) => (item.value === filters.list.category))[0] : selectList.filter((item) => (item.value === selected.value))[0]);

        const timeout = setTimeout(() => {
            setLoading(true);
            clearTimeout(timeout);
        }, 1500);

        return selectList;
    }, [response, i18n.language]);

    function handlerChangeSelect(e: any) {
        setSelected(e);
        filters.addFilter({ category: e.value });
    }

    const customStyles: StylesConfig<ISelect, false, GroupBase<ISelect>> = {
        option: (provided, state) => ({
            padding: '5px',
            borderLeft: '3px solid transparent',
            textAlign: 'left',
            transition: 'color .3s, border .3s',
            width: '100%',
            ":hover": {
                borderLeft: '3px solid #24ac80',
            },
        }),
        control: () => ({
            width: '200px',
            display: 'flex',
            padding: '0px 0px 0px 0px',
        }),
        menuList: () => ({
            backgroundColor: 'rgba(var(--select-bg-color), 1)',
            border: '1px solid rgba(var(--primary-color),.05)',
            maxHeight: '15rem',
            overflowY: 'auto',
            scrollbarWidth: 'thin'
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            paddingLeft: '5px',
            textAlign: 'left',
        }),
        dropdownIndicator: (provided, state) => ({
            transition: 'all .2s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
            padding: '5px'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }

    return (
        <>
            {
                !loading
                    ? <Loader isRevert={true} style={{ height: '24px', width: '24px' }} />
                    : <SelectCore
                        styles={customStyles}
                        values={valuesSelect}
                        selected={selected}
                        onChange={handlerChangeSelect}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
            }
        </>
    )
}

export default Category;