import React, { Component } from 'react';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BarChart } from 'react-easy-chart';
import './BarChartContainer.css';

class BarChartContainer extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div id="barchart">
          <BarChart
            data={this.props.data}
            margin={{top: 50, right: 0, bottom: 30, left: 10}}
            axes
            axisLabels={{x: 'Teams', y: 'Pick Diff'}}
            width={1000}
            height={500}
          />
        </div>
     </div> 
    );
  }
}

export default BarChartContainer;

