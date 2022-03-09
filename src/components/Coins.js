import React from 'react';
import './coins.css';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';

const Coins = (props) => {
    
    return (
        <div className='container'>
            <div className='heading'>
           <h4>#</h4>
           <h4>Coin</h4>
           <h4>Price</h4>
           <h4>24h</h4>
           <h4>volume</h4>
           <h4>Mkt Cap</h4>
                </div>

                {props.coins.map(coins=>{
                    return(
                        <Link to={`/coin/${coins.id}`} element={<Coin />}  key={coins.id} style={{color:"#f4f4f4"}}>
                        <CoinItem coins={coins} />
                        </Link>
                    )
                })}



               
            
        </div>
    );
};

export default Coins;