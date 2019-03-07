import React, { Component } from 'react';
import Bracket from '../Components/Bracket.jsx';


class HousingContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            // playerNames: this.props.playerNames.slice() 
        };
        
        
    }
    
    // componentWillMount(){   
    // //  if (this.props.playerNames !== pervprops.playerNames){
    //     this.setState({playersNames: this.props.playerNames.slice()})
    // //  }   
    // }


    componentWillMount(){
        // if (this.props.playerNames !== pervprops.playerNames){
           
        // }
    }
       
    




    // let playerArray = this.props.playerNames; 
    // let renderArray = [];
    // playerArray.forEach((player)=> {
    //     renderArray.push( <Bracket onePlayerName={player}/> )
// })

    render() {
     
        
     console.log("this.props.string", this.props.string)
     this.playersArr = this.props.string.split(", ")
     // this.theNames = this.props.playerNames;
     this.players = this.playersArr.map((each, index)=>{
         // let comp = React.createElement(Bracket);
         console.log('*^&%^&#$%^');
         return React.createElement(Bracket, {
             onePlayerName: each,
             key: index + 1,
             className: 'cl' + (index + 1)
         }) 
     }) 
    
        return (

                <div className="play-area">
                    {this.players}
                </div>
          
        );
    }
}

export default HousingContainer;

