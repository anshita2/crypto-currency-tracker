import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Components/Common/Loader';
import { setcoinobject } from '../Functions/coinobject';
import List from '../Components/Dashboard/List';
import Header from '../Components/Common/Header';
import Coininfo from '../Components/Coin/Coininfo';
import Linechart from '../Components/Coin/Linechart';
import Dayselect from '../Components/Coin/Dayselect';
import Typeselect from '../Components/Coin/Typeselect';
import {gettingcoindata} from '../Functions/getcoindata';
import { gettingprices } from '../Functions/getprices';
import { settingchartdata } from '../Functions/setchartdata';

const Coin = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [coindata, setCoindata] = useState({});
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(7);
  const [chartType, setChartType] = useState('prices');

  // fetch coin info
  useEffect(() => {
    const fetchCoinInfo = async () => {
      setLoading(true); // start full loading
      const coin = await gettingcoindata(id);
      if (coin) {
        setcoinobject(setCoindata, coin);
      }
    };

    if (id) {
      fetchCoinInfo();
    }
  }, [id]);

  // fetch chart data after coin is ready
  useEffect(() => {
    const fetchChartData = async () => {
      const prices = await gettingprices(id, days, chartType);
      if (prices && coindata?.name) {
        const mychartdata = settingchartdata(coindata.name, chartType,prices);
        setChartData(mychartdata);
        setLoading(false); // ✅ done only when both coin + chart are ready
      }
    };

    if (id && coindata?.name) {
      fetchChartData();
    }
  }, [id, days, chartType, coindata]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="grey-wrapper">
            <List coin={coindata} />
          </div>

          <div className="grey-wrapper">
            <div className="day-controls">
              <p>Price Change in the last</p>
              <Dayselect days={days} setdays={setDays} />
            </div>
            <Typeselect chartType={chartType} setchartType={setChartType} />
            {chartData?.datasets?.length > 0 && <Linechart chartData={chartData} />}
          </div>

          <Coininfo desc={coindata.desc} title={coindata.name} />
        </div>
      )}
    </div>
  );
};

export default Coin;
