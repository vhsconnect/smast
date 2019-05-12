import React, { Component } from 'react';
import HousingContainer from './HousingContainer.jsx';
import lib from '../../lib/functions'

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
		this.getPlayers = lib.getPlayers.bind(this);
		this.generateBrackets = lib.generateBrackets.bind(this);
		this.sendWinnersUp = lib.sendWinnersUp.bind(this);
		this.declareWinner = lib.declareWinner.bind(this);
	}

	render() {
		if (this.state.anounceWinner === "") {
			return (
				<div>
					<form onSubmit={this.generateBrackets}>
						<p>Input players here - 4, 8 or 16 players - use comma-seperated-values</p>
						<input
							className="userInput"
							type="text"
							name="playerNumber"
							value={this.state.playerNamesTemp}
							onChange={this.getPlayers}
						/>
						<hr />
						<input className="mainButton" type="submit" value="Launch" />
					</form>
					< HousingContainer
						string={this.state.playerNamesString}
						functionality={this.sendWinnersUp}
						round={this.state.round}
						pokeId={this.state.pokeId}
					/>
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