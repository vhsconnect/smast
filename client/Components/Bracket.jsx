import React, { Component } from 'react';


//advanceWinner should modify the string in the main state until half of the original players have been marked as winners 



const Bracket = (props) => {
   
        console.log('called from bracket')
        let name = props.onePlayerName
        let aclass = props.className
        let useIt = props.functionality
        let pokeLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + props.pokeId + '.png'

        if (name === ""){
            return(<div></div>)
        } else {
            return (
            <div className={"brackets"} >
                <div className={aclass}>
                <img className={"thumb"} src={pokeLink}/>
                <button className={"game-button"} value={name} pokeId={props.pokeId} onClick={useIt}>{name}</button>
                </div>
            </div>    
            )}      

    }

export default Bracket;