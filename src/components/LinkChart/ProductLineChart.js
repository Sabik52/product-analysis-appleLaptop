import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import './ProductLineChart.css'

const ProductLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
    <div className='charts'>
         <div>
         <LineChart width={600} height={300} data={data}>
         <Line dataKey ={'investment'} stroke="#8884d8"></Line>
         <Line type={'monotone'} dataKey ={'sell'} stroke="#8884d8"></Line>
         <Line dataKey ={'revenue'} stroke="#8884d8"></Line>
         <XAxis dataKey={'month'}></XAxis>
         <YAxis dataKey={'revenue'}></YAxis>

     </LineChart>
         </div>
    <div>
    <BarChart width ={600} height={300} data ={data}>
     <XAxis dataKey="month" tick={data} />
    <YAxis />
    <Bar dataKey="investment" barSize={30} fill="#8884d8"
      label={data}/>
    <Bar dataKey="sale" barSize={30} fill="#8884d8"
      label={data}/>
    <Bar dataKey="revenue" barSize={30} fill="#8884d8"
      label={data}/>

     </BarChart>
    </div>
    </div>

    );
};

export default ProductLineChart;