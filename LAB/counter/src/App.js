import {useState} from 'react'
import './App.css';

function App() {
  let [n,setn]=useState(0);
  const add=(e)=>{
    setn(n+1);
  }
  const sub=(e)=>{
    setn(n-1);
  }
  const clear=(e)=>{
    setn(0);
  }
  return (
    <div className="App">
      <div className='center counterdiv'>
        <h1>{n}</h1>
        <div className='centerrow'>
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
          <button onClick={clear}>c</button>
        </div>
      </div>
    </div>
  );
}

export default App;
