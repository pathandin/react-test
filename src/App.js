import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import MainContent from './components/main-content';
// import Counter from './components/counter';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header phone="9873395329" emailid="pathandin@gmail.com"/>
        <Slider />
        <MainContent para="This is a paragraph" inc="This is a another paragraph" heading="Lorem Ipsum"/>
        
        {/* <Counter/> */}
        <Footer cp="All Right Reserved Copyright 2018"/>

      </div>
    );
  }
}

export default App;
