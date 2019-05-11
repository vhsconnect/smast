import React from 'react';

const Bracket = (props) => {

	let name = props.onePlayerName
	let aclass = props.className
	let useIt = props.functionality
	let pokeLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + props.pokeId + '.png'

	if (name === "") {
		return (<div></div>)
	} else {
		return (
			<div className={"brackets"} >
				<div className={aclass}>
					<img className={"thumb"} src={pokeLink} />
					<button className={"game-button"} value={name} pokeId={props.pokeId} onClick={useIt}>{name}</button>
				</div>
			</div>
		)
	}
}

export default Bracket;