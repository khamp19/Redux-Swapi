import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';
import { getChars } from '../actions';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.getChars();
    console.log(this.props);
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <header>Hello!</header>
        </div>
          <div>
            {this.props.getting_data ? <h4>GETTING CHARACTERS</h4> : null}
            {this.props.error ? <h4>CANNOT GET CHARACTERS: {this.props.error}</h4> : null }
            {this.props.chars.map((char, i) => {
              return(
                <div>
                  <li key={i}>{char.name}</li>
                </div>
              )
            })}
          </div>
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
const mapStatetoProps = (state) => {
  console.log(state);
  return {
    getting_data: state.getting_data,
    error: state.error,
    chars: state.chars
  }
}
// the chars and the fetching boolean
export default connect(mapStatetoProps, {getChars})(App);

