import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componenets/Navbar.jsx';
import Footer from './Componenets/Footer.jsx';
import Hero from './Componenets/Hero.jsx'
import ListEvents from './Componenets/ListEvents.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <div>
      <Header />
      <Hero />
      <ListEvents />
      <Footer />
      </div>
    </ Router>
  );
}

export default App
