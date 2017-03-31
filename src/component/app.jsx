import React, { Component, PropTypes } from 'react';
import R from 'ramda';
import { Tree } from 'antd';

import 'antd/dist/antd.css';

import '../css/app.css';

const TreeNode = Tree.TreeNode;

const styles = {
  box: {
    paddingLeft: 20,
  },
  add: {
    position: 'absolute',
    right: 10,
    top: 40,
    zIndex: 1500,
  },
  font: {
    fontSize: '14px',
  },
};
export default class App extends Component {

  static propTypes = {
    lectures: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    lectures: [{
      _id: '0',
      name: '我是topic1',
    }, {
      _id: '1',
      name: '我是parts0-1',
      parentId: '0',
    }, {
      _id: '2',
      name: '我是parts0-2',
      parentId: '0',
    }, {
      _id: '3',
      name: '我是topic2',
    }, {
      _id: '4',
      name: '我是parts1-1',
      parentId: '3',
    }, {
      _id: '5',
      name: '我是parts1-2',
      parentId: '3',
    }],
  }

  render() {
    const lectures = this.props.lectures;
    const isTopic = t => t.parentId === undefined;
    const topic = R.filter(isTopic, lectures) || [];
    const part = item => R.filter(p => p.parentId === item._id, lectures) || [];
    const addPart = item => (
      <span>
        <span style={styles.font}>{item.name}</span>
        <span
          style={{ color: '#108ee9', fontSize: 14 }}
          onClick={event => this.handleAddPart(event, item)}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;添加part
        </span>
      </span>
    );

    return (
      <Tree
        className="myCls"
        showLine
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        { topic.map(item => (
          <TreeNode title={addPart(item)} key={item._id}>
            {
              part(item).map(p => (
                <TreeNode
                  title={<span style={styles.font}>{p.name}</span>}
                  key={p._id}
                />
              ))
            }
            <TreeNode
              title="+"
              key={`${item._id}0`}
            />
          </TreeNode>
        ))}
      </Tree>
    );
  }
}
