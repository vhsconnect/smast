import React, {Component} from 'react';
import {render} from 'react-dom';
import ExampleComponent from './Components/ExampleComponent.jsx';
import HousingContainer from './Containers/HousingContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
    <div>
        <h1>Welcome To SMAST</h1>   
        <HousingContainer />  
        <ExampleComponent />
    </div>        
    
        );
    }
}

export default App; 



