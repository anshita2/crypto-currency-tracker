import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
const Grid = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className={`grid-container ${coin.price_change_percentage_24h < 0 ? 'grid-container-red' : ''}`}>
        <div className='info-flex'>
            <img src={coin.image} className='coin-logo'></img>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </div>
        { coin.price_change_percentage_24h>0? 
            <div className='chip-flex'>
                <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className='icon-chip'><TrendingUpRoundedIcon></TrendingUpRoundedIcon></div>
            </div>:
            <div className='chip-flex'>
                <div className='price-chip red-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className='icon-chip red-chip'><TrendingDownRoundedIcon></TrendingDownRoundedIcon></div>
            </div> 
        }
        <div className='info-container'>
            <h3  className={coin.price_change_percentage_24h < 0 ? 'red-text' : 'green-text'}>${coin.current_price.toLocaleString()}</h3>
            <div className='vol-and-marketcap'>
                <p className='coin-additional-info'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                <p className='coin-additional-info'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Grid