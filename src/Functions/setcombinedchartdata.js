export const settingCombinedChartData = (coin1Name, coin2Name, chartType, price1, price2) => {
  return {
    labels: price1.map((point) => new Date(point[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${coin1Name} ${
          chartType === 'prices'
            ? 'Price (USD)'
            : chartType === 'market_caps'
            ? 'Market Cap'
            : 'Total Volume'
        }`,
        data: price1.map((point) => point[1]),
        borderColor: '#3a80e9',
        backgroundColor: 'rgba(58, 128, 233, 0.2)',
        tension: 0.25,
        pointRadius: 1,
        borderWidth: 2,
        fill: true,
        yAxisID: 'y1',
      },
      {
        label: `${coin2Name} ${
          chartType === 'prices'
            ? 'Price (USD)'
            : chartType === 'market_caps'
            ? 'Market Cap'
            : 'Total Volume'
        }`,
        data: price2.map((point) => point[1]),
        borderColor: '#61c96f',
        backgroundColor: 'rgba(97, 201, 111, 0.2)',
        tension: 0.25,
        pointRadius: 1,
        borderWidth: 2,
        fill: true,
        yAxisID: 'y2',
      },
    ],
  };
};
