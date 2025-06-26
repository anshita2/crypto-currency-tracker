import React, { useEffect, useState } from 'react';
import CoinSelect from '../Components/Compare/Selectcoins';
import axios from 'axios';
import Header from '../Components/Common/Header';
import Dayselect from '../Components/Coin/Dayselect';
import { getting100coins } from '../Functions/get100coins';
import Loader from '../Components/Common/Loader';
import Linechart from '../Components/Coin/Linechart';
import { gettingprices } from '../Functions/getprices';
import { settingchartdata } from '../Functions/setchartdata';
import { gettingcoindata } from '../Functions/getcoindata';
import { setcoinobject } from '../Functions/coinobject';
import List from '../Components/Dashboard/List';
import Coininfo from '../Components/Coin/Coininfo';
import { settingCombinedChartData } from '../Functions/setcombinedchartdata';

const Compare = () => {
  const [crypto1, setcrypto1] = useState('bitcoin');
  const [crypto2, setcrypto2] = useState('ethereum');
  const [coinList, setCoinList] = useState([]);
  const[loading,setloading]=useState(true);
  const[days,setdays]=useState(7);
  const[crypto1data,setcrypto1data]=useState([]);
  const[crypto2data,setcrypto2data]=useState([]);
  const[price1,setprice1]=useState([]);
   const[price2,setprice2]=useState([]);

  const isValidCoin = (coin) =>
  coin &&
  coin.id &&
  coin.price_change_percentage_24h !== undefined &&
  coin.image &&
  coin.name &&
  coin.market_cap;


  useEffect(() => {
        async function fetchListAndData() {
          setloading(true)
          let data=await getting100coins();
          if(data){
            setCoinList(data);
          }
          const coin1data = await gettingcoindata(crypto1);
          const coin2data=await gettingcoindata(crypto2);
          let price1response = await gettingprices(crypto1, days, 'prices');
          let price2response = await gettingprices(crypto2, days, 'prices');
          if (coin1data) {
                  setcoinobject(setcrypto1data, coin1data);
                }
          if (coin2data) {
                  setcoinobject(setcrypto2data, coin2data);
                }
          if(price1response){
            setprice1(price1response);
          }
          if(price2response){
            setprice2(price2response);
          }
        }
        fetchListAndData();
      }, []);

      useEffect(()=>{
        async function fetchData() {
          setloading(true);
          const coin1data = await gettingcoindata(crypto1);
          const coin2data=await gettingcoindata(crypto2);
          let price1response = await gettingprices(crypto1, days, 'prices');
          let price2response = await gettingprices(crypto2, days, 'prices');
          if (coin1data) {
                  setcoinobject(setcrypto1data, coin1data);
                }
          if (coin2data) {
                  setcoinobject(setcrypto2data, coin2data);
                }
          if(price1response){
            setprice1(price1response);
          }
          if(price2response){
            setprice2(price2response);
          }
        }
        fetchData();
      },[days,crypto1,crypto2])

      useEffect(()=>{
        if(crypto1data && crypto2data&&price1&&price2){
          console.log("i am compare coin1 data",crypto1data);
          console.log("i am compare coin2 data",crypto2data);
          console.log("i am compare coin1 price",price1,"myname",crypto1);
          setloading(false);
        }
      },[crypto1data,crypto2data,price1,price2])

      const chartData = settingCombinedChartData(
      crypto1data.name,
      crypto2data.name,
      'prices',
      price1,
      price2);


  return (
    <div>
    <Header></Header>
    {loading || !isValidCoin(crypto1data) || !isValidCoin(crypto2data)?<Loader></Loader>:(<div>
      <div className='compare-parameter-div'>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Crypto 1 <CoinSelect crypto={crypto1} setcrypto={setcrypto1} cryptolist={coinList} />{crypto1}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Crypto2 <CoinSelect crypto={crypto2} setcrypto={setcrypto2} cryptolist={coinList} />{crypto2}</div>
      <div><Dayselect days={days} setdays={setdays} ></Dayselect></div>
    </div>
    <div className='list-div'>
      <div className='grey-wrapper'><List coin={crypto1data}></List></div>
      <div className='grey-wrapper'><List coin={crypto2data}></List></div>
    </div> 
    <div>
      <Coininfo desc={crypto1data.desc} title={crypto1data.name} />
      <Coininfo desc={crypto2data.desc} title={crypto2data.name} />
    </div>
    <div className='grey-wrapper'>
      <Linechart chartData={chartData} multiAxis={true} />
    </div>
    

  

    </div>
    )
    }
    </div>
  );
};

export default Compare;

