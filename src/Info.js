import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <p id="steal">{this.props.info.stealName} was the biggest steal with a diff of {this.props.info.stealDiff}</p>
        <p id="bust">{this.props.info.bustName} was the biggest bust with a diff of {this.props.info.bustDiff}</p>
      </div>
    );
  }
}

export default Info;

