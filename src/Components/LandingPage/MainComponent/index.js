import React from 'react'
import "./Styles.css";
import Button from '../../Common/Button';
import iphone from '../../../Assets/iphone.png'
import gradient from '../../../Assets/gradient.png'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const MainComponent = () => {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.div className='track-crypto-heading' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 1 }}>Track Crypto</motion.div>
            <motion.div className='real-time-heading' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>Real Time.</motion.div>
            <motion.p className='info-text' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}>Track crypto through a public api in real time. Visit the dashboard to
          do so!</motion.p>
          <motion.div className='btn-flex' initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}>
            <Link to='/dashboard'><Button text="Dashboard"></Button></Link>
            <Button text="Share" outlined={true}></Button>
          </motion.div>
        </div>
        <div className='phone-container'>
          <motion.img src={iphone} className='iphone' initial={{ x:-10 }}
          animate={{ x:10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}></motion.img>
          <img src={gradient} className='gradient'></img>
        </div>
    </div>
  )
}

export default MainComponent