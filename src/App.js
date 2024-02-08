import React from 'react';
import { Home, Navbar } from './Components';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
