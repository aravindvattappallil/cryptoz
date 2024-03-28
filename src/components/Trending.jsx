import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Cards from "./Cards";
import axios from "axios";
import Stack from '@mui/material/Stack';
import "./style.css"




const Trending = () => {

const apiURL="https://api.coingecko.com/api/v3/search/trending"
const [trendingList ,setTrendingList]= useState([])
useEffect(()=>{
    getTrending()
},[])

const getTrending = async ()=>{
    try{
        const response= await axios.get(apiURL);
        setTrendingList(response.data.coins);
        console.log(response.data)
        
       
    
    }
    catch(err){
        console.log(err)
    }
}
    
  return (
    <Box>
      <h3>Trending</h3>
      {/* <Stack
        direction={{ xs: 'column', sm: 'colum' }}
        spacing={{ md:.5}}
      > */}
      <div className='flex-5-cols'>
      {trendingList.map((coin, index) => (
         <Cards key={index} coin= {coin.item}/>
        ))}
      </div>
       
      {/* </Stack> */}
     
    </Box>
  );
};
export default Trending;
