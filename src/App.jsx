import React, { Component } from 'react';
import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlans from './components/mobilePlan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Mobiliojo ryšio planai</h1>
        <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
        <div className="controls">
          <Commitment />
          <HaveServices />
        </div>
        <main className="plan-cards">
          <MobilePlans />
        </main>
      </div>
    );
  }
}

export default App;