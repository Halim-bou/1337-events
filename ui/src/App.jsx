import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componenets/Navbar.jsx';
import Footer from './Componenets/Footer.jsx';
import Hero from './Componenets/Hero.jsx'
import ListEvents from './Componenets/ListEvents.jsx';
import LatestEvent from './Componenets/LatestEvnt.jsx';
import Sponsors from './Componenets/Sponsors.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <div>
      <Header />
      <Hero />
      <div>
        <div>
          <p className='text-3xl px-10 relative -mt-52'>Upcoming Events</p>
        </div>
        <ListEvents />
      </div>
      <LatestEvent />
      <div>
        <div>
          <p className='text-3xl px-10 relative'>Blogs & Articles</p>
        </div>
        <ListEvents />
      </div>
      <Sponsors />
      <Footer />
      </div>
    </ Router>
  );
}

export default App
