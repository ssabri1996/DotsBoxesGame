import React from 'react';
import "./App.css";
import Game from "./component/dotsGrid"
import {db } from './services/firebase'
import {BrowserRouter as Router , Route ,NavLink} from 'react-router-dom'
import Home from './component/home'
import LogIn from './component/logIn'
import 'reactstrap'
class App extends React.Component{

state ={
  players :null,
  user:""
}

componentDidMount(){
db.collection('Games')
.get()
.then(snapshot => {
  const game = []
  snapshot.forEach( doc => {
    const data = doc.data()
    game.push(data)
  })
  this.setState({
    players : game
  })
//console.log(snapshot)
})
.catch(error => console.log(error))
}

addNewGame  = () =>{
  db.collection('Games')
  .add({
    Loser : 'player2',
    Winner : 'player1',
    date : new Date(),
    idGame:2,
    score:44

  })
console.log("Game adedd succefully !")

}
 nav() {
  return (
    <div>
 
      <Router>
        <button>
          <NavLink to="/">Home</NavLink>
          </button>
          <button>
          <NavLink to="/logIn">LogIn</NavLink>
          </button>
          <button>
          <NavLink to="/Game">Play</NavLink>
          </button>
        <Route exact path="/" component={Home} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/game" component={Game}></Route>
      
      </Router>
    </div>
  )
}

  render(){
  
    return(

<div>
  {this.nav()}     
      
</div>
    )
      }
    }

export default App

 