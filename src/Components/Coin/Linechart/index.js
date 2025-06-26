import React from 'react';
import { Line } from 'react-chartjs-2';
import { convertNumber } from '../../../Functions/convertnumbers';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Linechart({ chartData, multiAxis }) {
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: multiAxis
      ? {
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
          y1: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Coin 1',
            },
            ticks: {
              callback: convertNumber,
            },
          },
          y2: {
            type: 'linear',
            position: 'right',
            title: {
              display: true,
              text: 'Coin 2',
            },
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: convertNumber,
            },
          },
        }
      : {
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Price (USD)',
            },
            ticks: {
              callback: convertNumber,
            },
          },
        },

    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return `Price: $${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
      },
      legend: {
        display: chartData?.datasets?.length > 1,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default Linechart;
