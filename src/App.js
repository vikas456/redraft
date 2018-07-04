import React, { Component } from 'react';
import './App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: []
    }
    this.getStats = this.getStats.bind(this);
  }

  getStats(event) {
    this.setState({stats: []});
    fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017', {
      method: 'GET'
    }).then((req) => {
      return req.json();
    }).then((myJson) => {
      // console.log(myJson);
      let arr = this.state.stats;
      let playerInfo = myJson.players;
      for(let i = 0; i < playerInfo.length; i++){
        if (playerInfo[i].esbid !== null) {
          arr.push({Name: playerInfo[i].name, Position: playerInfo[i].position, Points: playerInfo[i].seasonPts});
        }
      }
      this.setState({stats: arr});
      console.log(arr);
      return myJson;
    }).catch((e) => {
      console.log('error occured: ' + e);
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Redraft</h1>
        <button onClick={this.getStats}>Refresh</button>
        <div>
          <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
          <link rel="stylesheet" href="./dist/react-bootstrap-table.min.css"></link>
          <BootstrapTable data={this.state.stats}>
            <TableHeaderColumn dataField='Name' isKey={true} dataSort={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='Position' dataSort={true}>Position</TableHeaderColumn>
            <TableHeaderColumn dataField='Points' dataSort={true}>Points</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default App;
