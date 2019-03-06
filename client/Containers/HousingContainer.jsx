import React, { Component } from 'react';
import ExampleComponent from '../Components/ExampleComponent.jsx';


class HousingContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <ExampleComponent />
                <ExampleComponent />
            </div>
          
        );
    }
}

export default HousingContainer;

