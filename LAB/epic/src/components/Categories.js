import React from 'react'
import Header from './Header'
import './Categories.css'
import {useParams} from 'react-router-dom'
const Categories = () => {
    let {email}=useParams();
    console.log(email);
  return (
    <>
    
    <Header em={email}/>
    <div className='body center'>
        <div className='categories centercolumn'>
            <div className='row1 center'>
                <div className='action center'>
                    <p>Action</p>

                </div>
                <div className='adventure center'>
                    <p>Adventure</p>

                </div>

            </div>
             <div className='row2 center'>
                <div className='puzzle center'>
                    <p>Puzzle</p>

                </div>
                <div className='roleplay center'>
                    <p>Role Play</p>

                </div>

            </div>
             <div className='row1 center'>
                <div className='platform center'>
                    <p>Platform</p>

                </div>
                <div className='sports center'>
                    <p>Sports</p>

                </div>

            </div>
        

        </div>
    </div>
    </>
  )
}

export default Categories