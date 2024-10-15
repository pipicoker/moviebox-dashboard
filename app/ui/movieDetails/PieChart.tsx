import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';  
import AudienceSubTopics from './AudienceSubTopics';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
  const series = [31, 68];

  const options: ApexOptions = {
    chart: {
      // width: 159,
      type: 'pie',
    },
    labels: ['68.7% Men', '31.3% Women'],
    fill: {
      colors: ['#35C3F3', '#A6B3F0'], // Solid color for both initially
      type: ['gradient', 'solid'], // One for gradient, one for solid
      gradient: {
        shade: 'light',
        type: 'linear', // Set the gradient direction
        shadeIntensity: 0.5,
        gradientToColors: ['#8B9FE8', '#E681D8', '#FFA9A4', '#FED2CE', '#FED2CE'],
        // Gradient stops for Men slice
        inverseColors: false,
        stops: [0, 20, 40, 60, 80, 100],
      },
    },
    colors: ['#A6B3F0', '#35C3F3'], // Gradient for Men, solid for Women
    
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className='p-6 border rounded-lg'>
      <AudienceSubTopics topic='Gender' />
      <div id="chart">
        <ReactApexChart options={options} series={series} type="pie" />
      </div>
    </div>
  );
};

export default PieChart;
