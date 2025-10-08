import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let [details,setdetails]=useState([]);
  let [detail,setdetail]=useState({
    name : '',
    description : '',
    quantity: 0
  });
  const changename=(e)=>{
    setdetail((prev)=>({...prev,name: e.target.value}))
  }
  const changedescription=(e)=>{
    setdetail((prev)=>({...prev,description: e.target.value}))
  }
  const changequantity=(e)=>{
    setdetail((prev)=>({...prev,quantity: e.target.value}))
  }
  const adddetails=()=>{
    setdetails((prev)=>([...prev,detail]));
    console.log(details);
  }
  return (
    <div className="App">
      <div className='mainblock'>
        <div className='addblock'>
          <table>
            <tbody>
              <tr><td>Name</td><td></td><td><input type='text' value={detail.name} onChange={changename}/></td></tr>
              <tr><td>Description</td><td></td><td><input type='text' value={detail.description} onChange={changedescription}/></td></tr>
              <tr><td>Quantity</td><td></td><td><input type='number' value={detail.quantity} onChange={changequantity}/></td></tr>
              <tr>
                <td></td><td></td><td className='addbuttoncolumn'><button onClick={adddetails} className='addbutton'>+</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {
          details.map((d,i)=>(
            <div className='addblock'>
              <table>
            <tbody>
              <tr><td>Name</td><td></td><td>{d.name}</td ></tr>
              <tr><td>Description</td><td></td><td><p className='descriptionwritten'>{d.description}</p></td></tr>
              <tr><td>Quantity</td><td></td><td>{d.quantity}</td></tr>
            </tbody>
          </table>
            </div>
          ))
        }
        

      </div>
  
    </div>
  );
}

export default App;
