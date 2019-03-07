import React, { Component } from 'react';


const Bracket = (props) => {
    console.log('called from bracket')
    let name = props.onePlayerName
    return (
    <div>
        <h2>{name}</h2>
    </div>
)

}

export default Bracket;