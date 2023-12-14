import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Coins = ({ coin }) => {
    const navigate = useNavigate();
    return (
        <tr onClick={()=>navigate(`/coins/${coin.id}`)}>
            <td><img src={coin.image} alt={coin.name} width='30px' /> &nbsp;{coin.name}&nbsp;({coin.symbol})</td>
            <td>₹{new Intl.NumberFormat('en-IN').format(coin.current_price)}</td>
            <td className={`${coin.price_change_percentage_24h < 0 ? 'text-danger' : 'text-success'}`}>{coin.price_change_percentage_24h < 0 ? <i class="bi bi-graph-down-arrow"></i> : <i class="bi bi-graph-up-arrow"></i>}&nbsp;&nbsp;{coin.price_change_percentage_24h}</td>
            <td>₹{new Intl.NumberFormat('en-IN').format(coin.market_cap)}</td>
        </tr>
    )
}

export default Coins
