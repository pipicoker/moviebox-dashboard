"use client"
import dynamic from 'next/dynamic';

import React, {useState} from 'react'
// import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions type

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Donut = () => {
    const [options] = useState<ApexOptions>({
        chart: {
          // width: 159,
          type: 'donut', 
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'linear', // Horizontal gradient
            gradientToColors: ['#35C3F3', '#8B9FE8', '#E681D8', '#FFA9A4', '#FED2CE', '#FED2CE'], // The ending colors for the gradient
            
            stops: [0, 26, 53, 74, 100, 100], // the gradient stops
          },
        },
        legend: {
            formatter: function (val, opts) {
                // Customize the legend to show ranges
                const ranges = ['0-1000', '1000-10000', '10000-100000', '100000-1000000'];
                // const gradientColors = ['#35C3F3', '#8B9FE8', '#E681D8', '#FFA9A4'];

                return ranges[opts.seriesIndex];

                // return (
                //   `<span style="background: linear-gradient(to right, ${gradientColors[opts.seriesIndex]}, #FFF); padding: 4px; border-radius: 50%;"></span>&nbsp;&nbsp;` +
                //   ranges[opts.seriesIndex]
                // );

                
              },
        },
        
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200,
        //       },
        //       legend: {
        //         position: 'bottom',
        //       },
        //     },
        //   },
        // ],
        colors: ['#35C3F3', '#8B9FE8', '#E681D8', '#FFA9A4']
      });
    
      const [series] = useState([500, 300, 200, 100]);
  return (
    <div>
        <div id="chart">
        <ReactApexChart options={options} series={series} type="donut"  />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}

export default Donut