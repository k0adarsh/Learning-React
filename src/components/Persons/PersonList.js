// import React, { Component } from 'react';
// import person from './Person/Person';

// class PersonList extends Component {

//     state = {
//         persons: [
//             { name: "Adarsh", age: 22 },
//             { name: "Priyanka", age: 24 },
//             { name: "Deepika", age: 25 }
//         ],
//         doShow: false
//     };
//     switchNameHandler = () => {
//         const val = this.state.doShow;
//         this.setState({
//             doShow: !val
//         })
//     };
//     deletePerson = (personIndex) => {
//         const persons = [...this.state.persons];
//         persons.splice(personIndex, 1);
//         this.setState({ persons });
//     }
//     nameChangeHandler = (event, index) => {

//         const persons = [...this.state.persons];
//         persons[index].name = event.target.value;

//         this.setState({
//             persons: persons
//         })
//     };
// }


