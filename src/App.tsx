import React from 'react';

import Home from './pages/Home';

import Header from './components/Header';

import './App.css';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
