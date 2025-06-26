import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import Tabcomponent from '../Components/Dashboard/Tabs'
import axios from 'axios';
import Searchcomponent from '../Components/Dashboard/Search';
import Basicpagination from '../Components/Dashboard/Pagination';
import Loader from '../Components/Common/Loader';
import { getting100coins } from '../Functions/get100coins';
const Dashboard = () => {
    const [coins,setcoins]=useState([])
    const[search,setsearch]=useState('');
    const[paginatedcoins,setpaginatedcoins]=useState([]);
    const[filteredcoins,setfilteredCoins]=useState([]);
    const[loading,setloading]=useState(true);
    const[page,setpage]=useState(1);
    let coinsPerPage=10;
    useEffect(() => {
      async function fetch100data() {
        setloading(true)
        let data=await getting100coins();
        console.log("mydata is here dashboard",data);
        if(data){
          setcoins(data);
          setloading(false);
        }
      }
      fetch100data();
    }, []);

const totalpages = Math.ceil(filteredcoins.length / coinsPerPage);


useEffect(() => {
  const result = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  setfilteredCoins(result);
  setpage(1); // reset to first page when search changes
}, [search, coins]);


useEffect(() => {
  const indexOfLastCoin = page * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredcoins.slice(indexOfFirstCoin, indexOfLastCoin);
  setpaginatedcoins(currentCoins);
}, [page,filteredcoins]); 

  return (
    <div>
        <Header></Header>
        {loading?<Loader></Loader>:<div><Searchcomponent search={search} setsearch={setsearch}></Searchcomponent>
        <Tabcomponent coins={paginatedcoins}></Tabcomponent>
        <Basicpagination  page={page} setpage={setpage} totalpages={totalpages}></Basicpagination></div>}
        
    </div>
  )
}

export default Dashboard