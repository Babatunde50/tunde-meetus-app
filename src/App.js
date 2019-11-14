import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header/Header.component";
import Homepage from "./pages/Homepage/Homepage.component";
import MeetupDetails from "./components/MeetupDetails/MeetupDetails.component";
import WithSpinner from "./components/WithSpinner/WithSpinner.component";

import { fetchMeetups } from "./redux/meetup/meetup.actions";

const HomepageWithSpinner = WithSpinner(Homepage);
const MeetupDetailsWithSpinner = WithSpinner(MeetupDetails);

class App extends Component {
  componentDidMount() {
    console.log('[App] Mount')
    this.props.fetchMeetups();
  }

  render() {
    const { isLoading, errorMessage }  = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <HomepageWithSpinner isLoading={isLoading} errorMessage={errorMessage} { ...props }  />  } />
          <Route exact path="/:id" render={(props) => <MeetupDetailsWithSpinner isLoading={isLoading} errorMessage={errorMessage} { ...props }  />  } />
        </Switch>
      </>
    );
  }
}


const mapStateToProps = state => ({
  isLoading: state.meetup.isLoading,
  errorMessage: state.meetup.errorMessage
})

const mapDispatchToProps = dispatch => ({
  fetchMeetups: () => dispatch(fetchMeetups())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);