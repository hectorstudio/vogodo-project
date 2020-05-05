import React from "react";
import Home from "./containers/Home";
import Property from "./containers/Property";
import SubmitProperty from "./containers/SubmitProperty";
import Header from "./section/Layout/Header";
import Footer from "./section/Layout/Footer";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ROUTES from "./constants/Routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ROUTES.find_property}  component={Property} title="Property Container"></Route>
          <Route exact path={ROUTES.home} component={Home} title="Home Container"></Route>
          <Route exact path={ROUTES.submit_property} component={SubmitProperty} title="Submit Container"></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
