import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { ScatterplotChart } from 'react-easy-chart';

class Info extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h2 id="text3">How picks stack up</h2>
          <ScatterplotChart
            data={this.props.data}
            axes
            axisLabels={{x: 'Pick', y: 'Redraft'}}
            width={750}
            height={500}
          />
      </div>
    );
  }
}

export default Info;

