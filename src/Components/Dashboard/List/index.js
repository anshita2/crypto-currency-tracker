import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { useState, useEffect } from 'react';
import { convertNumber } from '../../../Functions/convertnumbers';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const List = ({coin}) => {


function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

const width = useWindowWidth();

  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className='list-row'>
    <td>
    <img src={coin.image} alt="coin logo" className=" coin-logo td-coin-logo" /></td>
        <td>
            <div className='td-info'>
                 <div className='name-col'>
                 <Tooltip title="Symbol" placement="bottom"><p className='coin-symbol'>{coin.symbol}</p></Tooltip>
                <Tooltip title="Name" placement="bottom"><p className='coin-name'>{coin.name}</p></Tooltip>
            </div>
            </div>
        </td>

        <td>
        <Tooltip title="price change">
            { coin.price_change_percentage_24h>0? 
            <div className='chip-flex'>
                <div className='price-chip td-price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className='icon-chip td-icon-chip'><TrendingUpRoundedIcon></TrendingUpRoundedIcon></div>
            </div>:
            <div className='chip-flex'>
                <div className='price-chip red-chip td-price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className='icon-chip td-icon-chip red-chip'><TrendingDownRoundedIcon></TrendingDownRoundedIcon></div>
            </div>
            }
        </Tooltip>
            
        </td>

        <td>
        <Tooltip title="current price"><h3  className={coin.price_change_percentage_24h < 0 ? 'red-text' : 'green-text'}>${coin.current_price.toLocaleString()}</h3></Tooltip>
        </td>

        <td className='desktop-version'>
        <Tooltip title="total volume"><p className='td-totalVolume'>${coin.total_volume.toLocaleString()}</p></Tooltip>
        </td>

        <td className='mobile-version'>
        <Tooltip title="total volume"><p className='td-totalVolume'>${convertNumber(coin.total_volume.toLocaleString())}</p></Tooltip>
        </td>

        {width > 800 && (
            <td><Tooltip title="market cap"><p className="td-marketCap">${coin.market_cap.toLocaleString()}</p></Tooltip></td>)}

    </tr>
    </Link>
  )
}

export default List