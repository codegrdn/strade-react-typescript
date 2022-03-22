import { FC, useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import { MarketMainContext } from '../../context/MarketMainContext';

interface SearchProps {

}

const Search: FC<SearchProps> = () => {
    const { filters } = useContext(MarketMainContext);
    const { t } = useTranslation();
    const [search, setSearch] = useState('');

    function handleSearchButtonClick (e: any) {
        e.preventDefault();
        filters.addFilter( { search: search } );
    }

    function handleSearchButtonKeyPass (e: any) {
        if (e.charCode === 13) {
            filters.addFilter( { search: search } );
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