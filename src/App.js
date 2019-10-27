import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Header from "./components/Header/Header.component";
import Homepage from './pages/Homepage/Homepage.component';
import { fetchMeetups } from './redux/meetup/meetup.actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchMeetups();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/"> <Homepage /> </Route> 
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMeetups: () => dispatch(fetchMeetups())
})

export default connect(null, mapDispatchToProps)(App)
