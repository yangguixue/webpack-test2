import React, { Component } from 'react';

import 'antd/dist/antd.css';

import '../css/app.css';

const style = {
  div: {
    color: 'red',
    textAlign: 'center',
  },
};

export default class App extends Component {
  static defaultProps = {

  }
  render() {
    return (
      <div style={style.div}>sssddddddd</div>
    );
  }
}
