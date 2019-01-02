import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Poll from './Poll';
import NewQuestion from './NewQuestion';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Signin />
        {/* <Poll userId="johndoe" questionId="6ni6ok3ym7mf1p33lnez" /> */}
      </div>
    );
  }
}

export default connect()(App);
