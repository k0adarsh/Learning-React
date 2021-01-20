import React, { Component } from 'react';
import styleClasses from './App.css';
// import Person from '../components/Persons/Person/Person';
import PersonList from '../components/Persons/PersonList';
// import person from './Person/Person';

class App extends Component {
  state = {
    doShow: false
  };

  showHideHandler = () => {
    const val = this.state.doShow;
    this.setState({
      doShow: !val
    })
  };

  // deletePerson = (personIndex) => {
  //   const persons = [...this.state.persons];
  //   persons.splice(personIndex, 1);
  //   this.setState({ persons });
  // }
  // nameChangeHandler = (event, index) => {

  //   const persons = [...this.state.persons];
  //   persons[index].name = event.target.value;

  //   this.setState({
  //     persons: persons
  //   })
  // };

  render() {
    let personDiv = null;
    const classes = [];
    if (!this.state.doShow)
      classes.push(styleClasses.turnGreen);
    else
      classes.push(styleClasses.turnBlue);
    if (this.state.doShow) {
      personDiv = (
        <PersonList />
        // <div>
        //   {this.state.persons.map((person, index) => {
        //     return <Person
        //       deleteClick={() => this.deletePerson(index)}
        //       nameChanger={(event) => this.nameChangeHandler(event, index)}
        //       name={person.name}
        //       age={person.age} />
        //   })}
        // </div>
      )
    }
    return (
      <div className={styleClasses.App}>
        <h1 className={classes.join(' ')}>Hello My First React App</h1>
        <button onClick={this.showHideHandler}>Show it</button>
        {personDiv}
      </div>
    );
  }
}

export default App;
