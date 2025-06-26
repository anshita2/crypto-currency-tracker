import React, { useState } from 'react'
import './styles.css'

const Coininfo = ({title,desc}) => {
const longdesc = (
  <div>
    {desc}
    <span style={{ color: 'var(--grey)', cursor: 'pointer' }} onClick={()=>setreadmore(!readmore)}> Read less</span>
  </div>
);

const shortdesc = (
  <div>
    {desc.slice(0, 400)}...
    <span style={{ color: 'var(--grey)', cursor: 'pointer' }} onClick={()=>setreadmore(!readmore)}> Read more</span>
  </div>
);
const[readmore,setreadmore]=useState(false);
  return (
    <div className='grey-wrapper coin-info-wrapper'>
      <h2>{title}</h2>
      {desc.length > 300 ? (readmore ? longdesc : shortdesc) : <div>{desc}</div>}
    </div>
  )
}

export default Coininfo