import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.css';

export default function CoinSelect({crypto,setcrypto,cryptolist}) {

    const style={
          color: 'white',
          backgroundColor: '#1e1e1e',
          borderRadius: '0.5rem',
          width: 120,
          '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#3a80e9',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#3a80e9',
          },
          '.MuiSelect-icon': {
          color: 'white',
          },
           '.MuiSelect-select': {
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingLeft: '8px'},
          }
  const handleChange = (event) => {
    setcrypto(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          value={crypto}
          onChange={handleChange}
          className="custom-select"
          sx={style}
          MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'white', // white background for dropdown
              maxHeight: 300,
              width: 350,
              '& .MuiMenuItem-root': {
                fontSize: '0.85rem',
              },
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'white',
              },
            },
          },
        }}>
          {cryptolist.map((item)=>{
            return <MenuItem value={item.id}>{item.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}