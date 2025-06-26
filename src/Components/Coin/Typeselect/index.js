import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function Typeselect({chartType,setchartType}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{ marginBottom: '1rem' }}>
  <Button
    variant={chartType === 'prices' ? 'contained' : 'outlined'}
    onClick={() => setchartType('prices')}
  >
    PRICE
  </Button>
  <Button
    variant={chartType === 'market_caps' ? 'contained' : 'outlined'}
    onClick={() => setchartType('market_caps')}
  >
    MKT CAP
  </Button>
  <Button
    variant={chartType === 'total_volumes' ? 'contained' : 'outlined'}
    onClick={() => setchartType('total_volumes')}
  >
    VOLUME
  </Button>
</ButtonGroup>

    </Box>
  );
}
