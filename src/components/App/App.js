import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        newElement: '',
    }
    // this.handleChange = this.handleChange.bind(this); -- need without arrow functions
  }

  handleClickOne = () => {
    // dispatch is a function that needs an Action
    // This is our action
    this.props.dispatch({
      type: 'BUTTON_ONE'
    })
  }

  handleClickTwo = () => {
    this.props.dispatch({
      type: 'BUTTON_TWO'
    })
  }

  handleAddElement = () => {
    this.props.dispatch({
      type: 'ADD_ELEMENT',
      payload: this.state.newElement
    })
    this.setState({
      newElement: '',
    })
  }

  handleElementChange = () => (event) => {
    this.setState({
        newElement: event.target.value,
    })
  }

  render() {
    let someElement = '';
    if (this.props.reduxState.firstReducer != 0){
      someElement = <p>{this.props.reduxState.firstReducer}</p>
    }
    return (
      <div className="App">
      <pre>{JSON.stringify(this.props.reduxState)}</pre>
      <button onClick={this.handleClickOne}>Button One!</button>
      <button onClick={this.handleClickTwo}>Button Two!</button>
      <input type="text" value={this.state.newElement} onChange={this.handleElementChange()} placeholder="Element"/>
      <button onClick={this.handleAddElement}>Add Element</button>
      {someElement}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapReduxStateToProps)(App);
