import React from 'react';
import Banner from './component/Banner/Banner';
import Info from './component/Info/Info';
import './App.sass';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="app">
      <Banner />
      <Info />
    </div>
  );
}

export default App;
