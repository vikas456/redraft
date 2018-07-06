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
    this.includes = this.includes.bind(this);
  }

  includes(arr, elem) {
    for (let k = 0; k < arr.length; k++){
      if (arr[k].Name.localeCompare(elem) === 0){
        return k;
      }
    }
    return -1;
  }

  getStats(event) {
    this.setState({stats: []});
    let players2016 = ['Jared Goff', 'Carson Wentz', 'Joey Bosa', 'Ezekiel Elliott', 'Jalen Ramsey', 'Ronnie Stanley', 'DeForest Buckner', 'Jack Conklin', 'Leonard Floyd', 'Eli Apple',
    'Vernon Hargreaves', 'Sheldon Rankins', 'Laremy Tunsil', 'Karl Joseph', 'Corey Coleman', 'Taylor Decker', 'Keanu Neal', 'Ryan Kelly', '	Shaq Lawson', 'Darron Lee',
    'Will Fuller', 'Josh Doctson', 'Laquon Treadwell', 'William Jackson', 'Artie Burns', 'Paxton Lynch', 'Kenny Clark', 'Joshua Garnett', 'Robert Nkemdiche', '	Vernon Butler',
    'Germain Ifedi'];
    let arr = [];
    for (let year = 2016; year < 2018; year++){
      fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=' + year, {
        method: 'GET'
      }).then((req) => {
        return req.json();
      }).then((myJson) => {
        let playerInfo = myJson.players;
        for(let i = 0; i < playerInfo.length; i++){
          if (playerInfo[i].esbid !== null) {
            for (let j = 0; j < players2016.length; j++){
              if (players2016[j].localeCompare(playerInfo[i].name) === 0){
                let inc = this.includes(arr, playerInfo[i].name);
                if (inc !== -1){
                  arr[inc].Redraft += playerInfo[i].seasonPts;
                }
                else{
                  arr.push({Name: playerInfo[i].name, Pick: j + 1, Redraft: playerInfo[i].seasonPts});
                }
              }
            }
          }
        }
        //go through arr and check for players drafted in first or second round of 2016 draft
        arr.sort(((a, b) => b.Redraft - a.Redraft));
        for (let i = 0; i < arr.length; i++){
          arr[i].Redraft = i + 1;
        }
        this.setState({stats: arr});
        return myJson;
      }).catch((e) => {
        console.log('error occured: ' + e);
      });
    }
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
            <TableHeaderColumn dataField='Pick' dataSort={true}>Pick</TableHeaderColumn>
            <TableHeaderColumn dataField='Redraft' dataSort={true}>Redraft</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default App;
