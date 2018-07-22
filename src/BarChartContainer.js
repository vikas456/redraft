import React, { Component } from 'react';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BarChart } from 'react-easy-chart';
import './BarChartContainer.css';

class BarChartContainer extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.populateData = this.populateData.bind(this);
    this.includes = this.includes.bind(this);
  }

  includes(arr, elem) {
    for (let k = 0; k < arr.length; k++){
      if (arr[k].x.localeCompare(elem) === 0){
        return k;
      }
    }
    return -1;
  }

  populateData() {
    // this.setState({data: []});
    let result = this.state.data;
    let arr = this.props.info;
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let inc = this.includes(result, arr[i].team);
      if (inc !== -1) {
        result[inc].y += (arr[i].Pick - arr[i].Redraft);
      }
      else {
        if (arr[i].team !== ''){
          result.push({x: arr[i].team, y: (arr[i].Pick - arr[i].Redraft)});
        }
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i].y < 0) {
        // console.log(result[i].y);
        // console.log(parseFloat(result[i].y) * -1);
        // console.log(result[i].y);
        // eslint-disable-next-line
        let val = result[i].y;
        // console.log(val)
        let obj = {x: result[i].x, y: Math.abs(val), color: '#f00'};
        result.push(obj);
        console.log(val);
      }
    }
    // console.log(result);
    //this.setState({data: result});
  }

  render() {
    return (
      <div className="App">
        {this.populateData()}
        <h2>How teams stack up</h2>
        <p>Teams that have a red bar indicated that the value was the negative of what is shown on the bar chart. This bar chart api can't show negative numbers</p>
        <div id="barchart">
          <BarChart
            data={this.state.data}
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

