"use client";
import dynamic from 'next/dynamic';

import React, {useState} from 'react';
// import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; 
import { HiOutlineDotsVertical } from "react-icons/hi";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const AreaChart = () => {
  // Define chart options and data
  const [options] = useState<ApexOptions> ({
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false, // Disable toolbar icons
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ["#35C3F3"]
    },
    fill: {
        type: 'gradient',
        gradient: {
          type: 'linear',
          gradientToColors: ['#8B9FE8', '#E681D8', '#FFA9A4', '#FED2CE', '#FED2CE'], // Ending colors for gradient
          stops: [0, 26, 53, 74, 100], // Gradient stops
        },
    },
    xaxis: {
      categories: [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
      ],
      title: {
        text: 'Months', // X-axis title
        style: {
          fontSize: '14px',
          fontWeight: 500,
          color: '#6A6A6A'
        },
      },
      labels: {
        style: {
          fontSize: '14px',
          colors: '#6A6A6A'
        },
      },
    },
    yaxis: {
        title: {
          text: 'Watch time', // Y-axis title
          style: {
            fontSize: '14px',
            fontWeight: 500,
            color: '#6A6A6A'
          },
        },
        labels: {
            formatter: function (value) {
                return value === 0 ? '0' : (value / 1000).toFixed(0) + 'k'; // Handle zero case
              },
            style: {
              fontSize: '14px',   // Custom font size for y-axis labels
              colors: '#6A6A6A',   // Custom color for y-axis labels
            },
          },
      },
    tooltip: {
    //   x: {
    //     format: (val) => val,
    //   },
    },
   
  });

  // Define chart series 
  const series = [
    {
      name: 'series1',
      data: [10000, 15500, 10000, 10500, 10000, 40000, 18000, 15000, 10000, 85000, 34000, 12000],
    },
  ];

  return (
    <div className='border rounded-lg h-[364px] px-6 pt-6 pb-4'>
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='font-medium'>Average watch time</h2>
                <p className='text-sm text-[#6A6A6A]'>This tracks the average watch by users every month</p>
            </div>
            <HiOutlineDotsVertical />
            
        </div>
        
        <div id="chart" className='mt-4 h-[251px]'>
            <div className='flex justify-end space-x-3 text-sm font-medium'>
                <div className='flex items-center space-x-1'>
                    <div className='h-2 w-2 bg-purple-200 rounded-full'></div>
                    <p >0-1000</p>
                </div>
                <div className='flex items-center space-x-1'>
                    <div className='h-2 w-2 bg-[#8B9FE8] rounded-full'></div>
                    <p>1000-10,000</p>
                </div>
            </div>
            <ReactApexChart options={options} series={series} type="area" height={251} />
        </div>
    </div>
    
  );
};

export default AreaChart;
