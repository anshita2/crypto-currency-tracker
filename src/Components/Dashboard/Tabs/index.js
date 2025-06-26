import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import Grid from '../Grid';
import './styles.css'
import List from '../List';

export default function Tabcomponent({coins}) {
  const [value, setValue] = React.useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

const theme = createTheme({
  palette: {
    primary: {
      main:'#3a80e9',
    },
  },
});


  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style}/>
            <Tab label="List" value="List" sx={style}/>
          </TabList>
        </div>
        <TabPanel value="Grid">
            <div className='grid-flex'>
                {coins.map((coin, i) => (
                <Grid key={coin.id || i} coin={coin}></Grid>))}
            </div>

        </TabPanel>
        <TabPanel value="List">
          <table className='List-flex'>
                {coins.map((coin, i) => (
                <List key={coin.id || i} coin={coin}></List>))}
            </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}



// What's happening:
// Tabs/index.js renders both Grid and List.

// Grid/index.js imports ./styles.css → browser loads that file once globally.

// List/index.js has an element with class grid-container.

// Since .grid-container is now in global CSS, it applies to List too — even though List never imported that CSS directly.