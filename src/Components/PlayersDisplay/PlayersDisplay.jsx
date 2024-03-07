import React from 'react'
import './PlayersDisplay.css'

const PlayersDisplay = (props) => {
    const { playerspage } = props;
    

  return (
    <div className='playersdisplay'>
      <div className="playersdisplay-left">
        <div className="playersdisplay-img-list">
            <img src={playerspage.image} alt="" />
            <img src={playerspage.image} alt="" />
            <img src={playerspage.image} alt="" />
            <img src={playerspage.image} alt="" />
        </div>
        <div className="playersdisplay-img">
            <img className='playersdisplay-main-img' src={playerspage.image} alt="" />
        </div>
      </div>
      <div className="playersdisplay-right">
        <h1>{playerspage.name}</h1>
        <div className="playersdisplay-right-p">
            <div className="playersdisplay-right-contry">HOMETOWN: {playerspage.contry_state}</div>
            <div className="playersdisplay-right-position">POSITION: {playerspage.position}</div>
            <div className="playerdisplay-right-team">TEAM: {playerspage.team}</div>
        </div>
        <div className="playersdisplay-right-drescription">
        A Professional Basketball Player is an athlete who is trained and skilled in the sport of basketball. They are typically employed by a basketball team and are responsible for playing in games, practicing to improve their skills, and maintaining physical fitness.
        </div>
      </div>
    </div>
  )
}

export default PlayersDisplay
