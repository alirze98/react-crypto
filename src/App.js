import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import { Route, Routes } from "react-router-dom";


function App() {
  const [coins, setCoins] = useState([]);
  
  useEffect(()=>{
    axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
    .then((response) => {
      setCoins(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
   
  },[])
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Coins coins={coins}/>} />
      <Route path="/coin" element={<Coin />}>
        <Route path=":coinId" element={<Coin />} />
      </Route>
    </Routes>
    
    
    </div>;
}

export default App;
