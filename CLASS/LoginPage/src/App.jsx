import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginemail from './components/Loginemail'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import LandingPage from './components/LandingPage'
function App() {
  const [message,setmessage]=useState("");
  const showname=(m)=>{
    setmessage(m);

  }

  return (
    <>
    <div className='center'>
      <Router>
        <Routes>
          <Route path='/' element={<Loginemail sendData={showname}/>} />
          <Route path='/Home' element={<LandingPage n={message}/>}></Route>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
