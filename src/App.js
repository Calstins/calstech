import React from 'react';
import {
  Home,
  Navbar,
  DashboardPreview,
  Distribution,
  Analytics,
  Feature,
  Footer,
  ScrollToTop,
} from './Components';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
