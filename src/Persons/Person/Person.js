import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <h1>Name : {props.name}</h1>
            <button onClick={props.deleteClick}>Delete Me</button>
            <p>Age : {props.age}</p>
            <input type="text" onChange={props.nameChanger} />
        </div>
    )
}

export default person;