import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import BasicTable from "./MarketTable";
import Cards from "./Cards";

const Market = () => {
  const apiURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
  const [marketList, setMarketList] = useState([]);
  useEffect(() => {
    handleMarketData()
  }, []);
  
  const handleMarketData = async () => {
    try {
      console.log("inside handle marketlist");
      const response = await axios.get(apiURL);

      setMarketList(response.data);
      console.log(marketList)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="market_box"> 
      <h1>Market</h1>
      {/* <button onClick={handleMarketData }>load</button> */}
      {/* {marketList.map((coin,index)=>(
                <BasicTable key={coin.id} coin={coin}/>
            ))} */}
      <div className="markrt_table"><BasicTable coin={marketList} /></div>
    </div>
  );
};
export default Market;
