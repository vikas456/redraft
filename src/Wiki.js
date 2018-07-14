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
        <a href={this.props.link} target="_blank" id="wiki">click here for more info</a>
      </div>
    );
  }
}

export default Info;

