import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Components/Common/Header';
import CoinSelect from '../Components/Compare/Selectcoins';
import Dayselect from '../Components/Coin/Dayselect';
import Loader from '../Components/Common/Loader';
import Linechart from '../Components/Coin/Linechart';
import List from '../Components/Dashboard/List';
import Coininfo from '../Components/Coin/Coininfo';

import { getting100coins } from '../Functions/get100coins';
import { gettingprices } from '../Functions/getprices';
import { gettingcoindata } from '../Functions/getcoindata';
import { setcoinobject } from '../Functions/coinobject';
import { settingCombinedChartData } from '../Functions/setcombinedchartdata';

const Compare = () => {
  const [crypto1, setcrypto1] = useState('bitcoin');
  const [crypto2, setcrypto2] = useState('ethereum');
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(7);
  const [crypto1data, setcrypto1data] = useState({});
  const [crypto2data, setcrypto2data] = useState({});
  const [price1, setprice1] = useState([]);
  const [price2, setprice2] = useState([]);

  const isValidCoin = (coin) =>
    coin &&
    coin.id &&
    coin.name &&
    coin.image &&
    coin.market_cap &&
    coin.price_change_percentage_24h !== undefined;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        setcrypto1data({});
        setcrypto2data({});
        setprice1([]);
        setprice2([]);

        const coinListData = await getting100coins();
        if (coinListData) setCoinList(coinListData);

        const coin1Data = await gettingcoindata(crypto1);
        const coin2Data = await gettingcoindata(crypto2);
        const price1Data = await gettingprices(crypto1, days, 'prices');
        const price2Data = await gettingprices(crypto2, days, 'prices');

        if (coin1Data) setcoinobject(setcrypto1data, coin1Data);
        if (coin2Data) setcoinobject(setcrypto2data, coin2Data);
        if (price1Data) setprice1(price1Data);
        if (price2Data) setprice2(price2Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [crypto1, crypto2, days]);

  const chartData =
    crypto1data &&
    crypto2data &&
    typeof crypto1data.name === 'string' &&
    typeof crypto2data.name === 'string' &&
    Array.isArray(price1) &&
    Array.isArray(price2) &&
    price1.length > 0 &&
    price2.length > 0
      ? settingCombinedChartData(
          crypto1data.name,
          crypto2data.name,
          'prices',
          price1,
          price2
        )
      : null;

  return (
    <div style={{ padding: '1rem' }}>
      <Header />

      {loading || !isValidCoin(crypto1data) || !isValidCoin(crypto2data) ? (
        <Loader />
      ) : (
        <>
          {/* Controls Section */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <strong>Crypto 1:</strong>
              <CoinSelect crypto={crypto1} setcrypto={setcrypto1} cryptolist={coinList} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <strong>Crypto 2:</strong>
              <CoinSelect crypto={crypto2} setcrypto={setcrypto2} cryptolist={coinList} />
            </div>
            <Dayselect days={days} setdays={setDays} />
          </div>

          {/* Coin Info Lists */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div className="grey-wrapper">
              <List coin={crypto1data} />
            </div>
            <div className="grey-wrapper">
              <List coin={crypto2data} />
            </div>
          </div>

          {/* Coin Descriptions */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Coininfo desc={crypto1data.desc} title={crypto1data.name} />
            <Coininfo desc={crypto2data.desc} title={crypto2data.name} />
          </div>

          {/* Line Chart */}
          <div className="grey-wrapper" style={{ overflowX: 'auto', padding: '1rem' }}>
            {chartData ? (
              <Linechart chartData={chartData} multiAxis={true} />
            ) : (
              <p style={{ textAlign: 'center', fontWeight: 500 }}>No chart data available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Compare;

