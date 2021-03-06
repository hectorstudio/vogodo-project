import React from "react";
import { Provider } from "react-redux";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Property from "./containers/Property";
import SubmitProperty from "./containers/SubmitProperty";
import PropertyDetail from "./containers/PropertyDetail";
import AccountContainer from "./containers/AccountContainer";
import FindManager from "./containers/FindManager";
import Header from "./section/Layout/Header";
import Footer from "./section/Layout/Footer";
import History from "./constants/History";
import "./App.scss";
import { Router, Switch, Route } from "react-router-dom";
import ROUTES from "./constants/Routes";
import store from "./redux/service";
import ManagersListing from "./containers/ManagersListing";
import AboutContainer from "./containers/AboutContainer";
import FAQContainer from "./containers/FAQContainer";
import TermsContainer from "./containers/TermsContainer";
import ManagerDetail from "./containers/ManagerDetail";
import PrivacyContainer from "./containers/PrivacyContainer";
function App() {
  return (
    <Provider store={store}>
      <div className={`App`}>
        <Router history={History}>
          <Header />
          <Switch>
            <Route
              exact
              path={ROUTES.find_property}
              component={Property}
              title="Property Container"
            ></Route>
            <Route
              exact
              path={ROUTES.home}
              component={Home}
              title="Home Container"
            ></Route>
            <Route
              exact
              path={ROUTES.submit_property}
              component={SubmitProperty}
              title="Submit Container"
            ></Route>
            <Route
              exact
              path={ROUTES.property_detail}
              component={PropertyDetail}
              title="PropertyDetail Container"
            ></Route>
            <Route
              exact
              path={ROUTES.signup}
              component={SignUp}
              title="SignUp Container"
            ></Route>
            <Route
              exact
              path={ROUTES.account}
              component={AccountContainer}
              title="Account Container"
            ></Route>
            <Route
              exact
              path={ROUTES.findmanager}
              component={FindManager}
              title="Find a Property Manager"
            ></Route>
            <Route
              exact
              path={ROUTES.managerslisting}
              component={ManagersListing}
              title="List Managers"
            ></Route>
            <Route
              exact
              path={ROUTES.managerdetail}
              component={ManagerDetail}
              title="Manager Detail"
            ></Route>
            <Route
              exact
              path={ROUTES.aboutus}
              component={AboutContainer}
              title="About Us"
            ></Route>
            <Route
              exact
              path={ROUTES.terms}
              component={TermsContainer}
              title="FAQs"
            ></Route>
            <Route
              exact
              path={ROUTES.privacy}
              component={PrivacyContainer}
              title="FAQs"
            ></Route>
            <Route
              exact
              path={ROUTES.faq}
              component={FAQContainer}
              title="Terms of Services"
            ></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
