import axios from "axios";

export const getting100coins=()=>{
    let response=axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                .then((res) => {
                    console.log("response",res);
                    return res.data;
                })
                .catch((err) => {
                    console.log("error aya h");
                });
    return response;
}