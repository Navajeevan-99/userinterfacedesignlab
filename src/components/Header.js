import React from 'react'
import './Header.css'
import epiclogo from './assets/epiclogo.png'
const Header = () => {
  return (
    <>
    <div className='headerdiv'>
        <img src={epiclogo} width={25} height={25} style={{marginTop:"12px",marginLeft:"10px"}}/>
        <div className='headerinnerdiv center'>
        <h3 className='h3'>Home</h3>
        <h3 className='h3'>Store</h3>
        <h3 className='h3'>Categories</h3>
        <h3 className='h3'>News</h3>
        </div>
    </div>
    </>
  )
}

export default Header