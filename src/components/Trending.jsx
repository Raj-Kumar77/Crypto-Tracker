import React from 'react'
import useAxios from '../hooks/useAxios'
import Skeleton from 'react-loading-skeleton'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const Trending = () => {
    const { response, loading } = useAxios('search/trending')
    if (loading) {
        return (
            <div className='container mt-5'>
                <Skeleton height={200} width={1200} />
            </div>
        )
    }

    const items = response?.coins?.map(coin => {
        
        return (
            <Link to={`/coins/${coin.item.id}`} key={coin.item.coin_id} className='text-white'>
                <img src={coin.item.small} alt={coin.item.name} width='70px' style={{paddingBottom:'1rem'}}/>
                <h6>{coin.item.symbol}</h6>
                {/* <span>${coin.item.price_btc.toFixed(9)}</span> */}
            </Link>
        )
    })


    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 5
        }
    }

    return (
        <div className='container-fluid trending-div'>
            <div className='py-5'>
            <h1 className='text-white text-center' style={{fontSize:'2.5rem'}}>Trending</h1>
            <p className='text-white text-center'>Get All The Info Regarding Your Favourite Crypto Currency</p>
            </div>
            {/* {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)} */}
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1500}
                animationDuration={1500}
                disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>
    )
}

export default Trending
