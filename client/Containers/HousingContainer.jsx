import React, { Component } from 'react';
import Bracket from '../Components/Bracket.jsx';


class HousingContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.cache = {};
	}

	randomize(arr) {
		let newArr = [];
		arr.forEach((value, index) => {
			newArr.push({ player: value, aNumber: (Math.random() * 100) })
		})
		newArr.sort(function (a, b) { return b.aNumber - a.aNumber })
		let lastArr = [];
		newArr.forEach((value) => { lastArr.push(value.player) })
		return lastArr
	}

	render() {
		console.log('props', this.props.functionality)
		this.playersArr = this.randomize(this.props.string.split(", ")).slice();

		let functionalityVariable = this.props.functionality;
		let round = this.props.round
		this.players = this.playersArr.map((each, index) => {
			let randomPokeGenerator = Math.floor(Math.random() * 150)
			// let comp = React.createElement(Bracket);
			if (!this.cache[each]) {
				this.cache[each] = randomPokeGenerator;
			}
			return React.createElement(Bracket, {
				onePlayerName: each,
				key: index + 1,
				className: 'cl' + (index + 1),
				functionality: functionalityVariable,
				pokeId: this.cache[each]
			})
		})

		return (
			<div className="play-area">
				{this.players.slice()}
			</div>
		);
	}
}

export default HousingContainer;

