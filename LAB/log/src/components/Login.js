import React, { useEffect, useState } from 'react';
import './Login.css';
const Login = () => {
    let [name,setname]=useState('');
    let [password,setpassword]=useState('');
    let [email,setemail]=useState('');
  return (
    <form className='form centerm'>
    <table className='tb center'>
            <tbody>
            <tr>
                <td>Name</td><td>:</td><td ><input  type="text" value={name}  name="name" id="name"/></td>
            </tr>
            <tr>
                <td>Email</td><td>:</td><td><input type="email" value={email} name="email" id="email"/></td>
            </tr>
            <tr>
                <td>Password</td><td>:</td><td><input type="password" value={password}  name="password" id="password"/></td>
            </tr>
            <tr>
                <td></td><td></td>
                <td><button>Login</button></td>
            </tr>
            </tbody>
        </table>
        </form>
  )
}

export default Login