import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Adarsh", age: 22 },
      { name: "Priyanka", age: 24 },
      { name: "Deepika", age: 25 }
    ],
    doShow: false
  };

  switchNameHandler = () => {
    //console.log('I am changing state on click');
    const val = this.state.doShow;
    this.setState({
      doShow: !val
    })
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
    // this.setState({
    //   persons: [
    //     { name: event.target.value, age: 22 },
    //     { name: event.target.value, age: 24 },
    //     { name: event.target.value, age: 25 }
    //   ]
    // })
  };

  render() {
    let personDiv = null;
    const classes = [];
    if (this.state.persons.length === 2)
      classes.push('turnRed');
    if (this.state.persons.length === 1)
      classes.push('turnBlue');
    if (this.state.doShow) {
      personDiv = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              deleteClick={() => this.deletePerson(index)}
              nameChanger={(event) => this.nameChangeHandler(event, index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
        // <Person name={this.state.persons[0].name}
        //   age={this.state.persons[0].age}
        //   click={this.switchNameHandler}
        //   changedName={this.nameChangeHandler} />

        // <Person name={this.state.persons[1].name}
        //   age={this.state.persons[1].age}
        //   click={this.switchNameHandler}
        //   changedName={this.nameChangeHandler} />

        // <Person name={this.state.persons[2].name}
        //   age={this.state.persons[2].age}
        //   click={this.switchNameHandler}
        //   changedName={this.nameChangeHandler} />
      )
    }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hello My First React App</h1>
        <button onClick={this.switchNameHandler}>Show it</button>
        {personDiv}
      </div>
    );
  }
}

// const app = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Adarsh", age: 22 },
//       { name: "Priyanka", age: 24 }
//     ]
//   });
//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "Adarsh Kunwar", age: 24 },
//         { name: "Priyanka Singh", age: 32 }
//       ]
//     });
//     //console.log('I am clicked');
//   };
//   const nameChangeHanlder = (event) => {
//     setPersonState({
//       persons: [
//         { name: event.target.value, age: 24 },
//         { name: event.target.value, age: 24 }
//       ]
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Hello My First React App</h1>
//       <button onClick={switchNameHandler}>Click It</button>
//       <Person name={personState.persons[0].name}
//         age={personState.persons[0].age}
//         click={switchNameHandler}
//         changedName={nameChangeHanlder} />
//       <Person name={personState.persons[1].name}
//         age={personState.persons[1].age} />
//     </div>
//     //React.createElement('div', { className: 'App' }, React.createElement('h1', null, "It is transformed"))
//   );
// }


export default App;
