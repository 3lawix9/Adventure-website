import React from 'react';
import { Button } from './Button';
import './Herosection.css';
import '../App.css';



function Herosection() {
  return (
    <div className='hero-container'>
        {/* <video  autoPlay loop muted  >
        <source src={video2} type="video/webm" />
        </video> */}
        <h1>ADVENTURE AWAITS</h1>

        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className= 'btns'
            buttonStyle= 'btn--outline'
            buttonSize= 'btn--large' >
                GET STARTED
            </Button>

            <Button className= 'btns'
            buttonStyle= 'btn--primary'
            buttonSize= 'btn--large' >
                WATCH TRAILER <i className="fas fa-play-circle"/>
            </Button>
        </div>
        
    </div>
  )
}

export default Herosection