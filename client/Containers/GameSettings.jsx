import React, { Component } from 'react';
import HousingContainer from './HousingContainer.jsx';

class GameSettings extends Component {
	constructor(props) {
		super(props);
		this.jsxArray = [];
		this.state = {
			anounceWinner: "",
			numPlayers: "",
			playerNames: [],
			playerNamesString: "",
			playerNamesTemp: "",
			totalPlayers: 0,
			round: 1,
			winnersString: "",
			winnersArray: [],
			maxRound: 4,
		};

		this.getPlayers = this.getPlayers.bind(this);
		this.generateBrackets = this.generateBrackets.bind(this);
		this.sendWinnersUp = this.sendWinnersUp.bind(this);
	}

	componentDidMount() {
		fetch('/')
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}


	getPlayers(e) {
		console.log('called from getPlayers')
		this.setState({ playerNamesTemp: e.target.value })
	}

	generateBrackets(e) {
		this.setState({ playerNamesString: this.state.playerNamesTemp, totalPlayers: this.state.playerNamesTemp.split(", ").length })
		e.preventDefault();
	}

	sendWinnersUp(e) {

		let winner = e.target.value;
		let pokemon = e.target.pokeId;
		let toBePushed = this.state.winnersArray.push(winner);
		this.winnersArray = toBePushed.slice; //wtf?

		if (this.state.winnersArray.length === (this.state.totalPlayers) / 2) {
			if (this.state.totalPlayers / 2 === 1) {
				this.declareWinner(winner)
			} else {
				this.setState({ playerNamesString: this.state.winnersArray.join(", "), round: this.state.round++, totalPlayers: this.state.totalPlayers / 2, winnersArray: [].slice() })
			}
		}
	}

	declareWinner(x) {
		this.setState({ anounceWinner: x })
	}


	render() {
		if (this.state.anounceWinner == "") {
			return (
				<div>

					<form onSubmit={this.generateBrackets}>
						<p>Input players here - 4, 8 or 16 players - use comma-seperated-values</p>
						<input className="userInput" type="text" name="playerNumber" value={this.state.playerNamesTemp} onChange={this.getPlayers} />
						<hr />
						<input className="mainButton" type="submit" value="Launch" />

					</form>

					< HousingContainer string={this.state.playerNamesString} functionality={this.sendWinnersUp} round={this.state.round} pokeId={this.state.pokeId} />
				</div>
			)
		} else {
			return (
				<h1>{this.state.anounceWinner} wins ༼ つ ◕_◕ ༽つ </h1>
			)
		}
	}
}

export default GameSettings 