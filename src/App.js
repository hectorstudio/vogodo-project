import React from 'react';
import Header from './containers/Header';
import Home from './containers/Home';
import Footer from './containers/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Raleway:100,300,400,600,700,800|Arvo:400&display=swap"
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
