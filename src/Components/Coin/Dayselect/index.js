import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.css';

export default function Dayselect({days,setdays}) {

  const handleChange = (event) => {
    setdays(event.target.value);
  };
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

  return (
    <div>
      <FormControl>
        <Select
          value={days}
          onChange={handleChange}
          className="custom-select"
          sx={style}>
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
