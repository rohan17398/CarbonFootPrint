import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { MainProvider } from './context/CarbonFootprintContext';

ReactDOM.render(
    <MainProvider>
      <App />
    </MainProvider>,
  document.getElementById('root')
);
