import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { addFilterMarketTableAction } from '../../../../store/reducers/MarketTableFilters';

interface SearchProps {

}

const Search: FC<SearchProps> = ({}) => {
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();
    const [search, setSearch] = useState('');

    function handleSearchButtonClick (e: any) {
        e.preventDefault();
        
        dispatch(addFilterMarketTableAction({search: search}))
    }

    function handleSearchButtonKeyPass (e: any) {
        if (e.charCode == 13) {
            dispatch(addFilterMarketTableAction({search: search}))
        }
    }

    return (
        <div className="markets__search">
            <input 
                className="markets__search-input" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                onKeyPress={(e) => handleSearchButtonKeyPass(e)} 
                type="text" 
                placeholder={t('markets.filters.search')}
            />
            <button className="markets__search-img" type="button" aria-label="search button" onClick={handleSearchButtonClick}>
                <svg className="markets__search-icon" width="12" height="12">
                    <use xlinkHref="#search-icon"></use>
                </svg>
            </button>
        </div>
    )
}

export default Search;