import React, { Component } from 'react';
import './App.css';
import Comitment from './components/comitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beIsipareigojimu: true,
      mobile1: {},
      allPlans: [],
    };
  }

  handleRadio = (val) => {
    console.log('radio was pressed');
    console.log(val);
    // jei gaunu commit tai nustatau busena  i atitinkama
    if (val === 'commit') {
      this.setState({ beIsipareigojimu: false });
    } else {
      this.setState({ beIsipareigojimu: true });
    }
    // arba priesingai
  };

  async componentDidMount() {
    const { data: dataAxios } = await axios.get('data/plan1.json');
    console.log(dataAxios);
    this.setState({ mobile1: dataAxios });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Mobiliojo ryšio planai</h1>
          <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
          <div className="controls d-flex">
            <Comitment handleRadio={this.handleRadio} noCommitment={this.state.beIsipareigojimu} />
            <HaveServices />
          </div>
          <main className="plan-cards">
            <MobilePlan beIsipareigojimu={this.state.beIsipareigojimu} plan={this.state.mobile1} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;