import axios from "axios";
export const gettingprices=async(id,days, chartType)=>{
    const prices=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((res) => {
          return res.data[chartType];})
        .catch((err)=>{
            console.log("prices fetch m error",err.response?.status, err.message);
        });
return prices;
}