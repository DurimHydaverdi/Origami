import React from 'react'
import './Players.css'
import { Link } from 'react-router-dom'

const Players = (props) => {
  return (
    <div className='players'>
            <Link to={`/playerspage/${props.id}`}><img src={props.image} alt=''/></Link>
            <p>{props.name}</p>
        <div className="players-info">
            <div className='contry-city'>
                {props.contry_city}
            </div>
            <div className="position">
                {props.position}
            </div>
        </div>
    </div>
  )
}

export default Players