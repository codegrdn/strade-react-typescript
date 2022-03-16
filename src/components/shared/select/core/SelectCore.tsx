import { FC } from 'react';
import Select from 'react-select';
import ISelect from '../../../../types/ISelect';

interface SelectCoreProps {
    values: ISelect[],
    selected: ISelect,
    onChange: (e: any) => void,
}

const SelectCore: FC<SelectCoreProps> = ({values, selected, onChange}) => {
    return <Select value={selected} options={values} onChange={onChange} />;
}

export default SelectCore;