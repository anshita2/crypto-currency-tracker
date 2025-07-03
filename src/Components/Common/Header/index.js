import React from 'react'
import "./Styles.css"
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span>.</span></h1>
        <div className='links'>
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to='/dashboard'>
          <Button text="Dashboard"></Button>
        </Link>
        </div>
        <div className="drawer">
            <AnchorTemporaryDrawer />
        </div>

    </div>
  )
}

export default Header