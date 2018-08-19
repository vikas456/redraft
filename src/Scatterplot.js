import React, { Component } from 'react';
import './Scatterplot.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { ScatterplotChart } from 'react-easy-chart';

class Scatterplot extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
        showToolTip: false,
        top: '0px',
        left: '0px',
        y: 0,
        x: 0,
    };
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.position1 = this.position1.bind(this);
    this.position2 = this.position2.bind(this);
  }

  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x});
      //console.log(d.x + ' ' + d.y);
  }
  
  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`});
    }
  }

  mouseOutHandler() {
    this.setState({showToolTip: false});
  }

  position1() {
    let query = 'Pick: ' + this.state.x;
    return ({__html: query});
  }

  position2() {
    let query = 'Redraft: ' + this.state.y;
    return ({__html: query});
  }

  position3() {
    let name = '';
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].x === this.state.x) {
        name = this.props.data[i].type;
        console.log(this.props.data[i]);
        break;
      }
    }
    let query = 'Player name: ' + name;
    return ({__html: query});
  }

  render() {
    return (
      <div className="App">
        <div  id="heading">
            <h2>How picks stack up</h2>
        </div>
        <div>
            <div id="scatterplot">
                <ScatterplotChart
                    data={this.props.data}
                    axes
                    axisLabels={{x: 'Pick', y: 'Redraft'}}
                    verticalGrid
                    width={1000}
                    height={500}
                    dotRadius={4}
                    mouseOverHandler={this.mouseOverHandler}
                    mouseOutHandler={this.mouseOutHandler}
                    mouseMoveHandler={this.mouseMoveHandler}
                    margin={{top: 10, right: 10, bottom: 30, left: 40}}
                />
            </div>
            <div id="location" dangerouslySetInnerHTML={this.position3()}></div>
            <div id="location" dangerouslySetInnerHTML={this.position1()}></div>
            <div id="location" dangerouslySetInnerHTML={this.position2()}></div>
        </div>
      </div>
    );
  }
}

export default Scatterplot;

