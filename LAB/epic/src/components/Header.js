import React, { useState } from 'react'
import './Header.css'
import epiclogo from './assets/epiclogo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { useParams,Link } from 'react-router-dom';

const Header = (props) => {
  let email=props.em;
  return (
   
    <>
    <div className='headerdivfixed'>
    <div className='headerdiv'>
        <img src={epiclogo} width={25} height={25} style={{marginTop:"12px",marginLeft:"10px"}}/>
        <div className='headerinnerdiv center'>
        <h3 className='h3'>Home</h3>
     <h3 className='h3'>Store</h3>
          <Link to={`/categories/${email}`} style={{textDecoration:'none'}}> <h3 className='h3'>Categories</h3></Link>
        <h3 className='h3'>News</h3>
        </div>
        <div className='center userimg'>
        <FaRegUserCircle/>
        <p className='usernameheader'>{email}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header