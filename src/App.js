import React, { Component } from 'react';
import './App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      players: [],
      value: '',
      extraStats: [],
      link: '',
      stealName: '',
      stealDiff: '',
      bustName: '',
      bustDiff: ''
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
    let players = [ 'Jameis Winston', 'Marcus Mariota', 'Dante Fowler', 'Amari Cooper', 'Brandon Scherff', 'Leonard Williams', 'Kevin White', 'Vic Beasley', 'Ereck Flowers', 'Todd Gurley', 'Trae Waynes', 'Danny Shelton', 'Andrus Peat', 'DeVante Parker', 'Melvin Gordon', 'Kevin Johnson', 'Arik Armstead', 'Marcus Peters', 'Cameron Erving', 'Nelson Agholor', 'Cedric Ogbuehi', 'Bud Dupree', 'Shane Ray', 'D. J. Humphries', 'Shaq Thompson', 'Breshad Perriman', 'Byron Jones', 'Laken Tomlinson', 'Phillip Dorsett', 'Damarious Randall', 'Stephone Anthony', 'Malcom Brown', 'Landon Collins', 'Donovan Smith', 'Mario Edwards', 'T. J. Yeldon', 'Devin Smith', 'Preston Smith', 'Eddie Goldman', 'Dorial Green-Beckham', 'Devin Funchess', 'Jalen Collins', 'Benardrick McKinney', 'Hau\'oli Kikaha', 'Eric Kendricks', 'Jaquiski Tartt', 'Eric Rowe', 'Denzel Perryman', 'Mitch Morse', 'Ronald Darby', 'Nate Orchard', 'Jordan Phillips', 'Jake Fisher', 'Ameer Abdullah', 'Maxx Williams', 'Senquez Golson', 'Rob Havenstein', 'Markus Golden', 'Ty Sambrailo', 'Randy Gregory', 'Ali Marpet', 'Quinten Rollins', 'Frank Clark', 'Jordan Richards', 'D\'Joun Smith', 'Jeremiah Poutasi','A. J. Cann', 'Clive Walford', 'Tyler Lockett', 'Jaelen Strong', 'Hroniss Grasu', 'Jamon Brown', 'Tevin Coleman', 'Owa Odighizuwa', 'Garrett Grayson', 'Chris Conley', 'Duke Johnson', 'P. J. Williams', 'Eli Harold', 'Alex Carter', 'John Miller', 'Lorenzo Mauldin', 'Craig Mager', 'Jordan Hicks', 'Tyler Kroft', 'David Johnson', 'Sammie Coates', 'Danielle Hunter', 'Sean Mannion', 'Carl Davis', 'Chaz Green', 'Jeff Heuerman', 'Henry Anderson', 'Ty Montgomery', 'Matt Jones', 'Xavier Cooper', 'Geneo Grissom', 'Steven Nelson', 'Paul Dawson', 'Angelo Blackson', 'Trey Flowers', 'Daryl Williams', 'Bryce Petty', 'James Sample', 'Jamison Crowder', 'Jeremy Langford', 'Justin Hardy', 'Jalston Fowler', 'Clayton Geathers', 'T. J. Clemmings', 'Tre\' Jackson', 'Arie Kouandjio', 'Gabe Wright', 'Jamil Douglas', 'Ibraheim Campbell', 'Rodney Gunter', 'Blake Bell', 'Ramik Wilson', 'Andrew Donnal', 'Josh Shaw', 'Doran Grant', 'Za\'Darius Smith', 'Vince Mayle', 'Kwon Alexander', 'Javorius Allen', 'Mike Davis', 'Damien Wilson', 'Jon Feliciano', 'Jake Ryan', 'Terry Poole', 'Shaq Mason', 'DeAndre Smelter', 'Max Garcia', 'Mark Glowinski', 'Marcus Hardison', 'Tray Walker', 'Grady Jarrett', 'David Cobb', 'Rashad Greene', 'Ben Heeney', 'Martrell Spaight', 'Adrian Amos', 'MyCole Pruitt', 'Mykkele Thompson', 'Bobby McCain', 'Stefon Diggs', 'Brett Hundley', 'Davis Tull', 'Jay Ajayi', 'Cedric Thompson', 'David Parry', 'Jarvis Harrison', 'Kyle Emanuel', 'Tyeler Davison', 'Karlos Williams', 'Tony Lippett', 'C. J. Uzomah', 'Shaquille Riddick', 'J. J. Nelson', 'Jesse James', 'Neiron Ball', 'Kenny Bell', 'Ryan Russell', 'Lorenzo Doss', 'Bradley Pinion', 'Joe Cardona', 'Damian Swann', 'Michael Burton', 'David Mayo', 'Tye Smith', 'Nick Boyle', 'D. J. Alexander', 'James O\'Shaughnessy', 'Cameron Artis-Payne', 'Keith Mumphery', 'Robert Myers', 'Deiontrez Mount', 'Matthew Wells', 'Max Valles', 'Michael Bennett', 'Kyshoen Jarrett', 'Tevin Mitchel', 'Tayo Fabuluje', 'KaelinClay', 'Tyrus Thompson', 'Geremy Davis', 'Evan Spencer', 'Tony Steward', 'Charles Gaines', 'Ian Silberman', 'JaCorey Shepherd', 'Darius Philon', 'B. J. Dubose', 'Nick O\'Leary', 'Malcolm Johnson', 'Randall Evans', 'Derron Smith', 'Randall Telfer', 'Leterrius Walton', 'Quandre Diggs', 'Bud Sasser', 'A. J. Derby', 'Darius Kilgo', 'Darren Waller', 'Josh Robinson', 'Aaron Ripkowski', 'Amarlo Herrera', 'Andy Gallik', 'Obum Gwacham', 'Christian Ringo', 'Reshard Cliett', 'Anthony Chickillo','Kennard Backman', 'Kristjan Sokoli', 'Cody Wichmann', 'Christian Covington', 'Rakeem Nunez-Roches', 'Anthony Morris', 'Hayes Pullard', 'Neal Sterling', 'Andre Debose', 'Austin Reiter', 'Deon Simon', 'Bryce Hager', 'Jake Rodgers', 'Bobby Hart', 'Martin Ifedi', 'Austin Shepherd', 'Ben Koyack', 'Marcus Murphy', 'Joey Iosefa','Edmond Robinson', 'Da\'Ron Brown', 'Dezmin Lewis', 'Kenny Hilliard', 'Mark Nzeocha', 'Brian Mihalik', 'Mario Alford', 'Gerod Holliman', 'Corey Robinson', 'Ifo Ekpre-Olomu', 'Dexter McDonald', 'Laurence Gibson', 'Trenton Brown', 'Tre McBride', 'Geoff Swaim', 'Darryl Roberts', 'Ryan Murphy', 'Akeem King', 'Trevor Siemian', 'Taurean Nixon', 'Josh Furman', 'Xzavier Dickson', 'Rory Anderson', 'Denzelle Good', 'Gerald Christian', ];
    this.setState({players: players})
    this.getStats(players, 2015);
  }

  getStats2016() {
    let players= [ 'Jared Goff', 'Carson Wentz', 'Joey Bosa', 'Ezekiel Elliott', 'Jalen Ramsey', 'Ronnie Stanley', 'DeForest Buckner', 'Jack Conklin', 'Leonard Floyd', 'Eli Apple', 'Vernon Hargreaves', 'Sheldon Rankins', 'Laremy Tunsil', 'Karl Joseph', 'Corey Coleman', 'Taylor Decker', 'Keanu Neal', 'Ryan Kelly', 'Shaq Lawson', 'Darron Lee', 'Will Fuller', 'Josh Doctson', 'Laquon Treadwell', 'William Jackson III', 'Artie Burns', 'Paxton Lynch', 'Kenny Clark', 'Joshua Garnett', 'Robert Nkemdiche', 'Vernon Butler', 'Germain Ifedi', 'Emmanuel Ogbah', 'Kevin Dodd', 'Jaylon Smith', 'Hunter Henry', 'Myles Jack', 'Chris Jones', 'Xavien Howard', 'Noah Spence', 'Sterling Shepard', 'Reggie Ragland', 'Kamalei Correa', 'Austin Johnson', 'Jihad Ward', 'Derrick Henry', 'A\'Shawn Robinson', 'Michael Thomas', 'Jason Spriggs', 'Jarran Reed', 'Nick Martin', 'Christian Hackenberg', 'Deion Jones', 'Su\'a Cravens', 'Mackensie Alexander', 'Tyler Boyd', 'Cody Whitehair', 'T. J. Green', 'Sean Davis', 'Roberto Aguayo', 'Cyrus Jones', 'Vonn Bell', 'James Bradberry', 'Adam Gotsis', 'Kevin Byard', 'Carl Nassib', 'Max Tuerk', 'Maliek Collins', 'Will Redmond', 'Yannick Ngakoue', 'Bronson Kaufusi', 'Darian Thompson', 'Jonathan Bullard', 'Kenyan Drake', 'KeiVarae Russell', 'Shilique Calhoun', 'Shon Coleman', 'Daryl Worley', 'Joe Thuney', 'Isaac Seumalo', 'Adolphus Washington', 'Austin Hooper', 'Le\'Raven Clark', 'Jordan Jenkins', 'Kendall Fuller', 'Braxton Miller', 'Leonte Carroo', 'Nick Vigil', 'Kyler Fackrell', 'Javon Hargrave', 'C. J. Prosise', 'Jacoby Brissett', 'Brandon Williams', 'Cody Kessler', 'Nick Vannett', 'Graham Glasgow', 'Vincent Valentine', 'Rees Odhiambo', 'Justin Simmons', 'Joe Schobert', 'Connor Cook', 'Charles Tapper', 'Joshua Perry', 'Sheldon Day', 'Tavon Young', 'Parker Ehinger', 'Eric Murray', 'Chris Moore', 'Ryan Smith', 'B. J. Goodson', 'Tyler Higbee', 'Miles Killebrew', 'Malcolm Mitchell', 'Nick Kwiatkoski', 'Ricardo Louis', 'De\'Vondre Campbell', 'Hassan Ridgeway', 'Pharoh Cooper', 'Juston Burris', 'Tyler Ervin', 'David Onyemata', 'Willie Beavers', 'Andrew Billings', 'Jerald Hawkins', 'Deon Bush', 'Antonio Morrison', 'Demarcus Robinson', 'Deiondre\' Hall', 'Evan Boehm', 'Derrick Kindred', 'Alex Lewis', 'Blake Martinez', 'Willie Henry', 'Rashard Robinson', 'Kenneth Dixon', 'Dak Prescott', 'Devontae Booker', 'Dean Lowry', 'Seth DeValve', 'Cardale Jones', 'Tajae Sharpe', 'Zack Sanchez', 'Ronald Blair', 'DeAndré Washington', 'ConnorMcGovern', 'John Theus', 'Matt Judon', 'Quinton Jefferson', 'Caleb Benenoch', 'Paul Perkins', 'Jordan Howard', 'Joe Dahl', 'Matt Ioannidis', 'Wendell Smallwood', 'Jordan Payton', 'Joe Haeg', 'Jonathan Williams', 'LeShaun Sims', 'Brandon Shell', 'K. J. Dillon', 'Kentrell Brothers', 'Christian Westerman', 'Kevin Hogan', 'Trevor Davis', 'Halapoulivaati Vaitai', 'Tyreek Hill', 'D. J. Reader', 'Marqui Christian', 'Spencer Drango', 'Antwione Williams', 'Cole Toner', 'Alex Collins', 'Rashard Higgins', 'Trey Caldwell', 'Fahn Cooper', 'Jatavis Brown', 'Andy Janovich', 'Temarrick Hemingway', 'D. J. White', 'Drew Kaser', 'Moritz Böhringer', 'Tyrone Holmes', 'Keenan Reynolds', 'Devante Bond', 'Jerell Adams', 'DeAndre Houston-Carson', 'Jakeem Grant', 'Nate Sudfeld', 'David Morgan II', 'Anthony Brown', 'Josh Forrest', 'Jake Rudock', 'Kolby Listenbee', 'Sebastian Tretola', 'Cory James', 'Wes Schweitzer', 'Blake Countess', 'Dan Vitale', 'Derek Watt', 'Cody Core', 'Kyle Murphy', 'Brandon Allen', 'Anthony Zettel', 'Dadi Nicolas', 'Jordan Lucas', 'Harlan Miller', 'Mike Thomas', 'Jeff Driskel', 'Kamu Grugier-Hill', 'Maurice Canady', 'Jimmy Landes', 'Kelvin Taylor', 'Kavon Frazier', 'Aaron Burbridge', 'Elandon Roberts', 'Joey Hunt', 'Darius Jackson', 'Rico Gathers', 'Kevon Seymour', 'Will Parks', 'Travis Feeney', 'Ted Karras', 'Aaron Wallace', 'Brandon Doughty', 'Donavon Clark', 'Devin Lucien', 'Jonathan Woodard', 'Stephen Weatherly', 'Riley Dixon', 'Demarcus Ayers', 'Daniel Braverman', 'Thomas Duarte', 'Steven Daniels', 'Jalen Mills', 'Vadal Alexander', 'Lachlan Edwards', 'Dwayne Washington', 'Daniel Lasco', 'Devin Fuller', 'Trevor Bates', 'Alex McCalister', 'Charone Peake', 'Keith Marshall', 'Kenny Lawler', 'Jayron Kearse', 'Clayton Fejedelem', 'Tyler Matakevich', 'Zac Brooks', 'Austin Blythe', 'Prince Charles Iworah', 'Scooby Wright', 'Joe Walker', 'Beau Sandland', 'Kalan Reed', ];
    this.setState({players: players})
    this.getStats(players, 2016);
  }

  getStats2017() {
    let players = [ 'Myles Garrett', 'Mitchell Trubisky', 'Solomon Thomas', 'Leonard Fournette', 'Corey Davis', 'Jamal Adams', 'Mike Williams', 'Christian McCaffrey', 'John Ross', 'Patrick Mahomes II', 'Marshon Lattimore', 'Deshaun Watson', 'Haason Reddick', 'Derek Barnett', 'Malik Hooker', 'Marlon Humphrey', 'Jonathan Allen', 'Adoree\' Jackson', 'O. J. Howard', 'Garett Bolles', 'Jarrad Davis', 'Charles Harris', 'Evan Engram', 'Gareon Conley', 'Jabrill Peppers', 'Takkarist McKinley', 'Tre\'Davious White', 'Taco Charlton', 'David Njoku', 'T. J. Watt', 'Reuben Foster', 'Ryan Ramczyk', 'Kevin King', 'Cam Robinson', 'Malik McDowell', 'Budda Baker', 'Zay Jones', 'Forrest Lamp', 'Marcus Maye', 'Curtis Samuel', 'Dalvin Cook', 'Marcus Williams', 'Sidney Jones', 'Gerald Everett', 'Adam Shaheen', 'Quincy Wilson', 'Tyus Bowser', 'JoeMixon', 'Ryan Anderson', 'Justin Evans', 'DeMarcus Walker', 'DeShone Kizer', 'Teez Tabor', 'Raekwon McMillan', 'Dalvin Tomlinson', 'Obi Melifonwu', 'Zach Cunningham', 'Ethan Pocic', 'Tanoh Kpassagnon', 'Chidobe Awuzie', 'Josh Jones', 'JuJu Smith-Schuster', 'Dion Dawkins', 'Taylor Moton', 'Larry Ogunjobi', 'Ahkello Witherspoon', 'Alvin Kamara', 'Dawuane Smoot', 'Cooper Kupp', 'Pat Elflein', 'Dan Feeney', 'Taywan Taylor', 'Jordan Willis', 'Chris Wormley', 'Duke Riley', 'Alex Anzalone','Daeshon Hall', 'Tim Williams', 'ArDarius Stewart', 'Tarell Basham', 'Fabian Moreau', 'Carlos Henderson', 'Derek Rivers', 'Chris Godwin', 'Antonio Garcia', 'Kareem Hunt', 'Davis Webb', 'Eddie Vanderdoes', 'D\'Onta Foreman', 'Shaquill Griffin', 'John Johnson', 'Jourdan Lewis', 'Montravius Adams', 'Cameron Sutton', 'Delano Hill', 'Kenny Golladay', 'Cordrea Tankersley', 'Chad Williams', 'Rasul Douglas', 'Jonnu Smith', 'Brendan Langley', 'Nazair Jones', 'Trey Hendrickson', 'C. J. Beathard', 'James Conner', 'Amara Darboh', 'Kendell Beckwith', 'Vince Biegel', 'Jaleel Johnson', 'Dede Westbrook', 'Tedric Thompson', 'Eddie Jackson', 'Rayshawn Jenkins', 'Samaje Perine', 'Dorian Johnson', 'Carl Lawson', 'Josh Reynolds', 'Mack Hollins', 'Tarik Cohen', 'Ben Gedeon', 'Joe Williams', 'Nico Siragusa', 'Montae Nicholson', 'Jalen Reeves-Maybin', 'Samson Ebukam', 'Howard Wilson', 'Michael Roberts', 'Josh Malone', 'David Sharpe', 'Julién Davenport', 'Deatrich Wise Jr.', 'Donnel Pumphrey', 'Ryan Switzer', 'Jamaal Williams', 'Joshua Dobbs', 'Sean Harlow', 'Zach Banner', 'Ryan Glasgow', 'Jehu Chesson', 'Wayne Gallman', 'Chad Hansen', 'Carlos Watkins', 'Marlon Mack', 'Grover Stewart', 'Jake Butt', 'George Kittle', 'Jordan Morgan', 'Blair Brown', 'Damontae Kazee', 'Jordan Leggett', 'Desmond King', 'Corn Elder', 'Jake Elliott', 'Jeremy Sprinkle', 'Jayon Brown', 'Brian Hill', 'Will Holden', 'Nate Hairston', 'Jermaine Eluemunor', 'Roderick Johnson', 'Anthony Walker Jr.','Jeremy McNichols', 'Matt Milano', 'Isaac Asiata', 'Jamal Agnew', 'Shelton Gibson', 'Avery Moss', 'Marquel Lee', 'Treston Decoud', 'Rodney Adams', 'Nathan Peterman', 'Isaiah McKenzie', 'Brian Allen', 'Eric Saubert', 'DeAngelo Yancey', 'J. J. Dielman', 'Trent Taylor', 'Davon Godchaux', 'T. J. Logan', 'Danny Isidora', 'Dylan Donahue', 'Aaron Jones', 'Ukeme Eligwe', 'Nathan Gerry', 'Caleb Brantley', 'Chuck Clark', 'Mike Tyson', 'Elijah McGuire', 'Tanzel Smart', 'Sam Tevi', 'Xavier Woods', 'Alexander Armah', 'Jordan Evans', 'Vincent Taylor', 'Tanner Vallejo', 'Al-Quadin Muhammad', 'Jeremy Clark', 'D. J. Jones', 'Chase Roullier', 'Adam Bisnowaty', 'Bucky Hodges', 'Pita Taumoepenu', 'De\'Angelo Henderson', 'Derrick Jones', 'Jeremiah Ledbetter', 'Sam Rogers', 'Brandon Wilson', 'Rudy Ford', 'Robert Davis', 'Justin Senior', 'Conor McDermott', 'Kofi Amichia', 'Colin Holba', 'Elijah Qualls', 'Brad Kaaya', 'Marquez White', 'Corey Levin', 'Leon McQuay III', 'Stacy Coley', 'Ifeadi Odenigbo', 'Shalom Luani', 'Jalen Myrick', 'Stevie Tu\'ikolovatu', 'Zane Gonzalez', 'Isaac Rochell', 'David Moore', 'Josh Carraway', 'Joey Ivie', 'Adrian Colbert', 'Josh Harvey-Clemons', 'Jylan Ware', 'Elijah Lee', 'Harrison Butker', 'Ejuan Price', 'Joshua Holsey', 'Brad Seaton', 'Isaiah Ford', 'Devante Mays', 'Noah Brown', 'Marquez Williams', 'Khalfani Muhammad', 'Elijah Hood', 'Kyle Fuller', 'Treyvon Hester', 'Jack Tocho', 'Jordan Carrell', 'Malachi Dupre', 'Keion Adams', 'Chris Carson', 'Pat O\'Connor', 'Mason Schreck', 'Matthew Dayes', 'Chad Kelly', ];
    this.setState({players: players})
    this.getStats(players, 2017);
  }

  getStats(playersArr, time) {
    this.setState({stats: []});
    let arr = [];
    let extra = [];
    for (let year = time; year < 2018; year++){
      fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=' + year, {
        method: 'GET'
      }).then((req) => {
        return req.json();
      }).then((myJson) => {
        let playerInfo = myJson.players;
        let max = 0;
        let min = 0;
        let maxName = '';
        let minName = '';
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
                  extra.push({Name: playerInfo[i].name, position: playerInfo[i].position, team: playerInfo[i].teamAbbr});
                }
              }
            }
          }
        }

        arr.sort(((a, b) => b.Redraft - a.Redraft));
        for (let i = 0; i < arr.length; i++){
          arr[i].Redraft = i + 1;
        }

        //determining biggest steal and bust
        for (let i = 0; i < arr.length; i++) {
          let diff = Number(arr[i].Redraft) - Number(arr[i].Pick);
          if (diff < min) {
            min = diff;
            minName = arr[i].Name;
          }
          if (diff > max) {
            max = diff;
            maxName = arr[i].Name;
          }
        }

        this.setState({stealName: minName});
        this.setState({bustName: maxName});
        this.setState({stealDiff: min});
        this.setState({bustDiff: max});        
        this.setState({stats: arr});
        this.setState({extraStats: extra});
        return myJson;
      }).catch((e) => {
        console.log('error occured: ' + e);
      });
    }
  }

  clickEvent(row) {
    let arr = this.state.extraStats;
    let i = 0;
    for (i = 0; i < arr.length; i++) {
      if (row.Name.localeCompare(arr[i].Name) === 0){
        break;
      }
    }
    let query = row.Name + " " + arr[i].position + " " + arr[i].team;
    this.setState({value: query});
    let name = row.Name.split(" ");
    let wiki = 'https://en.wikipedia.org/wiki/' + name[0] + '_' + name[1];
    this.setState({link: wiki});
  }
  
  //todo
  //biggest steal and bust of each draft
  //format player info
  //redesign site
  //10 years
  //access player pictures

  render() {
    const selectRowProp = {
      mode: 'radio',
      bgColor: 'pink',
      clickToSelect: true 
    };
    
    const options = {
      onRowClick: this.clickEvent.bind(this)
    };

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
            <BootstrapTable data={this.state.stats} selectRow={ selectRowProp } options={options}>
              <TableHeaderColumn dataField='Name' isKey={true} dataSort={true}>Name</TableHeaderColumn>
              <TableHeaderColumn dataField='Pick' dataSort={true}>Pick</TableHeaderColumn>
              <TableHeaderColumn dataField='Redraft' dataSort={true}>Redraft</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div id="resulttxt">
            <textarea id="txt" value={this.state.value} readOnly="true"></textarea>
            <br></br>
            <a href={this.state.link} target="_blank">Link to wiki</a>
            <p>Biggest Steal</p>
            <div>{this.state.stealName} was the biggest steal with a diff of {this.state.stealDiff}</div>
            <div>{this.state.bustName} was the biggest bust with a diff of {this.state.bustDiff}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
