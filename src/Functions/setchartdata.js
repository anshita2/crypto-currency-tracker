// setchartdata.js
export const settingchartdata = (coinName, chartType,prices) => {
  return {
    labels: prices.map((point) =>
      new Date(point[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: `${coinName} ${
          chartType === 'prices'
            ? 'Price (USD)'
            : chartType === 'market_caps'
            ? 'Market Cap'
            : 'Total Volume'
        }`,
        data: prices.map((point) => point[1]),
        borderColor: '#3a80e9',
        tension: 0.25,
        pointRadius: 1,
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(58, 128, 233, 0.2)',
      },
    ],
  };
};


  