import { FC, useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import { MarketMainContext } from '../../context/MarketMainContext';

interface SearchProps {

}

const Search: FC<SearchProps> = () => {
    const { filters } = useContext(MarketMainContext);
    const { t } = useTranslation();
    const [search, setSearch] = useState(filters.list.search);

    function handleSearchButtonClick (e: any) {
        e.preventDefault();
        filters.addFilter( { search: search } );
    }

    function handlerChangeSearch (e: any) {
        setSearch(e.target.value)
        filters.addFilter( { search: e.target.value } );
    }

    return (
        <div className="markets__search">
            <input 
                className="markets__search-input" 
                value={search} 
                onChange={handlerChangeSearch} 
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