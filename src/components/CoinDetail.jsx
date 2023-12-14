import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';

const CoinDetail = () => {
    const {id} = useParams();
    const {response} = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`)
console.log(response)
    if(!response){
        return (
            <div className='container mt-5'>
                <Skeleton height={50} width={200} />
                <Skeleton height={300} width={1200} />
            </div>
        )
    }
  return (
    <div className='mt-5'>
      <div className='d-flex'>
        <img src={response.image.small} alt={response.name} />
        <h2 className='ms-2'>{response.name}&nbsp;({response.symbol})</h2>
      </div>
      <br />
      <hr />
      <p><strong>Last Updated:</strong> {new Date(response.last_updated).toLocaleString()}</p>
      <hr />
      <p><b>Market Cap Rank:</b><span className='bg-success px-3 py-2 text-white ms-2' style={{borderRadius:'6px'}}>{response.market_cap_rank}</span></p>
      <hr />
      <p><b>Hashing Algorithm:</b> {response.hashing_algorithm}</p>
      <hr />
      <p className='[&>a]:text-primary' dangerouslySetInnerHTML={{__html: response.description.en}}></p>
    </div>
  )
}

export default CoinDetail
