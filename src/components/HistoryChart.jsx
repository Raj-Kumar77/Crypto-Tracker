import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Skeleton from 'react-loading-skeleton';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const HistoryChart = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=inr&days=7`)

    if (!response) {
        return (
            <div className='container mt-5'>
                <Skeleton height={600} width={1200} />
            </div>
        )
    }

    const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }))

    const options = {
        responsive: true
    }

    const data = {
        labels: coinChartData.map(value => moment(value.x).format('MMMDD')),
        datasets: [
            {
                fill: true,
                label: id,
                data: coinChartData.map(value => value.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ]
    }

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default HistoryChart
