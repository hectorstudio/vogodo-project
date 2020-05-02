import React from "react";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
