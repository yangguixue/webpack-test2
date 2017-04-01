import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';

import app from './component/app';
import store from './store';

render(
  <Provider {...store}>
    <BrowserRouter>
      <Route path="/" component={app} />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
);
