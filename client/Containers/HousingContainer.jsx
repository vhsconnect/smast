import React, { Component } from 'react';
import Bracket from '../Components/Bracket.jsx';
import lib from '../../lib/functions'
let cache = {}

let HousingContainer = (props) => {
	let playersArr;
	console.log(props.round, 'props.round')
	props.round === 1 ? playersArr = lib.randomize(props.string.split(", ")) : playersArr = props.string.split(", ");
	let players = playersArr.map((each, index) => {
		//First Turn: if pokemonID hasnt been assigned to player, assign it then cache it
		if (!cache[each]) cache[each] = Math.floor(Math.random() * 150)

		return React.createElement(Bracket, {
			onePlayerName: each,
			key: index + 1,
			className: 'cl' + (index + 1),
			functionality: props.functionality,
			pokeId: cache[each]
		})
	})

	return (
		<div className="play-area">
			{players}
		</div>
	);
}

export default HousingContainer;

