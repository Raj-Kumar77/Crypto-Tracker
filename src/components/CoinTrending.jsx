import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoinTrending = ({coin}) => {
    const navigate = useNavigate();
    return (
        <div className='col-md-8 d-flex p-2 border my-2 align-items-center' onClick={()=>navigate(`/coins/${coin.id}`)}>
            <span className='me-3'>{coin.score+1}</span>
            <img src={coin.small} alt={coin.name} width='25px' className='me-3'/>
            <span>{coin.name}</span>
            <span>&nbsp;({coin.symbol})</span>
        </div>
    )
}

export default CoinTrending
