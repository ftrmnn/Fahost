// App.js
import React from 'react';
import './App.css';
import About from './components/About';
import Core from './components/Core';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Solusions from './components/Solusions';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-24"> 
        <Home />
        <About />
        <Core />
        <Solusions />
      </main>
    </div>
  );
}

export default App;
