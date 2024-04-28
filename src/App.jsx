import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Feat from './Components/Feat/Feat';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Feat />
      <About />
      <Menu />
    </>
  );
}

export default App;
