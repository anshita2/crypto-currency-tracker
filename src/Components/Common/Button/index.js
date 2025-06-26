import React from 'react'
import './styles.css';

const Button = ({text,outlined}) => {
  return (
    <div className={outlined?'btn-outlined':'btn'}>{text}</div>
  )
}

export default Button