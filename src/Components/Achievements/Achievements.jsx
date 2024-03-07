import React from 'react'
import './Achievements.css'
import dunk from '../Assets/dunk.png'


const Achievements = () => {
  return (
    <div className='achievements'>
      <div className="achievements-left">
        <h1>Achievements</h1>
        <hr className='h'/>
      </div>
      <div className="achievements-right">
      <img src={dunk}  alt='Fire Basket'/>
        <p>
            • 2016-2017 The youngest agent to sign a player in the Balkan League by the age of 16.
                <hr className='hh'/>    
            • 2016-2017 The youngest agent to sign a player in Kosovo, Albania, North Macedonia, Mexico, Austria, Georgia, USA, Spain, Belgium, Mongolia, Montenegro, Portugal, Croatia, Bosnia, and Turkey.
                <hr className='hh'/>                    
            • 2018 The youngest agent to sign a basketabll player in ABA League.
                <hr className='hh'/>            
            • Youngest agent to sign a player in Euro-Cup.
                <hr className='hh'/>            
            • Youngest agent to sign a player in BSL Turkey.
                <hr className='hh'/>            
            • Youngest agent to sign a player in FIBA EUROPE CUP.
                <hr className='hh'/>            
            • Youngest agent to close 100+ deals by the age of 20.
        </p>
      </div>
    </div>
  )
}

export default Achievements
