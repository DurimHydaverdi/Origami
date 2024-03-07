import React from 'react'
import Hero from '../Components/Hero/Hero'
import PlayersSlide from '../Components/PlayersSlide/PlayersSlide'
import Achievements from '../Components/Achievements/Achievements'
import Services from '../Components/Services/Services'
import CooperateLetter from '../Components/CooperateLetter/CooperateLetter'

const Home = () => {
  return (
    <div>
        <Hero />
        <PlayersSlide />
        <Services />
        <Achievements />
        <CooperateLetter />
    </div>
  )
}

export default Home