import React from 'react'
import HistoryChart from '../components/HistoryChart'
import CoinDetail from '../components/CoinDetail'

const CoinData = () => {
  return (
    <div className='my-5 container'>
      <HistoryChart/>
      <CoinDetail/>
    </div>
  )
}

export default CoinData
