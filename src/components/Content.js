import React,{useState} from 'react'
import './Content.css'
import gow5 from './assets/gow5.jpg'
import gow5v from './assets/gow5vertical.jpg'
import gta6 from './assets/GTA 6.jpg'
import gta6v from './assets/GTA 6v.jpg'
import bs6 from './assets/battlefield-6.jpeg'
import itt from './assets/ittakestwo.jpg'
import rr from './assets/ridersrepublic.jpg'

const Content = () => {
  let [image,setimage]=useState(gow5);
  let [price,setprice]=useState('₹ 2,999');
  let [game,setgame]=useState('God of War 5')
  const cgow5=()=>{
    setimage(gow5);
    setgame('God of War 5');
    setprice('₹ 2,999')
  }
  const cgta6=()=>{
    setimage(gta6);
    setgame('GTA 6');
    setprice('₹ 3,999')

  }
  const cbs6=()=>{
    setimage(bs6);
    setgame('Battle Field 6');
    setprice('₹ 2,499')
  }
  const citt=()=>{
    setimage(itt);
    setgame('It takes two');
    setprice('₹ 1,999')
  }
  const crr=()=>{
    setimage(rr);
    setgame('Riders Republic');
    setprice('₹ 1,099')
  }
  return (
    <>
    <div className='center'>
    <div className='slider'>
    <img src={image} className='imageslider' alt="leo"/>
    <div className='gamedetailsslider centercolumn'>
    <p>{game}</p>
    <button className='buybutton'>Buy Now</button>
    <p>{price}</p>
    
    </div>
    </div>
    <div className='centercolumn gap'>
    <div className='slideselector center'>
      
      <button className='buttonselector center' onClick={cgow5}>
      <img src={gow5} className='imageselector'/>
      <div className='centercolumn textwhite gamedetailsselector'>
        <p>God of War 5</p>
        <p>₹ 2,999</p>
      </div>
      </button>
    </div>
    
    <div className='slideselector center'>
      <button className='buttonselector center' onClick={cgta6}>
      <img src={gta6v} className='imageselector'/>
      <div className='centercolumn textwhite gamedetailsselector'>
        <p>GTA 6</p>
        <p>₹ 3,999</p>
      </div>
      </button>
    </div>
    <div className='slideselector center textwhite'>
      <button className='buttonselector center' onClick={cbs6}>
      <img src={bs6} className='imageselector'/>
      <div className='centercolumn textwhite gamedetailsselector'>
        <p>Battle Field 6</p>
        <p>₹ 1,999</p>
      </div>
      </button>
    </div>
    <div className='slideselector center textwhite'>
      <button className='buttonselector center' onClick={citt}>
      <img src={itt} className='imageselector'/>
      <div className='centercolumn textwhite gamedetailsselector'>
        <p>It takes two</p>
        <p>₹ 1,099</p>
      </div>
      </button>
    </div>
    <div className='slideselector center textwhite' >
      <button className='buttonselector center' onClick={crr}>
      <img src={rr} className='imageselector'/>
      <div className='centercolumn textwhite gamedetailsselector'>
        <p>Riders Republic</p>
        <p>₹ 1,999</p>
      </div>
      </button>
    </div>
    </div>
    </div>{/*Slider Over.... ......... */}
    <div className='center' style={{marginTop:"50px"}}>
      <div className='row'>{/*games in column above the footer for first row*/}
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={gow5} className='imageselector'/> 
            <p>God of War 5</p>
            <p>₹ 2,999</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={gta6v} className='imageselector'/>
            <p>GTA 6</p>
            <p>₹ 3,999</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={bs6} className='imageselector'/>
            <p>Battle Field 6</p>
           <p>₹ 1,999</p>
            </button>
          </div>
          
      </div>
      <div className='row'>{/*games in column above the footer for second row*/}
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={itt} className='imageselector'/>
            <p>It takes two</p>
            <p>₹ 1,099</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={rr} className='imageselector'/>
            <p>Riders Republic</p>
            <p>₹ 1,999</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={bs6} className='imageselector'/>
            <p>Battle Field 6</p>
           <p>₹ 1,999</p>
            </button>
          </div>
          
      </div>
      <div className='row'>{/*games in column above the footer for third row*/}
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={gow5} className='imageselector'/> 
            <p>God of War 5</p>
            <p>₹ 2,999</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={gta6v} className='imageselector'/>
            <p>GTA 6</p>
            <p>₹ 3,999</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={bs6} className='imageselector'/>
            <p>Battle Field 6</p>
           <p>₹ 1,999</p>
            </button>
          </div>
          
      </div>
    </div>

    </>
  )
}

export default Content