import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './styles.css'


const Searchcomponent = ({search,setsearch}) => {
    const changehandler=(e)=>{return (setsearch(e.target.value))}
  return (
    <div className='search-flex'>
    <SearchRoundedIcon></SearchRoundedIcon>
    <input className='search-component-input' onChange={(e)=>{changehandler(e)}} value={search}></input>
    </div>
  )
}

export default Searchcomponent