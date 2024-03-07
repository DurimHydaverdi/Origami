import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Category from './Pages/Category';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Clients from './Pages/Clients';
import Agent from './Pages/Agent';
import About from './Pages/About';
import basketball_banner from './Components/Assets/basketball-banner.png'
import agent_banner from './Components/Assets/agent_banner.png'
import about_banner from './Components/Assets/about_banner.png'
import PlayersPage from './Pages/PlayersPage';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount (page load)
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Clients clients="players" banner={basketball_banner} />} />
          <Route path='/agent' element={<Agent banner={agent_banner} />} />
          <Route path='/about' element={<About banner={about_banner} />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/playerspage/:playerspageId' element={<PlayersPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
