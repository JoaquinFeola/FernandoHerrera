import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot( document.getElementById('root') );

root.render(
  <BrowserRouter>
    {/* <React.StrictMode>  */}
      <MainApp/>
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
