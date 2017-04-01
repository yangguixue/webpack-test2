import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import app from './component/app';

render(
  <BrowserRouter>
    <Route path="/" component={app} />
  </BrowserRouter>,

  document.getElementById('root'),
);
