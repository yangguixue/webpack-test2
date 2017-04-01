import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import 'antd/dist/antd.css';

import '../css/app.css';

const style = {
  div: {
    color: 'red',
    textAlign: 'center',
  },
};

@inject('app')
@observer
export default class App extends Component {
  static defaultProps = {

  }
  render() {
    console.log(this.props);
    return (
      <div style={style.div}>sssddddddd</div>
    );
  }
}
