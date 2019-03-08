import React, { Component } from 'react';
import {render} from 'react-dom';
import GameSettings from './Containers/GameSettings.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
    <div className={"welcome"}>
        <h1>S.M.A.S.T</h1>
        <GameSettings />
    </div>        
    
        );
    }
}

export default App; 



