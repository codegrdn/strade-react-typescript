import { FC } from 'react';
import Favorite from './favorite/Favorite';
import Search from './search/Search';
import filters from './data/filters';

interface FiltersPageMarketProps {

}

const FiltersPageMarket: FC<FiltersPageMarketProps> = () => {
    return (
        <>
            {/* <div className="markets__table-head">
                <Favorite />

                {
                    filters.length &&
                    <ul className="markets__filters-list">
                        {
                            filters.map((item) => (
                                <li className="markets__filters-item" key={item.key}>
                                    <item.component />
                                </li>
                            ))
                        }
                    </ul>
                }
            </div> */}

            <div className="markets__table-head-row">


                {
                    filters.length &&
                    <ul className="markets__filters-list">
                        {
                            filters.map((item) => (
                                <li className="markets__filters-item" key={item.key}>
                                    <item.component />
                                </li>
                            ))
                        }
                    </ul>
                }
                <Favorite />

                <Search />
            </div>
        </>
    )
}

export default FiltersPageMarket;