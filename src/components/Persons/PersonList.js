import React, { Component } from 'react';
import Person from './Person/Person';

class PersonList extends Component {
    state = {
        persons: [
            { name: "Adarsh", age: 22 },
            { name: "Priyanka", age: 24 },
            { name: "Deepika", age: 25 }
        ]
    };
    deletePerson = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons });
    }
    nameChangeHandler = (event, index) => {

        const persons = [...this.state.persons];
        persons[index].name = event.target.value;
        this.setState({
            persons: persons
        })
    };
    render() {
        return (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        deleteClick={() => this.deletePerson(index)}
                        nameChanger={(event) => this.nameChangeHandler(event, index)}
                        name={person.name}
                        age={person.age} />
                })}
            </div>
        )
    }
}
export default PersonList;

