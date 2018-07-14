import React, { Component } from 'react';
import './App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      players: [],
      value: '',
      firstName: '',
      lastName: '',
      extraStats: [],
      link: '',
      stealName: '',
      stealDiff: '',
      bustName: '',
      bustDiff: ''
    }
    this.getStats2008 = this.getStats2008.bind(this);
    this.getStats2009 = this.getStats2009.bind(this);
    this.getStats2010 = this.getStats2010.bind(this);
    this.getStats2011 = this.getStats2011.bind(this);
    this.getStats2012 = this.getStats2012.bind(this);
    this.getStats2013 = this.getStats2013.bind(this);
    this.getStats2014 = this.getStats2014.bind(this);
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

  getStats2008() {
    let players = [ 'Jake Long', 'Chris Long', 'Matt Ryan', 'Darren McFadden', 'Glenn Dorsey', 'Vernon Gholston', 'Sedrick Ellis', 'Derrick Harvey', 'Keith Rivers', 'Jerod Mayo', 'Leodis McKelvin', 'Ryan Clady', 'Jonathan Stewart', 'Chris Williams', 'Branden Albert', 'Dominique Rodgers-Cromartie', 'Gosder Cherilus', 'Joe Flacco', 'Jeff Otah', 'Aqib Talib', 'Sam Baker', 'Felix Jones', 'Rashard Mendenhall', 'Chris Johnson', 'Mike Jenkins', 'Duane Brown', 'Antoine Cason', 'Lawrence Jackson', 'Kentwan Balmer', 'Dustin Keller', 'Kenny Phillips', 'Phillip Merling', 'Donnie Avery', 'Devin Thomas', 'Brandon Flowers', 'Jordy Nelson', 'Curtis Lofton', 'John Carlson', 'Chilo Rachal', 'Tracy Porter', 'James Hardy', 'Eddie Royal', 'Tyrell Johnson', 'Matt Forte', 'Jordon Dizon', 'Jerome Simpson', 'Trevor Laws', 'Fred Davis', 'DeSean Jackson', 'Calais Campbell', 'Malcolm Kelly', 'Quentin Groves', 'Limas Sweed', 'Jason Jones', 'Ray Rice', 'Brian Brohm', 'Chad Henne', 'Dexter Jackson', 'Mike Pollak', 'Pat Lee', 'Martellus Bennett', 'Terrence Wheatley', 'Terrell Thomas', 'Kevin Smith', 'John Greco', 'Kendall Langford', 'Charles Godfrey', 'Chevis Jackson', 'Jacob Hester', 'Earl Bennett', 'Tavares Gooden', 'Chris Ellis', 'Jamaal Charles', 'Dan Connor', 'Reggie Smith', 'Brad Cottam', 'Pat Sims', 'Shawn Crable', 'Antwaun Molden', 'Bryan Smith', 'Early Doucet', 'DaJuan Morgan', 'Jeremy Zuttah', 'Harry Douglas', 'Craig Stevens', 'Tom Zbikowski', 'Andre Fluellen', 'Bruce Davis', 'Steve Slaton', 'Marcus Harrison', 'Jermichael Finley', 'Cliff Avril', 'Philip Wheeler', 'Kevin O\'Connell', 'Mario Manningham', 'Chad Rinehart', 'Andre Caldwell', 'Thomas DeCoud', 'Oniel Cousins', 'Tyvon Branch', 'Justin King', 'Jeremy Thompson', 'William Hayes', 'Beau Bell', 'William Franklin', 'Marcus Smith', 'Cody Wallace', 'Kory Lichtensteiger', 'Mike McGlynn', 'Shawn Murphy', 'Martin Rucker', 'Anthony Collins', 'Dwight Lowery', 'Reggie Corner', 'Dre Moore', 'Kenny Iwebema', 'Quintin Demps', 'Xavier Adibi', 'Jack Williams', 'Craig Steltz', 'Red Bryant', 'Tashard Choice', 'Bryan Kehl', 'Justin Tryon', 'Arman Shields', 'Lavelle Hawkins', 'Jacob Tamme', 'Keenan Burton', 'Jonathan Wilhite', 'Tony Hills', 'Jack Ikegwuonu', 'Derek Fine', 'David Hale', 'Stanford Keglar', 'Josh Sitton', 'Kenneth Moore', 'John David Booty', 'Robert James', 'Ryan Torain', 'Brandon Carr', 'Gary Barnidge', 'Zackary Bowman', 'Orlando Scandrick', 'DeMario Pressley', 'Jason Shirley', 'Jerome Felton', 'Alvin Bowen', 'Carlton Powell', 'Tim Hightower', 'Breno Giacomini', 'Frank Okam', 'Letroy Guion', 'Matthew Slater', 'Kroy Biermann', 'Thomas Williams', 'Dennis Dixon', 'Roy Schuening', 'Kellen Davis', 'Trae Williams', 'Josh Johnson', 'Marcus Howard', 'Erik Ainge', 'Owen Schmitt', 'Carl Nicks', 'Jonathan Goff', 'Marcus Thomas', 'Erik Walden', 'Durant Brooks', 'Trevor Scott', 'Barry Richardson', 'Marcus Henry', 'Thomas Brown', 'Dominique Barber', 'Josh Morgan', 'Geno Hayes', 'Jalen Parmele', 'Corey Lynch', 'Taylor Mehlhaff', 'Xavier Omon', 'Kareem Moore', 'Nick Hayden', 'Kevin Robinson', 'Spencer Larsen', 'Mike Gibson', 'Chris Harrington', 'Colt Brennan', 'John Sullivan', 'Mike Humpal', 'Tyler Schmitt', 'Ahtyba Rubin', 'Paul Hubbard', 'DeJuan Tribble', 'Jaymar Johnson', 'Ryan Mundy', 'Donald Thomas','Tom Santi', 'Bo Ruud', 'Andre\' Woodson', 'Robert Henderson', 'Joe Mays', 'Steve Justice', 'Mike Hart', 'Andy Studebaker', 'Lex Hilliard', 'Pierre Garçon', 'Haruki Nakamura', 'Matt Sherry', 'Ervin Baldwin', 'Matt Flynn', 'Brian Johnston', 'Nate Garner', 'Wilrey Fontenot', 'Chauncey Washington', 'Larry Grant', 'Justin Harper', 'Landon Cohen', 'Brett Swain', 'Caleb Campbell', 'Demetress Bell', 'Josh Barrett', 'Hilee Taylor', 'Chester Adams', 'Alex Brink', 'Steve Johnson', 'Brandon Keith', 'Chaz Schilens', 'Peyton Hillis', 'Chris Chamberlain', 'Cary Williams', 'King Dunlap', 'Alex Hall', 'Keith Zinger', 'Justin Forsett', 'Corey Clark', 'Brandon Coutu', 'Jamey Richard', 'Adrian Arrington', 'Cory Boyd', 'Michael Merritt', 'Allen Patrick', 'Geoff Schwartz', 'Rob Jackson', 'Joey LaRocque', 'Angelo Craig', 'Lionel Dotson', 'Mario Urrutia', 'Kirk Barton', 'Marcus Monk', 'Chris Horton', 'Mackenzy Bernadeau', 'Kennard Cox', 'David Vobora', ]
    this.setState({players: players})
    this.getStats(players, 2008);
  }
  
  getStats2009() {
    let players = [ 'Matthew Stafford', 'Jason Smith', 'Tyson Jackson', 'Aaron Curry', 'Mark Sanchez', 'Andre Smith', 'Darrius Heyward-Bey', 'Eugene Monroe', 'B. J. Raji', 'MichaelCrabtree', 'Aaron Maybin', 'Knowshon Moreno', 'Brian Orakpo', 'Malcolm Jenkins', 'Brian Cushing', 'Larry English', 'Josh Freeman', 'Robert Ayers', 'Jeremy Maclin', 'Brandon Pettigrew', 'Alex Mack', 'Percy Harvin', 'Michael Oher', 'Peria Jerry', 'Vontae Davis', 'Clay Matthews III', 'Donald Brown', 'Eric Wood', 'Hakeem Nicks', 'Kenny Britt', 'Beanie Wells', 'Ziggy Hood', 'Louis Delmas', 'Patrick Chung', 'James Laurinaitis', 'Brian Robiskie', 'Alphonso Smith', 'Rey Maualuga', 'Eben Britton', 'Ron Brace', 'Darius Butler', 'Jairus Byrd', 'Everette Brown', 'Pat White', 'Clint Sintim', 'Connor Barwin', 'Mike Mitchell', 'Darcel McBath', 'Max Unger', 'Mohamed Massaquoi', 'Andy Levitre', 'David Veikune', 'LeSean McCoy', 'Phil Loadholt', 'William Moore', 'Fili Moala', 'Paul Kruger', 'Sebastian Vollmer', 'Sherrod Martin', 'William Beatty', 'Sean Smith', 'Sen\'Derrick Marks', 'Cody Brown', 'Richard Quinn', 'Shonn Greene', 'Bradley Fletcher', 'Alex Magee', 'Jarron Gilbert', 'Jason Williams', 'Michael Johnson', 'Matt Shaughnessy', 'Terrance Knighton', 'Derek Cox', 'Glen Coffee', 'Robert Brewster', 'DeAndre Levy', 'Antoine Caldwell', 'Louis Vasquez', 'Kraig Urbik', 'Kevin Barnes', 'Roy Miller', 'Derrick Williams', 'Brandon Tate', 'Mike Wallace', 'Ramses Barden', 'Asher Allen', 'Patrick Turner', 'Lardarius Webb', 'Jared Cook', 'Chris Owens', 'Deon Butler', 'Jerraud Powers', 'Corvey Irvin', 'Ryan Mouton', 'Rashad Johnson', 'Keenan Lewis', 'Tyrone McKenzie', 'Chase Coffman', 'Juaquin Iglesias', 'Travis Beckum', 'Stephen McGee', 'Donald Washington', 'Darell Scott', 'Kaluka Maiava', 'Henry Melton', 'Jonathan Luigs', 'Mike Thomas', 'Brian Hartline', 'T. J. Lang', 'Victor Butler', 'Mike Goodson', 'Glover Quin', 'Vaughn Martin', 'David Bruton', 'Sammie Hill', 'Chip Vaughn', 'Kyle Moore', 'Stanley Arnoux', 'D. J. Moore', 'Brandon Williams', 'Shawn Nelson', 'Anthony Hill', 'Rich Ohrnberger', 'Louis Murphy', 'Lawrence Sidbury', 'Slade Norris', 'Austin Collie', 'Tony Fiammetta', 'Andre Brown', 'Gerald McRath', 'Greg Toler', 'Seth Olsen', 'Tyronne Green', 'Gartrell Johnson', 'Troy Kropog', 'Terrance Taylor', 'Jason Phillips', 'William Middleton', 'Colin Brown', 'Johnny Knox', 'Kenny McKinley', 'Kevin Huber', 'DeAngelo Smith', 'Jarett Dillard', 'Quinn Johnson', 'Scott McKillop', 'Nic Harris', 'Brandon Hughes', 'Davon Drew', 'Jasper Brinkley', 'Rhett Bomar', 'James Casey', 'Cornelius Ingram', 'Marcus Freeman', 'Xavier Fulton', 'Garrett Reynolds', 'Macho Harris', 'Cody Glenn', 'Fenuki Tupou', 'Brooks Foster', 'John Nalbone', 'Jamon Meredith', 'Duke Robinson', 'Thomas Morstead', 'Chris Clemons', 'Michael Hamlin', 'Herman Johnson', 'Joe Burnett', 'Frank Summers', 'George Bussey', 'Nate Davis', 'David Buehler', 'Javon Ringer', 'Tom Brandstater', 'Quinten Lawrence', 'Spencer Adkins', 'Don Carey', 'Mike Teel', 'Morgan Trent', 'Zach Miller', 'Andrew Gardner', 'Jarius Wynn', 'Cary Harris', 'Bear Pascoe', 'Cedric Peerman', 'Robert Henson', 'Brandon Underwood', 'Brice McCain', 'Kevin Ellison', 'Al Afalava', 'Coye Francies', 'Aaron Brown', 'Matt Slauson', 'Brandon Gibson', 'James Davis', 'Keith Null', 'Stephen Hodge', 'Jake Ingram', 'Stryker Sulak', 'DeAndre Wright', 'Curtis Painter', 'Brandon Myers', 'Jason McCourty', 'Will Davis', 'Ra\'Shon Harris', 'Dominique Edison', 'Myron Pryor', 'John Phillips', 'Bernard Scott', 'Vance Walker', 'Chris Ogbonnaya', 'Javarris Williams', 'Paul Fanaika', 'J. D. Folsom', 'Fui Vakapuna', 'Captain Munnerlyn', 'E. J. Biggers', 'Brad Jones', 'Curtis Taylor', 'Ellis Lankster', 'Eddie Williams', 'Pat McAfee', 'Troy Nolan', 'Demetrius Byrd', 'Blake Schlueter', 'A. Q. Shipley', 'Mike Mickens', 'Lydon Murtha', 'Manuel Johnson', 'Moise Fokou', 'Jamarca Sanford', 'Julian Edelman', 'Sammie Stroughter', 'Darryl Richard', 'Zack Follett', 'Jaimie Thomas', 'Jake O\'Connell', 'Stoney Woodson', 'Ryan Durand', 'LaRod Stephens-Howling', 'David Johnson', 'Nick Schommer', 'Marko Mitchell', 'Ricky Jean-Francois', 'Courtney Greene', 'Lance Louis', 'Nick Reed', 'Cameron Morrah', 'Clinton McDonald', 'Rashad Jennings', 'Derek Kinder', 'Freddie Brown', 'Tiquan Underwood', 'Trevor Canfield', 'Dan Gronkowski', 'Ryan Succop', ]
    this.setState({players: players})
    this.getStats(players, 2009);
  }

  getStats2010() {
    let players = [ 'Sam Bradford', 'Ndamukong Suh', 'Gerald McCoy', 'Trent Williams', 'Eric Berry', 'Russell Okung', 'Joe Haden', 'Rolando McClain', 'C. J. Spiller', 'Tyson Alualu', 'Anthony Davis', 'Ryan Mathews', 'Brandon Graham', 'Earl Thomas', 'Jason Pierre-Paul', 'Derrick Morgan', 'Mike Iupati', 'Maurkice Pouncey', 'Sean Weatherspoon','Kareem Jackson', 'Jermaine Gresham', 'Demaryius Thomas', 'Bryan Bulaga', 'Dez Bryant', 'Tim Tebow', 'Dan Williams', 'Devin McCourty', 'Jared Odrick', 'Kyle Wilson', 'Jahvid Best', 'Jerry Hughes', 'Patrick Robinson', 'Rodger Saffold', 'Chris Cook', 'Brian Price', 'Dexter McCluster', 'Nate Allen', 'T. J. Ward', 'Arrelious Benn', 'Koa Misi', 'Torell Troup', 'Rob Gronkowski', 'Sergio Kindle', 'Lamarr Houston', 'Zane Beadles', 'Linval Joseph', 'Daryl Washington', 'Jimmy Clausen', 'TaylorMays', 'Javier Arenas', 'Toby Gerhart', 'Jason Worilds', 'Jermaine Cunningham', 'Carlos Dunlap', 'Sean Lee', 'Mike Neal', 'Terrence Cody', 'Ben Tate', 'Montario Hardesty', 'Golden Tate', 'Vladimir Ducasse', 'Brandon Spikes', 'Pat Angerer', 'Charles Brown', 'Jerome Murphy', 'Amari Spievey', 'Myron Lewis', 'Jon Asamoah', 'Jared Veldheer', 'Ed Dickson', 'Morgan Burnett', 'Alex Carrington', 'John Jerry', 'D\'Anthony Smith', 'Major Wright', 'Chad Jones', 'Damian Williams', 'Brandon LaFell', 'Donald Butler', 'J. D. Walton', 'Earl Mitchell', 'Emmanuel Sanders', 'Corey Peters', 'Jordan Shipley', 'Colt McCoy', 'Daniel Te\'o-Nesheim', 'Eric Decker', 'Andre Roberts', 'Armanti Edwards', 'Taylor Price', 'NaVorro Bowman', 'Shawn Lauvao', 'Tony Moeaki', 'Kevin Thomas', 'Jimmy Graham', 'Brandon Ghee', 'Rennie Curran', 'Mike Johnson', 'Mardy Gilyard', 'Everson Griffen', 'Mike Williams', 'Darryl Sharpton', 'Perry Riley', 'Alterraun Verner', 'Trevard Lindley', 'Bruce Campbell', 'Marcus Easley', 'Jacoby Ford', 'Corey Wootton', 'Darrell Stuckey', 'Walter Thurmond', 'Joe McKnight', 'Aaron Hernandez', 'Dennis Pitta', 'Phillip Dillard', 'Thaddeus Gibson', 'Joe Hawley', 'Garrett Graham', 'A. J. Edds', 'Geno Atkins', 'Keenan Clayton', 'Mike Kafka', 'Al Woods', 'Eric Norwood', 'Clay Harbor', 'Akwasi Owusu-Ansah', 'E. J. Wilson', 'Jason Fox', 'Jacques McClendon', 'O\'Brien Schofield', 'Roddrick Muckelroy', 'Michael Hoomanawanui', 'Kam Chancellor', 'Ricky Sapp', 'Dominique Franks', 'Kendrick Lewis', 'Perrish Cox', 'Walter McFadden', 'John Conner', 'Ed Wang', 'Joshua Moore', 'Cameron Sheffield', 'Larry Hart', 'Sherrick McManis', 'Nolan Carroll', 'Cam Thomas', 'Mitch Petrus', 'Robert Johnson', 'Hall Davis', 'Zoltan Mesko', 'Chris Scott', 'Otis Hudson', 'Austen Lane', 'Andrew Quarless', 'John Skelton', 'David Reed', 'Arthur Jones', 'Matt Tennant', 'Riley Cooper', 'Larry Asante', 'Chris DeGeare', 'Brody Eldridge', 'Reshad Jones', 'Crezdon Butler', 'Kerry Meier', 'Stevenson Sylvester', 'Nathan Triplett', 'Jonathan Crompton', 'Marshall Newhouse', 'Fendi Onobun', 'Shann Schillinger', 'Brent Bowden', 'Anthony Dixon', 'Dennis Morris', 'Greg Hardy', 'Rusty Smith', 'Carlton Mitchell', 'Arthur Moats', 'Sam Young', 'Deji Karim', 'Dan LeFevour', 'Nate Byham', 'Eric Olsen', 'Adrian Tracy', 'Anthony McCoy', 'Clifton Geathers', 'Shelley Smith', 'Jonathan Dwyer', 'Eugene Sims', 'Travis Goethel', 'Dezmon Briscoe', 'Danny Batten', 'James Starks', 'Ramon Harewood', 'Antonio Brown', 'Jamar Wall', 'Trindon Holliday', 'David Gettis', 'Joe Webb', 'Charles Scott', 'Jorrick Calvin', 'Jordan Pugh', 'Scotty McGee', 'TonyPike', 'Ted Larsen', 'Kyle Williams', 'Myron Rolle', 'Thomas Welch', 'Levi Brown', 'Cody Grimm', 'Marquis Johnson', 'Chris McCoy', 'Willie Young', 'Mickey Shuler,Jr.', 'Jeremy Ware', 'Kyle Calloway', 'Dekoda Watson', 'J\'Marcus Webb', 'Terrence Austin', 'Jamar Chaney', 'Matt Dodge', 'Marc Mariani', 'R.J. Stanford', 'PhillipAdams', 'Syd\'Quan Thompson', 'George Selvie', 'Dorin Dickerson', 'Reggie Stephens', 'Erik Cook', 'C. J. Wilson', 'Selvish Capers', 'Jammie Kirlew', 'Jim Dray', 'Sean Lissemore', 'Dedrick Epps', 'Dexter Davis', 'Ryan D\'Imperio', 'Ricardo Mathews', 'Sean Canfield', 'Kavell Conner', 'David Howard', 'Doug Worthington', 'Jeff Owens', 'Kurt Coleman', 'Jameson Konz', 'Ray Fisher', 'Brandon Deaderick', 'Kade Weston', 'Robert McClain', 'Zac Robinson', 'Stevie Brown', 'Austin Spitler', 'Erik Lorig', 'Josh Hull', 'Tim Toone', ]
    this.setState({players: players})
    this.getStats(players, 2010);
  }

  getStats2011() {
    let players = [ 'Cam Newton', 'Von Miller', 'Marcell Dareus', 'A. J. Green', 'Patrick Peterson', 'Julio Jones', 'Aldon Smith', 'Jake Locker', 'Tyron Smith', 'Blaine Gabbert', 'J. J. Watt', 'Christian Ponder', 'Nick Fairley', 'Robert Quinn', 'Mike Pouncey', 'Ryan Kerrigan', 'Nate Solder', 'Corey Liuget', 'Prince Amukamara', 'Adrian Clayborn', 'Phil Taylor Sr.', 'Anthony Castonzo', 'Danny Watkins', 'Cameron Jordan', 'James Carpenter', 'Jonathan Baldwin', 'Jimmy Smith', 'Mark Ingram Jr.', 'Gabe Carimi', 'Muhammad Wilkerson', 'Cameron Heyward', 'Derek Sherrod', 'Ras-I Dowling', 'Aaron Williams', 'Andy Dalton', 'Colin Kaepernick', 'Jabaal Sheard', 'Ryan Williams', 'Akeem Ayers', 'Bruce Carter', 'Jarvis Jenkins', 'Brooks Reed', 'Kyle Rudolph', 'Titus Young', 'Rahim Moore', 'Orlando Franklin', 'Lance Kendricks', 'Stefen Wisniewski', 'Benjamin Ijalana', 'Marcus Gilchrist', 'Da\'Quan Bowers', 'Marvin Austin', 'Stephen Paea', 'Jaiquawn Jarrett', 'Rodney Hudson', 'Shane Vereen', 'Mikel Leshoure', 'Torrey Smith', 'Greg Little', 'Brandon Harris', 'Jonas Mouton', 'Daniel Thomas', 'Marcus Gilbert', 'Randall Cobb', 'Terrell McClain', 'Dontay Moch', 'Nate Irving', 'Kelvin Sheppard', 'Rob Housler', 'Justin Houston', 'DeMarco Murray', 'Martez Wilson', 'Stevan Ridley', 'Ryan Mallett', 'John Moffitt', 'Will Rackley', 'Jurrell Casey', 'Austin Pettis', 'Leonard Hankerson', 'Chris Culliver', 'DeMarcus Van Dyke', 'Vincent Brown', 'Jerrel Jernigan', 'Mason Foster', 'Jah Reid', 'Allen Bailey', 'Drake Nevis', 'Johnny Patrick', 'Shareece Wright', 'Curtis Marsh, Jr.', 'Akeem Dent', 'Joseph Barksdale', 'Chris Conte', 'Kenrick Ellis', 'Curtis Brown', 'Alex Green', 'Sione Fua', 'Brandon Hogan', 'K. J. Wright', 'Da\'Norris Searcy', 'Clint Boling', 'Jordan Cameron', 'Sam Acho', 'Luke Stocker', 'Roy Helu', 'Christian Ballard', 'Kris Durham', 'Quinton Carter', 'Colin McCarthy', 'David Arkin', 'Edmond Gates', 'Greg Salas', 'Chimdi Chekwa', 'Cecil Shorts III', 'Kendall Hunter', 'Casey Matthews', 'James Brewer', 'Jalil Brown', 'Delone Carter', 'Alex Henery', 'Chris Prosinski', 'Chris Hairston', 'Tandon Doss', 'Owen Marecic', 'Taiwan Jones', 'Bilal Powell', 'Rashad Carmichael', 'Cortez Allen', 'Julius Thomas', 'Jamie Harper', 'Davon House', 'Kealoha Pilares', 'Johnny White', 'Robert Sands', 'RickyStanzi', 'Anthony Sherman', 'Buster Skrine', 'Marcus Cannon', 'Brandon Burton', 'Gabe Miller', 'D. J. Williams', 'Karl Klug', 'Josh Thomas', 'Shiloh Keo', 'Jacquizz Rodgers', 'Dejon Gomes', 'Rod Issac', 'Denarius Moore', 'Dion Lewis', 'Jason Pinkston', 'Ahmad Black', 'T. J. Yates', 'Jeremy Kerley', 'Richard Sherman', 'NilesPaul', 'Mark LeGree', 'Doug Hogue', 'Jermale Hines', 'Lee Smith', 'Nathan Enderle', 'Julian Vandervelde', 'Chris Carter', 'Daniel Kilgore', 'Chykie Brown', 'Pernell McPhee', 'Lawrence Wilson', 'Ryan Whalen', 'DeMarcus Love', 'Chris White', 'Mistral Raymond', 'Quan Sturdivant', 'Brandon Fusco', 'Byron Maxwell', 'Charles Clay', 'Byron Stingily', 'Dwayne Harris', 'Evan Royster', 'Aldrick Robinson', 'Caleb Schlauderaff', 'Tyrod Taylor', 'Richard Gordon', 'Ronald Johnson', 'Jordan Todman', 'David Carter', 'Greg Jones', 'D. J. Smith', 'Allen Bradford', 'Chris L. Rucker', 'Mike Mohamed', 'Colin Jones', 'Jason Kelce', 'Matt Bosher', 'Brian Rolle', 'Markell Carter', 'J. T. Thomas', 'Keith Williams', 'Ricky Elmore', 'Tyler Sash', 'Jerrell Powe', 'Ross Homan', 'Stephen Schilling', 'Jacquian Williams', 'Zack Williams', 'Virgil Green', 'Lazarius Levingston', 'Justin Rogers', 'Korey Lindsey', 'Greg McElroy', 'Bruce Miller', 'Zach Clayton', 'Brandyn Thompson', 'Derek Newton', 'D\'Aundre Reed', 'Mikail Baker', 'Maurice Hurt', 'Ryan Taylor', 'Malcolm Williams', 'Shaun Chapas', 'Da\'Rel Scott', 'Anthony Gaitor', 'Shane Bannon', 'Markus White', 'Anthony Allen', 'Greg Romeus', 'Scotty McKnight', 'Jabara Williams', 'Jonathan Nelson', 'Cliff Matthews', 'Frank Kearse', 'Baron Batch', 'Lawrence Guy', 'AndrewGachkar', 'Jimmy Wilson', 'Stephen Burton', 'Greg Lloyd, Jr.', 'Daniel Hardy', 'Mike Person', 'Stanley Havili', 'David Ausberry', 'Malcolm Smith', 'Nate Bussey', 'Lee Ziemba', 'Michael Jasper', 'Jay Finley', 'Jeremy Beal', 'Eric Hagg', 'DeMarco Sampson', 'Tommie Campbell', 'Bill Nagy', 'Chris Neild', 'Cheta Ozougwu', ]
    this.setState({players: players})
    this.getStats(players, 2011);
  }

  getStats2012() {
    let players = [ 'Andrew Luck', 'Robert Griffin III', 'Trent Richardson', 'Matt Kalil', 'Justin Blackmon', 'Morris Claiborne', 'Mark Barron', 'Ryan Tannehill', 'Luke Kuechly', 'Stephon Gilmore', 'Dontari Poe', 'Fletcher Cox', 'Michael Floyd', 'Michael Brockers', 'Bruce Irvin', 'Quinton Coples', 'Dre Kirkpatrick', 'Melvin Ingram', 'Shea McClellin', 'Kendall Wright', 'Chandler Jones', 'Brandon Weeden', 'Riley Reiff', 'David DeCastro', 'Dont\'a Hightower', 'Whitney Mercilus', 'Kevin Zeitler', 'Nick Perry', 'Harrison Smith', 'A. J. Jenkins', 'Doug Martin', 'David Wilson', 'Brian Quick', 'Coby Fleener', 'Courtney Upshaw', 'Derek Wolfe', 'Mitchell Schwartz', 'AndreBranch', 'Janoris Jenkins', 'Amini Silatolu', 'Cordy Glenn', 'Jonathan Martin', 'Stephen Hill', 'Jeff Allen', 'Alshon Jeffery', 'Mychal Kendricks', 'Bobby Wagner', 'Tavon Wilson', 'Kendall Reyes', 'Isaiah Pead', 'Jerel Worthy', 'Zach Brown', 'Devon Still', 'Ryan Broyles', 'Peter Konz', 'Mike Adams', 'Brock Osweiler', 'Lavonte David', 'Vinny Curry', 'Kelechi Osemele', 'LaMichael James', 'Casey Hayward', 'Rueben Randle', 'Dwayne Allen', 'Trumaine Johnson', 'Josh Robinson', 'Ronnie Hillman', 'DeVier Posey', 'T. J. Graham', 'Bryan Anger', 'Josh LeRibeus', 'Olivier Vernon', 'Brandon Taylor', 'Donald Stephenson', 'Russell Wilson', 'Brandon Brooks', 'Demario Davis', 'Michael Egnew', 'Brandon Hardin', 'Jamell Fleming', 'Tyrone Crawford', 'Mike Martin', 'Mohamed Sanu', 'Bernard Pierce', 'Dwight Bentley', 'Sean Spence', 'John Hughes', 'Nick Foles', 'Akiem Hicks', 'Jake Bequette', 'Lamar Holmes', 'T. Y. Hilton', 'Brandon Thompson', 'Jayron Hosley', 'Tony Bergstrom', 'Chris Givens', 'Lamar Miller', 'Gino Gradkowski', 'Ben Jones', 'Travis Benjamin', 'Omar Bolden', 'Kirk Cousins', 'Frank Alexander', 'Joe Adams', 'Nigel Bradham', 'RobertTurbin', 'Devon Wylie', 'Philip Blake', 'Alameda Ta\'amu', 'Ladarius Green', 'Evan Rodriguez', 'Bobby Massie', 'Kyle Wilber', 'Jaye Howard', 'Coty Sensabaugh', 'Orson Charles', 'Joe Looney', 'Jarius Wright', 'Keenan Robinson', 'James-Michael Johnson', 'Keshawn Martin', 'Nick Toon', 'Brandon Boykin', 'Ron Brooks', 'Ronnell Lewis', 'Jared Crick', 'Adrien Robinson', 'Rhett Ellison', 'Miles Burris', 'Christian Thompson', 'Brandon Mosley', 'Mike Daniels', 'Jerron McMillian', 'Greg Childs','Matt Johnson', 'Josh Chapman', 'Malik Jackson', 'Tahir Whitehead', 'Robert Blanton', 'Najee Goode', 'Adam Gettis', 'Brandon Marshall', 'Josh Norman', 'Zebrie Sanders', 'Taylor Thompson', 'DeQuan Menzie', 'Tank Carder', 'Chris Greenwood', 'Johnnie Troutman', 'Rokevious Watkins', 'Senio Kelemete', 'Danny Coale', 'Dennis Kelly', 'Korey Toomer', 'Josh Kaddu', 'Shaun Prater', 'Bradie Ewing', 'Jack Crawford', 'Chris Rainey', 'Ryan Miller', 'Randy Bullock', 'Corey White', 'Terrell Manning', 'Jonathan Massaquoi', 'Darius Fleming', 'Marvin Jones', 'George Iloka', 'Juron Criner', 'Asa Jackson', 'Vick Ballard', 'Greg Zuerlein', 'Jeremy Lane', 'Alfred Morris', 'Keith Tandy', 'Blair Walsh', 'Mike Harris', 'Justin Bethel', 'Mark Asper', 'Andrew Tiller', 'Trenton Robinson', 'Winston Guy', 'Cyrus Gray', 'B.J. Cunningham', 'Isaiah Frey', 'Ryan Lindley', 'James Hanna', 'Josh Bush', 'Danny Trevathan', 'Christo Bilukidi', 'Markelle Martin', 'Dan Herron', 'Charles Mitchell', 'Tom Compton', 'Marvin McNutt', 'Nick Mondek', 'Jonte Green', 'Nate Ebner', 'Tommy Streeter', 'Jason Slowey', 'Brandon Washington', 'Matt McCants', 'Terrance Ganaway', 'Robert Griffin', 'Emmanuel Acho', 'Billy Winn', 'LaVon Brazill', 'Brad Nortman', 'Justin Anderson', 'Audie Cole', 'Scott Solomon', 'Michael Smith', 'Richard Crawford', 'Kheeston Randall', 'D. J. Campbell', 'Jordan Bernstine', 'Jerome Long', 'Trevor Guyton', 'Greg McCoy', 'Nate Potter', 'Caleb McSurdy', 'Travis Lewis', 'Alfonzo Dennard', 'J. R. Sweezy', 'David Molk', 'Rishard Matthews', 'Jeris Pendleton', 'Bryce Brown', 'Nathan Stupar', 'Toney Clemons', 'Greg Scruggs', 'Drake Dunsmore','Marcel Jones', 'Jeremy Ebert', 'DeAngelo Tyson', 'Cam Johnson', 'Junior Hemingway', 'Markus Kuhn', 'David Paulson', 'Andrew Datko', 'Antonio Allen', 'B. J. Coleman', 'Jordan White', 'Trevin Wade', 'Terrence Frederick', 'Brad Smelley', 'Kelvin Beachum', 'Travian Robertson', 'Edwin Baker', 'John Potter', 'Daryl Richardson', 'Chandler Harnish', ]
    this.setState({players: players})
    this.getStats(players, 2012);
  }
  getStats2013() {
    let players = [ 'Eric Fisher', 'Luke Joeckel', 'Dion Jordan', 'Lane Johnson', 'Ezekiel Ansah', 'Barkevious Mingo', 'Jonathan Cooper', 'Tavon Austin', 'Dee Milliner', 'Chance Warmack', 'D. J. Fluker', 'D. J. Hayden', 'Sheldon Richardson', 'Star Lotulelei', 'Kenny Vaccaro', 'EJ Manuel', 'Jarvis Jones', 'Eric Reid', 'Justin Pugh', 'Kyle Long', 'Tyler Eifert', 'Desmond Trufant', 'Sharrif Floyd', 'Björn Werner', 'Xavier Rhodes', 'Datone Jones', 'DeAndre Hopkins', 'Sylvester Williams', 'Cordarrelle Patterson', 'Alec Ogletree', 'Travis Frederick', 'Matt Elam', 'Johnathan Cyprien', 'Justin Hunter', 'Zach Ertz', 'Darius Slay', 'Giovani Bernard', 'Manti Te\'o', 'Geno Smith', 'Cornellius Carradine', 'Robert Woods', 'Menelik Watson', 'Johnthan Banks', 'Kawann Short', 'Kevin Minter', 'Kiko Alonso', 'Gavin Escobar', 'Le\'Veon Bell','Johnathan Hankins', 'Jon Bostic', 'David Amerson', 'Jamie Collins', 'Margus Hunt', 'Jamar Taylor', 'Vance McDonald', 'Arthur Brown', 'D.J. Swearinger', 'Montee Ball', 'Aaron Dobson', 'Robert Alford', 'Eddie Lacy', 'Christine Michael', 'Travis Kelce', 'Dwayne Gratz', 'Larry Warford', 'Sio Moore', 'Bennie Logan', 'Leon McFadden', 'Tyrann Mathieu', 'Blidi Wreh-Wilson', 'T. J. McDonald', 'Brian Winters', 'Mike Glennon', 'Terrance Williams', 'Terron Armstead', 'Keenan Allen', 'Dallas Thomas', 'Marquise Goodwin', 'Markus Wheaton', 'J. J. Wilcox', 'Damontre Moore', 'John Jenkins', 'Logan Ryan', 'Shawn Williams', 'Jordan Reed', 'Hugh Thornton', 'Jordan Hill', 'Corey Lemonier', 'Brennan Williams', 'Kayvon Webster', 'Duron Harmon', 'Stedman Bailey', 'Will Davis', 'Brandon Williams', 'Sam Montgomery', 'Knile Davis', 'Zaviar Gooden', 'Matt Barkley', 'Nico Johnson', 'Akeem Spence', 'Ace Sanders', 'Josh Boyce', 'Alex Okafor', 'Jelani Jenkins', 'Duke Williams', 'Dion Sims', 'Brian Schwenke', 'Edmund Kugbila', 'David Bakhtiari', 'Ryan Nassib', 'Shamarko Thomas', 'Tyler Wilson', 'Barrett Jones', 'B. W. Webb', 'Landry Jones', 'Earl Watford', 'Khaseem Greene', 'Sean Porter', 'Phillip Thomas', 'Gerald Hodges', 'Khaled Holmes', 'JC Tretter', 'Chris Harper', 'Trevardo Williams', 'Johnathan Franklin', 'William Gholston', 'Malliciah Goodman', 'Quinton Patton', 'John Simon', 'Kyle Juszczyk', 'Marcus Lattimore', 'Devin Taylor', 'Levine Toilolo', 'Sanders Commings', 'Denard Robinson', 'Earl Wolff', 'Jesse Williams', 'Tharold Simon', 'Montori Hughes', 'Stepfan Taylor', 'Oday Aboushi', 'Lavar Edwards', 'Jonathan Meeks', 'Kenny Stills', 'Steve Williams', 'Quanterus Smith', 'Steven Means', 'A. J. Klein', 'Brandon McGee', 'Terry Hawthorne', 'Joseph Randle', 'Cooper Taylor', 'Stansly Maponga','Chris Thompson', 'Jeff Locke', 'Tanner Hawkinson', 'Quinton Dial', 'Luke Willson', 'Micah Hyde', 'Zac Stacy', 'Tavarres King', 'Brandon Jenkins', 'Jordan Mills','Mike Gillislee', 'Sam Martin', 'Caleb Sturgis', 'Josh Boyd', 'Ricky Wagner', 'Josh Evans', 'Eric Kush', 'Corey Fuller', 'Nick Kasa', 'Vinston Painter', 'Ryan Swope', 'Jamoris Slaughter', 'David Quessenberry', 'Dustin Hopkins', 'William Campbell', 'Tourek Williams', 'Nick Moody', 'Latavius Murray', 'Kenjon Barner', 'Rufus Johnson', 'Mychal Rivera', 'DeVonte Holloman', 'Justin Brown', 'Andre Ellington', 'Cornelius Washington', 'Mike James', 'Rex Burkhead', 'Bacarri Rambo', 'John Boyett', 'Nate Palmer', 'Spencer Ware', 'Alan Bonner', 'Jeff Baca', 'Cobi Hamilton', 'Chris Jones', 'Theo Riddick', 'Kapron Lewis-Moore', 'Ryan Griffin', 'Khalid Wooten', 'Ryan Jensen', 'Braden Wilson', 'Stacy McGee', 'Vince Williams', 'Mike Catapano', 'Jeremy Harris', 'Brice Butler', 'Demetrius McCray', 'Michael Williams', 'Joe Kruger', 'Michael Mauti', 'Travis Bond', 'Tommy Bohanon', 'Charles Johnson', 'Armonty Bryant', 'Jordan Poyer', 'D. C. Jefferson', 'Ryan Seymour', 'Brad Sorensen', 'Chris Gragg', 'Nicholas Williams', 'Kevin Dorsey', 'Eric Herman', 'Michael Buchanan', 'Garrett Gilkey', 'Jawan Jamison', 'Everett Dawkins', 'Kerwynn Williams', 'Ty Powell', 'Sam Barrington', 'David Bass', 'Zac Dysert', 'Steve Beauharnais', 'Marquess Wilson', 'B. J. Daniels', 'Aaron Mellette', 'David King', 'Reid Fragel', 'Jared Smith', 'Michael Bowie', 'Kemal Ishmael', 'Zeke Motta', 'Brandon Hepburn', 'Carter Bykowski', 'Marc Anthony', 'Daimion Stafford', 'Sean Renfree', 'Don Jones','T. J. Johnson', 'Marcus Cooper', 'Michael Cox', 'Justice Cunningham', ]
    this.setState({players: players})
    this.getStats(players, 2013);
  }

  getStats2014() {
    let players = [ 'Jadeveon Clowney', 'Greg Robinson', 'Blake Bortles', 'Sammy Watkins', 'Khalil Mack', 'Jake Matthews', 'Mike Evans', 'Justin Gilbert', 'Anthony Barr', 'Eric Ebron', 'Taylor Lewan', 'Odell Beckham', 'Aaron Donald', 'Kyle Fuller', 'Ryan Shazier', 'Zack Martin', 'C. J. Mosley', 'Calvin Pryor', 'Ja\'Wuan James', 'Brandin Cooks', 'Ha Ha Clinton-Dix', 'Johnny Manziel', 'Dee Ford', 'Darqueze Dennard', 'Jason Verrett', 'Marcus Smith II', 'Deone Bucannon', 'Kelvin Benjamin', 'Dominique Easley', 'Jimmie Ward', 'Bradley Roby', 'Teddy Bridgewater', 'Xavier Su\'a-Filo', 'DeMarcus Lawrence', 'Joel Bitonio', 'Derek Carr', 'Ra\'Shede Hageman', 'Austin Seferian-Jenkins', 'Marqise Lee', 'Kyle Van Noy', 'Lamarcus Joyner', 'Jordan Matthews', 'Weston Richburg', 'Cyrus Kouandjio', 'Paul Richardson', 'Stephon Tuitt', 'Trent Murphy', 'Timmy Jernigan', 'Jace Amaro', 'Jeremiah Attaochu', 'Ego Ferguson', 'Troy Niklas', 'Davante Adams', 'Bishop Sankey', 'Jeremy Hill', 'Cody Latimer', 'CarlosHyde', 'Stanley Jean-Baptiste', 'Jack Mewhort', 'Kony Ealy', 'Allen Robinson', 'Jimmy Garoppolo', 'Jarvis Landry', 'Justin Britt', 'C. J. Fiedorowicz', 'Morgan Moses', 'Billy Turner', 'Dezmen Southward', 'Charles Sims', 'Marcus Martin', 'Christian Kirksey', 'Scott Crichton', 'Preston Brown', 'Jay Bromley', 'Tre Mason', 'Travis Swanson', 'Chris Borland', 'Spencer Long', 'Terrence Brooks', 'Dexter McDougle', 'Gabe Jackson', 'Will Sutton', 'Louis Nix', 'Kareem Martin', 'Khyri Thornton','Josh Huff', 'Phillip Gaines', 'Will Clarke', 'Chris Watt', 'Donte Moncrief', 'John Brown', 'Trai Turner', 'Brandon Linder', 'Terrance West', 'Michael Schofield','Jerick McKinnon', 'Dri Archer', 'Richard Rodgers', 'Crockett Gillmore', 'Brandon Thomas', 'Jaylen Watkins', 'Bashaud Breeland', 'Devonta Freeman', 'Jalen Saunders', 'Bryan Stork', 'Bruce Ellington', 'Justin Ellis', 'Cassius Marsh', 'Ross Cockrell', 'Maurice Alexander', 'Russell Bodine', 'DaQuan Jones', 'Andre Williams', 'Aaron Colvin', 'Shaq Evans', 'Keith McGill', 'Ka\'Deem Carey', 'Martavis Bryant', 'Anthony Hitchens', 'Logan Thomas', 'Carl Bradford', 'Marqueston Huff', 'Kevin Norwood', 'De\'Anthony Thomas', 'Walt Aikens', 'Khairi Fortt', 'Pierre Desir', 'Tre Boston', 'Dontae Johnson', 'James White', 'Brock Vereen', 'Kevin Pierre-Louis', 'Nevin Lawson', 'Brent Urban', 'Tom Savage', 'Larry Webster III', 'Dakota Dozier', 'Lorenzo Taliaferro', 'Prince Shembo', 'Cameron Fleming', 'Taylor Hart', 'Ryan Grant', 'Kadeem Edwards', 'Telvin Smith', 'David Yankey', 'Devin Street', 'Ricardo Allen', 'Bené Benwikere', 'Kevin Pamphile', 'Aaron Lynch', 'Avery Williamson', 'Nat Berhe', 'Cyril Richardson', 'Jeremiah George', 'Arthur Lynch', 'Lamin Barrow', 'Shaquille Richardson', 'Caraun Reid', 'Chris Smith', 'Ed Stinson', 'Corey Linsley', 'Ed Reynolds', 'Aaron Murray', 'AJ McCarron', 'Ryan Carrethers', 'Jonathan Newsome', 'Vinnie Sunseri', 'Marquis Spruill', 'Ronald Powell', 'Keith Reaser', 'Jordan Tripp', 'Jimmy Staten', 'Wesley Johnson', 'Devon Kennard', 'John Urschel', 'Jared Abbrederis', 'Jeoffrey Pagan', 'Zach Mettenberger', 'Jon Halapio', 'Kenneth Acker', 'Alfred Blue', 'Antone Exum', 'David Fales', 'Kendall James', 'Robert Herron', 'Lache Seastrunk', 'Bennett Jackson', 'E. J. Gaines', 'T. J. Jones', 'Matt Hazel', 'Pat O\'Donnell', 'Jordan Zumwalt', 'Zach Fulton', 'Keith Wenning', 'Brandon Dixon', 'Walt Powell', 'Demetri Goodson', 'Zach Moore', 'Garrett Scott', 'Laurent Duvernay-Tardif', 'Marion Grice', 'Tavon Rooks', 'Andrew Jackson', 'Tyler Gaffney', 'Luke Bowanko', 'Jemea Thomas', 'Matt Paradis', 'Eric Pinkins', 'Quincy Enunwa', 'IK Enemkpali', 'Jay Prosch', 'Marquis Flowers', 'Tajh Boyd', 'Garrett Gilbert', 'Daniel McCullers', 'Andre Hal', 'Ted Bolser', 'Michael Campanaro', 'Travis Carrie', 'Shamar Stephen', 'Randell Johnson', 'Storm Johnson', 'Brandon Watts', 'Beau Allen', 'Jabari Price', 'Mitchell Van Dyk', 'Kiero Small', 'Zach Hocker', 'Nate Freese', 'Rob Blanchflower', 'Ben Gardner', 'Ulrick John', 'Trevor Reilly', 'Terrence Fede', 'Shelby Harris', 'Jeff Janis', 'Seantrel Henderson', 'Will Smith', 'James Wright', 'Tevin Reese', 'Christian Bryant', 'Corey Nelson', 'Kaleb Ramsey', 'Jeremy Gallon', 'Trey Millard', 'Charles Leno', 'Jonathan Dowling', 'Ahmad Dixon', 'Michael Sam', 'Demetrius Rhaney', 'Ken Bishop', 'Lavelle Westbrooks', 'Yawin Smallwood', 'Terrance Mitchell', 'Tyler Starr', 'Lonnie Ballentine']
    this.setState({players: players})
    this.getStats(players, 2014);
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
    let query = 'Name: ' + row.Name + '\nPosition: ' + arr[i].position + '\nTeam: ' + arr[i].team;
    this.setState({value: query});
    let name = row.Name.split(" ");
    this.setState({firstName: name[0]});
    this.setState({lastName: name[1]});
    let wiki = 'https://en.wikipedia.org/wiki/' + name[0] + '_' + name[1];
    this.setState({link: wiki});
  }
  
  //todo
  //dangerously set inner html of text area
  //conditionally render results
  //redesign site: see mock
  //work on hover: name, pick, repick, total points
  //fill out missing data
  //Create graphs to show player vs pick vs redraft; see mock
  //access player pictures: python web parser (wiki has access issues)
  //link site to my site

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
        <div id = "introduction">
          <h1 id="text1">the past ten years of the nfl</h1>
          <h1 id="text2">AGAIN...</h1>
          <p id="text9">Based on fantasy points accumulated over each player's carrer</p>
          <p id="text9">By: <a href="http://www.vikasperaka.com/" target="_blank" rel="noopener noreferrer">Vikas Peraka</a></p>
          <br></br>
          <p>Why is it that some picks you make in your fantasy drafts don't stack up to your expectations. Or even better, how you were the one to pick a "sleeper" or "steal" in the draft that may have saved your team from utter demolition. Do you have a similar mindset in filtering out keen players like the current NFL teams? This applicaton serves to illustrate that purpose and give examples of how your picks may not have been the bust that you see it as. And also how even the professionals can make mistakes like you?</p>
          <p>As draft season comes around, there is always the doubt at the back of every GM's head of whether the player in question can perform to expectation, stay healthy, and maybe even break some records and have a generational season. Questions arise over a whether a player's career may be reaching it's end or whether it's a temporary slump. Well, now you have access to the stats to back up some of the claims you might come up with.</p>
          <p>Now there is no way to predict the future and how players perform, but maybe looking at the past may give insight over how the player will perform.</p>
          <br></br>
          <h2 id="text3">how exactly are fantasy statistics calculate</h2>
          <a href="https://web.wpi.edu/Pubs/E-project/Available/E-project-042513-140309/unrestricted/ASL_MQP_jpa.pdf" id='formulaLink' target='_blank' rel="noopener noreferrer">click here for more information about how the formula was derived</a>
          <p id="text4">As you can see, not only skill level, but also overall health and number of games played can play a huge role in a players success.</p>
          <p>Now that you understand how the information is derived, let's take a look on how past picks have faired over the years</p>
          <h2 id="text3">do your picks stack up to their potential?</h2>
          <p id="text5">Click on a year to see player data. Sorting is available based on draft and redraft picks. For more information on a player, simply click on their name</p>
          <p id="text6">It may take a few seconds to load your data</p>
        </div>
        <div id="result">
          <Navbar>
            <Nav>
              <NavItem eventkey={1} onClick={this.getStats2008}>2008</NavItem>
              <NavItem eventkey={1} onClick={this.getStats2009}>2009</NavItem>
              <NavItem eventkey={1} onClick={this.getStats2010}>2010</NavItem>
              <NavItem eventkey={1} onClick={this.getStats2011}>2011</NavItem>
              <NavItem eventkey={1} onClick={this.getStats2012}>2012</NavItem>
              <NavItem eventkey={1} onClick={this.getStats2013}>2013</NavItem>
              <NavItem eventkey={1} onClick={this.getStats2014}>2014</NavItem>
              <NavItem eventkey={1} onClick={this.getStats2015}>2015</NavItem>
              <NavItem eventkey={2} onClick={this.getStats2016}>2016</NavItem>
              <NavItem eventkey={3} onClick={this.getStats2017}>2017</NavItem>
            </Nav>
          </Navbar>
          <div id="resultOps">
            <div id="resultTable">
              <BootstrapTable hover condensed height='400' scrollTop={'Bottom'} data={this.state.stats} selectRow={ selectRowProp } options={options} search={true}>
                <TableHeaderColumn dataField='Name' isKey={true} dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='Pick' dataSort={true} searchable={false}>Pick</TableHeaderColumn>
                <TableHeaderColumn dataField='Redraft' dataSort={true} searchable={false}>Redraft</TableHeaderColumn>
              </BootstrapTable>
            </div>
            <div id="resulttxt">
              <textarea id="txt" value={this.state.value} readOnly="true"></textarea>
              <a href={this.state.link} target="_blank" id="wiki">click here for more info</a>
              <p id="steal">{this.state.stealName} was the biggest steal with a diff of {this.state.stealDiff}</p>
              <p id="bust">{this.state.bustName} was the biggest bust with a diff of {this.state.bustDiff}</p>
              <img src={'https://en.wikipedia.org/wiki/' + this.state.firstName + '_' + this.state.lastName + '#/media/File:' + this.state.firstName + '_' + this.state.lastName + '.JPG'} alt={'image of ' + this.state.firstName + ' ' + this.state.lastName}/>
            </div>
          </div>
        </div>
        <div id="endtxt">
          <h2 id="text3">interesting findings</h2>
          <p id="text7">One of the interesting ideas I found is that most of the players drafted in the later rounds don't even make the list. In fact a bunch of undrafter players have had more success than those drafted. Take Wes Welker and Tony Romo for example. Both potentially future Hall of Famers that I don't analyze because their talent was overseen by many teams</p>
          <h2 id="text3">analyzing the biggest busts and steals over the past ten years</h2>
          <p>Based on this data, you can see that just because a player was the biggest "steal" in this instance doens't necessarily mean they had a legendary career. Most of the success can be attributed to one season over the course of the player's career.</p>
          <p id="text7">Instead in my opinion, you, in picking your next superstar, should click over each of the top players in the draft and see their progression over the years. The biggest "steals" should be who you pick up in the later rounds of your draft</p>
          <h2 id="text3">who was the best draft pick?</h2>
          <p>The player with the average best per year number of fantasy points was _______</p>
          <p id="text7">Surprised? I sure was.</p>
          <h2 id="text3">which draft class was the best based on per year fanatsy point averages</h2>
          <p id="text7">Over the last ten years, the draft class of _____ accumulated the most points averaging _____ per year.</p>
          <br></br>
          <p id="text8">Thanks to fantasy and wikipedia for providing the information necessary to come to these conclusions
          Disclaimer: I am not affiliated with the NFL or Fantasy Football, and I don't take responsibility for the picks that were based off of this data
          This was a side project to keep my mind busy because I got bored after work over the summers, and I wanted to put my skills to the test
          As of now, I have chosen to disclude undrafted players or players drafted before the last ten years. Make sure to keep these players in mind.
          For more information, get in touch: vikas.peraka@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default App;

