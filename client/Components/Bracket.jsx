import React, { Component } from 'react';


//advanceWinner should modify the string in the main state until half of the original players have been marked as winners 



const Bracket = (props) => {
   
        console.log('called from bracket')
        let name = props.onePlayerName
        let aclass = props.className
        let useIt = props.functionality

    
        return (
        <div className={aclass}>
            <button value={name} onClick={useIt}>{name}</button>
        </div>
)
   



}

export default Bracket;