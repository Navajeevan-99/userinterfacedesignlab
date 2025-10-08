import React from 'react'
import { useState } from 'react';
import './Loginemail.css'
import {useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import {LoginSocialGoogle} from 'reactjs-social-login'
const Loginemail = ({sendData}) => {
    let [name,setname]=useState("");
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");
    const navigate=useNavigate()
    const passData=(e)=>{
        e.preventDefault();
        sendData(name);
        navigate('/Home');
    };
    const namechange=(e)=>{
        setname(e.target.value);
    }
    const emailchange=(e)=>{
        setemail(e.target.value);
    }
    const passwordchange=(e)=>{
        setpassword(e.target.value);
    }
  return (
    <>
    <div className='formborder'>
        <form className='form'>
        <table>
            <tbody>
            <tr>
                <td>Name</td><td>:</td><td ><input className='input' type="text" value={name} onChange={namechange} name="name" id="name"/></td>
            </tr>
            <tr>
                <td>Email</td><td>:</td><td><input className='input' type="email" value={email} onChange={emailchange} name="email" id="email"/></td>
            </tr>
            <tr>
                <td>Password</td><td>:</td><td><input className='input' type="password" value={password} onChange={passwordchange} name="password" id="password"/></td>
            </tr>
            <tr>
                <td></td><td></td>
                <td><button onClick={passData} className='button'>Login</button></td>
            </tr>
            </tbody>
        </table>
        </form>
        <div id="option">
            <h3>or</h3>
            <div id="google">
                <div id="icon">
                <LoginSocialGoogle 
                client_id="899483873005-89jm23b0at3510ikts1f9oe7lva0s7k9.apps.googleusercontent.com"
                access_type='offline'
                onResolve={(provider,data)=>{
                    console.log(providerm,data);
                }}
                onReject={(e)=>{
                    console.log(e);
                }
                }
                >
                <FaGoogle/>
                </LoginSocialGoogle>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Loginemail