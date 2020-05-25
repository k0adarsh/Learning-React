import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <h1>Name : {props.name}</h1>
            <p onClick={props.deleteClick}>Age : {props.age}</p>
            <input type="text" onChange={props.changedName} />
        </div>
    )
}

export default person;