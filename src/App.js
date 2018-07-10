import React, { Component } from 'react';
import './App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      players: []
    }
    this.getStats2015 = this.getStats2015.bind(this);
    this.getStats2016 = this.getStats2016.bind(this);
    this.getStats2017 = this.getStats2017.bind(this);
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

  getStats2015() {
    let players = [ 
    'Jameis Winston', 
'Marcus Mariota',
'Dante Fowler', 
'Amari Cooper', 
'Brandon Scherff', 
'Leonard Williams', 
'Kevin White', 
'Vic Beasley', 
'Ereck Flowers', 
'Todd Gurley', 
'Trae Waynes', 
'Danny Shelton', 
'Andrus Peat', 
'DeVante Parker', 
'Melvin Gordon',
'Kevin Johnson', 
'Arik Armstead', 
'Marcus Peters', 
'Cameron Erving', 
'Nelson Agholor', 
'Cedric Ogbuehi', 
'Bud Dupree', 
'Shane Ray', 
'D. J. Humphries', 
'Shaq Thompson', 
'Breshad Perriman', 
'Byron Jones', 
'Laken Tomlinson', 
'Phillip Dorsett', 
'Damarious Randall', 
'Stephone Anthony', 
'Malcom Brown' ];
    this.setState({players: players})
    this.getStats(players, 2015);
  }

  getStats2016() {
    let players= [ 'Jared Goff', 'Carson Wentz', 'Joey Bosa', 'Ezekiel Elliott', 'Jalen Ramsey', 'Ronnie Stanley', 'DeForest Buckner', 'Jack Conklin', 'Leonard Floyd', 'Eli Apple', 'Vernon Hargreaves', 'Sheldon Rankins', 'Laremy Tunsil', 'Karl Joseph', 'Corey Coleman', 'Taylor Decker', 'Keanu Neal', 'Ryan Kelly', 'Shaq Lawson', 'Darron Lee', 'Will Fuller', 'Josh Doctson', 'Laquon Treadwell', 'William Jackson III', 'Artie Burns', 'Paxton Lynch', 'Kenny Clark', 'Joshua Garnett', 'Robert Nkemdiche', 'Vernon Butler', 'Germain Ifedi', 'Emmanuel Ogbah', 'Kevin Dodd', 'Jaylon Smith', 'Hunter Henry', 'Myles Jack', 'Chris Jones', 'Xavien Howard', 'Noah Spence', 'Sterling Shepard', 'Reggie Ragland', 'Kamalei Correa', 'Austin Johnson', 'Jihad Ward', 'Derrick Henry', 'A\'Shawn Robinson', 'Michael Thomas', 'Jason Spriggs', 'Jarran Reed', 'Nick Martin', 'Christian Hackenberg', 'Deion Jones', 'Su\'a Cravens', 'Mackensie Alexander', 'Tyler Boyd', 'Cody Whitehair', 'T. J. Green', 'Sean Davis', 'Roberto Aguayo', 'Cyrus Jones', 'Vonn Bell', 'James Bradberry', 'Adam Gotsis', 'Kevin Byard', 'Carl Nassib', 'Max Tuerk', 'Maliek Collins', 'Will Redmond', 'Yannick Ngakoue', 'Bronson Kaufusi', 'Darian Thompson', 'Jonathan Bullard', 'Kenyan Drake', 'KeiVarae Russell', 'Shilique Calhoun', 'Shon Coleman', 'Daryl Worley', 'Joe Thuney', 'Isaac Seumalo', 'Adolphus Washington', 'Austin Hooper', 'Le\'Raven Clark', 'Jordan Jenkins', 'Kendall Fuller', 'Braxton Miller', 'Leonte Carroo', 'Nick Vigil', 'Kyler Fackrell', 'Javon Hargrave', 'C. J. Prosise', 'Jacoby Brissett', 'Brandon Williams', 'Cody Kessler', 'Nick Vannett', 'Graham Glasgow', 'Vincent Valentine', 'Rees Odhiambo', 'Justin Simmons', 'Joe Schobert', 'Connor Cook', 'Charles Tapper', 'Joshua Perry', 'Sheldon Day', 'Tavon Young', 'Parker Ehinger', 'Eric Murray', 'Chris Moore', 'Ryan Smith', 'B. J. Goodson', 'Tyler Higbee', 'Miles Killebrew', 'Malcolm Mitchell', 'Nick Kwiatkoski', 'Ricardo Louis', 'De\'Vondre Campbell', 'Hassan Ridgeway', 'Pharoh Cooper', 'Juston Burris', 'Tyler Ervin', 'David Onyemata', 'Willie Beavers', 'Andrew Billings', 'Jerald Hawkins', 'Deon Bush', 'Antonio Morrison', 'Demarcus Robinson', 'Deiondre\' Hall', 'Evan Boehm', 'Derrick Kindred', 'Alex Lewis', 'Blake Martinez', 'Willie Henry', 'Rashard Robinson', 'Kenneth Dixon', 'Dak Prescott', 'Devontae Booker', 'Dean Lowry', 'Seth DeValve', 'Cardale Jones', 'Tajae Sharpe', 'Zack Sanchez', 'Ronald Blair', 'DeAndré Washington', 'ConnorMcGovern', 'John Theus', 'Matt Judon', 'Quinton Jefferson', 'Caleb Benenoch', 'Paul Perkins', 'Jordan Howard', 'Joe Dahl', 'Matt Ioannidis', 'Wendell Smallwood', 'Jordan Payton', 'Joe Haeg', 'Jonathan Williams', 'LeShaun Sims', 'Brandon Shell', 'K. J. Dillon', 'Kentrell Brothers', 'Christian Westerman', 'Kevin Hogan', 'Trevor Davis', 'Halapoulivaati Vaitai', 'Tyreek Hill', 'D. J. Reader', 'Marqui Christian', 'Spencer Drango', 'Antwione Williams', 'Cole Toner', 'Alex Collins', 'Rashard Higgins', 'Trey Caldwell', 'Fahn Cooper', 'Jatavis Brown', 'Andy Janovich', 'Temarrick Hemingway', 'D. J. White', 'Drew Kaser', 'Moritz Böhringer', 'Tyrone Holmes', 'Keenan Reynolds', 'Devante Bond', 'Jerell Adams', 'DeAndre Houston-Carson', 'Jakeem Grant', 'Nate Sudfeld', 'David Morgan II', 'Anthony Brown', 'Josh Forrest', 'Jake Rudock', 'Kolby Listenbee', 'Sebastian Tretola', 'Cory James', 'Wes Schweitzer', 'Blake Countess', 'Dan Vitale', 'Derek Watt', 'Cody Core', 'Kyle Murphy', 'Brandon Allen', 'Anthony Zettel', 'Dadi Nicolas', 'Jordan Lucas', 'Harlan Miller', 'Mike Thomas', 'Jeff Driskel', 'Kamu Grugier-Hill', 'Maurice Canady', 'Jimmy Landes', 'Kelvin Taylor', 'Kavon Frazier', 'Aaron Burbridge', 'Elandon Roberts', 'Joey Hunt', 'Darius Jackson', 'Rico Gathers', 'Kevon Seymour', 'Will Parks', 'Travis Feeney', 'Ted Karras', 'Aaron Wallace', 'Brandon Doughty', 'Donavon Clark', 'Devin Lucien', 'Jonathan Woodard', 'Stephen Weatherly', 'Riley Dixon', 'Demarcus Ayers', 'Daniel Braverman', 'Thomas Duarte', 'Steven Daniels', 'Jalen Mills', 'Vadal Alexander', 'Lachlan Edwards', 'Dwayne Washington', 'Daniel Lasco', 'Devin Fuller', 'Trevor Bates', 'Alex McCalister', 'Charone Peake', 'Keith Marshall', 'Kenny Lawler', 'Jayron Kearse', 'Clayton Fejedelem', 'Tyler Matakevich', 'Zac Brooks', 'Austin Blythe', 'Prince Charles Iworah', 'Scooby Wright', 'Joe Walker', 'Beau Sandland', 'Kalan Reed', ];
    this.setState({players: players})
    this.getStats(players, 2016);
  }

  getStats2017() {
    let players = [
      'Myles Garrett', 
'Mitchell Trubisky', 
'Solomon Thomas', 
'Leonard Fournette', 
'Corey Davis', 
'Jamal Adams', 
'Mike Williams', 
'Christian McCaffrey', 
'John Ross', 
'Patrick Mahomes', 
'Marshon Lattimore',
'Deshaun Watson', 
'Haason Reddick', 
'Derek Barnett', 
'Malik Hooker', 
'Marlon Humphrey', 
'Jonathan Allen', 
'Adoree\' Jackson', 
'O. J. Howard', 
'Garett Bolles', 
'Jarrad Davis', 
'Charles Harris', 
'Evan Engram', 
'Gareon Conley', 
'Jabrill Peppers', 
'Takkarist McKinley', 
'Tre\'Davious White', 
'Taco Charlton', 
'David Njoku', 
'T. J. Watt', 
'Reuben Foster', 
'Ryan Ramczyk', 
    ];
    this.setState({players: players})
    this.getStats(players, 2017);
  }

  getStats(playersArr, time) {
    this.setState({stats: []});
    let arr = [];
    for (let year = time; year < 2018; year++){
      fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=' + year, {
        method: 'GET'
      }).then((req) => {
        return req.json();
      }).then((myJson) => {
        let playerInfo = myJson.players;
        for(let i = 0; i < playerInfo.length; i++){
          if (playerInfo[i].esbid !== null) {
            for (let j = 0; j < playersArr.length; j++){
              if (playersArr[j].localeCompare(playerInfo[i].name) === 0){
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
        <div>
          <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
          <link rel="stylesheet" href="./dist/react-bootstrap-table.min.css"></link>
          <Navbar>
            <Nav>
              <NavItem eventkey={1} onClick={this.getStats2015}>2015</NavItem>
              <NavItem eventkey={2} onClick={this.getStats2016}>2016</NavItem>
              <NavItem eventkey={3} onClick={this.getStats2017}>2017</NavItem>
            </Nav>
          </Navbar>
          <div id="resultTable">
            <BootstrapTable data={this.state.stats}>
              <TableHeaderColumn dataField='Name' isKey={true} dataSort={true}>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='Pick' dataSort={true}>Pick</TableHeaderColumn>
              <TableHeaderColumn dataField='Redraft' dataSort={true}>Redraft</TableHeaderColumn>
            </BootstrapTable>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
