import axios from "axios";
export const gettingcoindata=async(id)=>{
    const coin=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
                .then((response) => {
                     if (response.data) {
                     return response.data;
                }})
                .catch((err) => {
                    console.log("error aya h",err.response?.status, err.message);
                });

    return coin;
}