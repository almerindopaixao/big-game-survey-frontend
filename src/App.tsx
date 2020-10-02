import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App(): JSX.Element {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} className="toast-container " />
    </>
  );
}

export default App;
