import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './counterApp';
import { FirstApp } from './FirstApp';
import './index.css';

// import { App } from './HelloWorldApp';

// ReactDOM.createRoot( document.getElementById('root') ).render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// );

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp  subtitle={123}/> */}
        <CounterApp value={1} />
    </React.StrictMode>
)