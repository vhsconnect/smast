const functions = {}
import { setState } from 'react'

functions.randomize = (arr) => {
 return arr.sort((a,b) => Math.random() - Math.random())
}

functions.getPlayers = function(e) {
  this.setState({ playerNamesTemp: e.target.value })
}
functions.generateBrackets = function(e) {
  this.setState({ 
    playerNamesString: this.state.playerNamesTemp, 
    totalPlayers: this.state.playerNamesTemp.split(", ").length 
  })
  e.preventDefault();
}

functions.sendWinnersUp = function(e) {
  let winner = e.target.value;
  this.state.winnersArray.push(winner);
  if (this.state.winnersArray.length === (this.state.totalPlayers) / 2) {
    if (this.state.totalPlayers / 2 === 1) {
      this.declareWinner(winner)
    } else {
      this.setState({
        playerNamesString: this.state.winnersArray.join(", "),
        round: this.state.round + 1,
        totalPlayers: this.state.totalPlayers / 2,
        winnersArray: []
      })
    }
  }
}

functions.declareWinner = function(x) {
  this.setState({ anounceWinner: x })
}


export default functions;

