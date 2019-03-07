import React, { Component } from 'react';
import {render} from 'react-dom';
import GameSettings from './Containers/GameSettings.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
    <div>
        <h1>Welcome To SMAST, Goodluck to everyone</h1>   
        <GameSettings />
    </div>        
    
        );
    }
}

export default App; 



