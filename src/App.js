import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HammerAd from './HammerAd';
import BottomBar from './BottomBar';
import ClickBait from './ClickBait';
import CompleteArticle from './CompleteArticle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

    <main className="expanded row">
        <CompleteArticle />
        <HammerAd />
        <ClickBait />
    </main>
    <BottomBar />
        </div>
    );
  }
}

export default App;
