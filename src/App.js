import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Homepage from './pages/Homepage/Homepage.component'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/meetups" component={Homepage} /> 
      </Switch>
    </>
  );
}

export default App;
