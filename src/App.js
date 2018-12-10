import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import MainContent from './components/main-content';
import Counter from './components/counter';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header firstname="panday" lastname="din"/>
        <MainContent para="This is a paragraph"/>
        <Counter/>
        <Footer cp="copyright 2018"/>

      </div>
    );
  }
}

export default App;
