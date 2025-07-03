import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


export default function AnchorTemporaryDrawer() {
  const [open,setopen] = useState(false)
  

  return (
    <div>
          <IconButton onClick={()=>{setopen(true)}}><MenuIcon className='link'></MenuIcon></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>{setopen(false)}}>
            <div className='drawer-div'>
                <a href="/">
                    <p className="link">Home</p>
                </a>
                <a href="/compare">
                    <p className="link">Compare</p>
                </a>
            </div>
          </Drawer>
    </div>
  );
}
