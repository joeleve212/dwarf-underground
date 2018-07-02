import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AuthorInfo from './AuthorInfo';
import Paragraphs from './Paragraphs';
import HammerAd from './HammerAd';
import BottomBar from './BottomBar';
import ArticleLinks from './ArticleLinks';
import ClickBait from './ClickBait';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <AuthorInfo />
        <Paragraphs />
        <ArticleLinks />
      </div>
        <HammerAd />
      <ClickBait />
    </main>
    <BottomBar />
        </div>
    );
  }
}

export default App;
