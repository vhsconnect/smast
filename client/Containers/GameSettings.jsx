import React, { Component } from 'react';
import HousingContainer from './HousingContainer.jsx';

class GameSettings extends Component {
    constructor(props){
        super(props);
        
		this.jsxArray = [];
        this.state = {
            numPlayers: "",
			playerNames: [],
			playerNamesString: ""
            
        };
        this.getPlayers = this.getPlayers.bind(this); 
        this.generateBrackets = this.generateBrackets.bind(this);
    }
    getPlayers(e){
        console.log('called from getPlayers')
        this.setState({playerNamesString: e.target.value})
        
    }    
	

    generateBrackets(e){
        let string = this.state.playerNamesString;
        let returnArray = string.split(", ");
        console.log(returnArray);
        this.setState({playerNames: returnArray.slice()})
        e.preventDefault();
		}
	
        
    
    
    render(){
        return (
            <div>
                <button className="primarybtns" >Generate Tournament </button>
                <button className="primarybtns" >Load</button>
                <form onSubmit={this.generateBrackets}>
                    <label>Input players here - 4, 8 or 16 players
                    <input type="text" name="playerNumber" value={this.state.playerNamesString} onChange={this.getPlayers} />
                    </label>
                    <input type="submit" value="Submit" />                    
                </form>
				< HousingContainer playerNames={this.state.playerNames} string={this.state.playerNamesString} />
            </div>
        )
    }
}

export default GameSettings 