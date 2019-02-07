import React, { Component, Fragment } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import Signin from './Signin';
import Home from './Home';
import Poll from './Poll';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';
import Signup from './Signup';
import NoMatch from './NoMatch';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: 'lightseagreen'}} />
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/questions/:question_id" exact component={Poll} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
              <Redirect from="/questions/:question_id" to="/404page" />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
