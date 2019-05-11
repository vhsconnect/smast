import React, { Component } from 'react';
import Bracket from '../Components/Bracket.jsx';
import lib from '../../lib/functions'


let cache = {}

class HousingContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let	playersArr = lib.randomize(this.props.string.split(", ")).slice();

		let functionalityVariable = this.props.functionality;
		let round = this.props.round
		let players = playersArr.map((each, index) => {
			let randomPokeGenerator = Math.floor(Math.random() * 150)
			if (!cache[each]) {
				cache[each] = randomPokeGenerator;
			}
			return React.createElement(Bracket, {
				onePlayerName: each,
				key: index + 1,
				className: 'cl' + (index + 1),
				functionality: functionalityVariable,
				pokeId: cache[each]
			})
		})

		return (
			<div className="play-area">
				{players.slice()}
			</div>
		);
	}
}

export default HousingContainer;

