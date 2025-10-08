import React,{useState} from 'react'
import './Content.css'
import gow5 from './assets/gow5.jpg'
import gow5v from './assets/gow5vertical.jpg'
import gta6 from './assets/GTA 6.jpg'
import gta6v from './assets/GTA 6v.jpg'
import bs6 from './assets/battlefield-6.jpeg'
import itt from './assets/ittakestwo.jpg'
import rr from './assets/ridersrepublic.jpg'
import lastofus from './assets/lastofus.jpg'
import spiderman2 from './assets/spiderman2.jpg'
import sleepingdogs from './assets/sleepingdogs.webp'
import xmen from './assets/xmen.jpg'
import redr2 from './assets/redredemption2.jpg'
import Header from './Header'
import { useParams } from 'react-router-dom'

const Content = () => {
  let {email}=useParams();
  let [i,seti]=useState(0);
  let [image,setimage]=useState(gow5);
  let [price,setprice]=useState('₹ 2,999');
  let [game,setgame]=useState('God of War 5');
  const returnimagevalue=(j)=>{
   seti(j);
}
  const cgow5=()=>{
    setimage(gow5);
    setgame('God of War 5');
    setprice('₹ 2,999');
    returnimagevalue(0);
   
  }
  const cgta6=()=>{
    setimage(gta6);
    setgame('GTA 6');
    setprice('₹ 3,999');
    returnimagevalue(1);

  }
  const cbs6=()=>{
    setimage(bs6);
    setgame('Battle Field 6');
    setprice('₹ 2,499');
    returnimagevalue(2);
  }
  const citt=()=>{
    setimage(itt);
    setgame('It takes two');
    setprice('₹ 1,999')
    returnimagevalue(3);
  }
  const crr=()=>{
    setimage(rr);
    setgame('Riders Republic');
    setprice('₹ 1,099')
    returnimagevalue(4);
  }
  const imagedispnum=()=>{
    if (i==0){
      setimage(gow5);
      setgame('God of War 5');
      setprice('₹ 2,999')
    }
    if (i==1){
      setimage(gta6);
      setgame('GTA 6');
      setprice('₹ 3,999')
    }
    if (i==2){
      setimage(bs6);
      setgame('Battle Field 6');
      setprice('₹ 2,499')
    }
    if (i==3){
      setimage(itt);
      setgame('It takes two');
      setprice('₹ 1,999')
    }
    if (i==4){
      setimage(rr);
      setgame('Riders Republic');
      setprice('₹ 1,099')
      
    }
  }
  const previousslide=async()=>{
    returnimagevalue(i-1);
    
    if (i==0){
      returnimagevalue(4);
    }
    console.log(i);
    await imagedispnum();

  }
  const nextslide=async ()=>{
    await returnimagevalue(i+1);
    if (i==4){
      returnimagevalue(0);
    }
     console.log(i);
    await imagedispnum();
  }
  return (
  
    <>
    <Header em={email}/>
    <div className='center' style={{marginTop:'75px'}}>
    <div className='slider'>
    <img src={image} className='imageslider' alt="leo"/>
    <div className='slidechanger'>
      <button className='slidechangerbutton prev' onClick={previousslide}>&lt;</button>
      <button className='slidechangerbutton next' onClick={nextslide}>&gt;</button>
    </div>
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
      <div className='center gameshower'>
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
            <img src={lastofus} className='imageselector'/>
            <p>Last of us </p>
           <p>₹ 2,999</p>
            </button>
          </div>
          
      </div>
      <div className='row'>{/*games in column above the footer for third row*/}
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={spiderman2} className='imageselector'/> 
            <p>Spider Man 2</p>
            <p>₹ 3,999</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={sleepingdogs} className='imageselector'/>
            <p>Sleeping Dogs</p>
            <p>₹ 1,099</p>
            </button>
          </div>
          <div className='gamepagehome centercolumn'>
            <button className='buttonselector textwhite gamepagehomebutton'>
            <img src={redr2} className='imageselector'/>
            <p>Red Redemption 2</p>
           <p>₹ 3,999</p>
            </button>
          </div>
          
      </div>
      </div>
    </div>

    </>
  )
}

export default Content