import React, { Component } from 'react';

let progression = false;

const advanceWinner = (e) => {
    let winnerClass = e.target.className;
    let progression = true
    let winnerName = e.target.value;
    Bracket();
    progression = false;
}  



const Bracket = (props) => {
    if (progression === false){
        console.log('called from bracket')
        let name = props.onePlayerName
        let aclass = props.className
    
        return (
        <div className={aclass}>
            <button value={name} onClick={advanceWinner}>{name}</button>
        </div>
)
    }

    if (progression === true){
        console.log('activated progression mode');
        return (
            <div className={winnerClass + 'a'}>
            <button onClick={advanceWinner}>{winnerName}</button>
            </div>
        )

    }
    

}

export default Bracket;