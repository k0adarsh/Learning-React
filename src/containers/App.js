import React, { Component } from 'react';
import styleClasses from './App.css';
import Person from '../components/Persons/Person/Person';
// import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Adarsh", age: 22 },
      { name: "Priyanka", age: 24 },
      { name: "Deepika", age: 25 }
    ],
    doShow: false
  };

  showHideHandler = () => {
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
  };

  render() {
    let personDiv = null;
    const classes = [];
    if (this.state.persons.length === 2)
      classes.push(styleClasses.turnRed);
    if (this.state.persons.length === 1)
      classes.push(styleClasses.turnBlue);
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
      )
    }
    return (
      <div className={styleClasses.App}>
        <h1 className={classes.join(' ')}>Hello My First React App</h1>
        <button onClick={this.switchNameHandler}>Show it</button>
        {personDiv}
      </div>
    );
  }
}

export default App;
