import React from 'react';

const CoinItem = (props) => {
    return (
        <div>
            <div className='coinItem'>
                <p style={{fontWeight:"bold"}}>{props.coins.market_cap_rank}</p>
                <div className='coin-img'>
                    <img src={props.coins.image} />
                    <div>{props.coins.symbol.toUpperCase()}</div>
                    </div>
                    <div className='price'>${props.coins.current_price.toLocaleString()}</div>
                    <div className='24h'>{props.coins.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='volume'>${props.coins.total_volume.toLocaleString()}</div>
                    <div className='mkt'>${props.coins.market_cap.toLocaleString()}</div>

                </div>
        </div>
    );
};

export default CoinItem;