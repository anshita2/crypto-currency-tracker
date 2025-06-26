import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import './styles.css'

export default function Basicpagination({page,setpage,totalpages}) {
    const handlepagechange=(event,value)=>{
        setpage(value);
    }


  return (
    <div className='pagination-component'>
      <Pagination count={totalpages} page={page} color="primary" sx={{
    '& .MuiPaginationItem-root': {
      color: '#fff',
      border: '1px solid var(--grey)',
    },
    '& .Mui-selected': {
      backgroundColor: '#6200ea',
      color: '#fff',
    },
  }} onChange={handlepagechange}/>
    </div>
  );
}
