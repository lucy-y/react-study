import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Headers from './component/Header';
import Side from './component/Side';
import Content from './component/Content';

import './common/Custom.css';

function App() {
  return (
    <div>
      <Headers/>
      <div className="flex">
        <BrowserRouter>
          <Side />
          <Content />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
