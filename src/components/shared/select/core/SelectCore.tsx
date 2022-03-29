import { FC } from 'react';
import Select, { GroupBase, StylesConfig } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import ISelect from '../../../../types/ISelect';

interface SelectCoreProps {
    values: ISelect[],
    selected: ISelect,
    onChange: (e: any) => void,
    className?: string,
    classNamePrefix?: string,
    styles?: StylesConfig<ISelect, false, GroupBase<ISelect>> | undefined,
    components?: Partial<SelectComponents<ISelect, false, GroupBase<ISelect>>> | undefined,
    isSearchable?: boolean,
}

const SelectCore: FC<SelectCoreProps> = ({ values, selected, onChange, className, classNamePrefix, styles, components, isSearchable = true }) => {
    return <Select isSearchable={isSearchable} components={components} styles={styles} className={className} classNamePrefix={classNamePrefix} value={selected} options={values} onChange={onChange} />;
}

export default SelectCore;