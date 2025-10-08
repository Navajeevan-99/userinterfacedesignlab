import React,{ useState} from 'react'
import './Weather.css'
const Weather = () => {
    const [ city,setcity]=useState('London');
    const [isget,setisget]=useState(true);
    const [degree,setdegree]=useState(300);
    const [max,setmax]=useState(300);
    const [min,setmin]=useState(300);
    const [pre,setpre]=useState(300);
    const [hum,sethum]=useState(300);
    const changecity=(e)=>{
        setcity(e.target.value)
    }
    const API='0cc586d8f6ba1ec771bc3b576492e703'
      const getweather=async ()=>{
            try{
            await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`).then(result=>result.json())
            .then(jso=>{
                setdegree(jso.list[0].main.temp)
                setmax(jso.list[0].main.temp_max)
                setmin(jso.list[0].main.temp_min)
                setpre(jso.list[0].main.pressure)
                sethum(jso.list[0].main.humidity)
                
                console.log(jso)}
        )}
        catch(e){
            alert('Enter the city name correctly')
        }
        }
    
  return (
    <div className='centercolumn'>
        <div className='header centercolumn'>
            <h1>Weather App</h1>
        </div>
        <div className='input centerrow '>
            <h3>City : </h3> 
            <input className='field' value={city} onChange={changecity}></input> 
            <button className='getweather' onClick={getweather}>Get Weather</button>
        </div>
        {
            isget &&
        <div className='content'>
            <h1 className='weather'>🌧️{(degree-273).toFixed(2)} &#176;C</h1>
            <div className='tempclass'>
            <h3>High : {(max-273).toFixed(2)}</h3>
            <h3>Low : {(min-273).toFixed(2)}</h3>
            </div>
            <div className='other'>
                <h3>Pressure : {pre}</h3>
            <h3>Humidity : {hum}</h3>
            </div>
        </div>
        }

    </div>
  )
}

export default Weather