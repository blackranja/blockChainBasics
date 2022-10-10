import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
     <Welcome/>
     <Services/>
    </div>
    
  </div>
  )
}

export default App