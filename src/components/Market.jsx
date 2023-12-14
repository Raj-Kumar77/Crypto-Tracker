import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'
import Coins from './Coins'
import Skeleton from 'react-loading-skeleton'

const Market = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const { response, loading } = useAxios('coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');

    if (loading) {
        return (
            <div className='container mt-5'>
                <Skeleton height={50} width={200} />
                <Skeleton height={40} width={1200} />
                <Skeleton height={40} width={1200} />
                <Skeleton height={40} width={1200} />
                <Skeleton height={40} width={1200} />
                <Skeleton height={40} width={1200} />
            </div>
        )
    }

    const filteredCoin = response && response.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
    })

    const selectPageHandler = (selectedPage) => {
        if (response) {
            if (selectedPage >= 1 && selectedPage != page && selectedPage<=response.length/10)
            setPage(selectedPage)
        }
        // if (selectedPage >= 1 && selectedPage != page)
        // setPage(selectedPage)
    }

    return (
        <div className='container mt-5'>
            <div className='d-flex mb-3 mt-5 justify-content-between'>
                <h3>Markets</h3>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Start typing to filter..." onChange={(e) => setSearch(e.target.value)} />
                </form>
            </div>
            <div className='col-md-12'>
                <table class="table table-striped table-responsive-sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Price Change (%)</th>
                            <th scope="col">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCoin && filteredCoin.slice(page * 10 - 10, page * 10).map(coin => <Coins key={coin.id} coin={coin} />)}
                    </tbody>
                </table>
                {
                    response && (
                        <div className='pagination'>
                            <span className={page > 1 ? '' : 'pagination_diabled'} onClick={() => selectPageHandler(page - 1)}>◀</span>
                            {
                                [...Array(response.length / 10)].map((_, i) => {
                                    return <span className={page === i + 1 ? "pagination_selected" : ""} onClick={() => selectPageHandler(i + 1)} key={i}>{i + 1}</span>
                                })
                            }
                            <span className={page < response.length/10 ? '' : 'pagination_diabled'} onClick={() => selectPageHandler(page + 1)}>▶</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Market
