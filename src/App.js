import React from "react";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Property from "./containers/Property";
import SubmitProperty from "./containers/SubmitProperty";
import Header from "./section/Layout/Header";
import Footer from "./section/Layout/Footer";
import History from "./constants/History";
import "./App.scss";
import { Router, Switch, Route } from "react-router-dom";
import ROUTES from "./constants/Routes";
function App() {
  return (
    <div className="App">
      <Router history={History}>
        <Header />
        <Switch>
          <Route exact path={ROUTES.find_property}  component={Property} title="Property Container"></Route>
          <Route exact path={ROUTES.home} component={Home} title="Home Container"></Route>
          <Route exact path={ROUTES.submit_property} component={SubmitProperty} title="Submit Container"></Route>
          <Route exact path={ROUTES.signup} component={SignUp} title="SignUp Container"></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
