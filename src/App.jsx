// App.js
import React from 'react';
import './App.css';
import About from './components/About';
import Core from './components/Core';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Solusions from './components/Solusions';
import Pricing from './components/Pricing';
import Questions from './components/Questions';
import Trusted from './components/Trusted';
import Sale from './components/Sale';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-24"> 
        <Home />
        <About />
        <Core />
        <Solusions />
        <Pricing />
        <Questions />
        <Trusted />
        <Sale />
        <Footer />
      </main>
    </div>
  );
}

export default App;
