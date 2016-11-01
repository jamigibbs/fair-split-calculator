import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Earnings from './components/Earnings';
import Bills from './components/Bills';
import Results from './components/Results';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      primaryEarner: 0,
      secondaryEarner: 0,
      rent: 0,
      electric: 0,
      gas: 0,
      cable: 0,
      other: 0
    }
  }

  handleChange(name, e) {
    var change = {};
    change[name] = Number(e);
    this.setState(change);
  }

  addBills(){
    var sum = 0;

    /* Cloning the state object to remove the properties
       we don't want to include in the bills total */
    var obj = (JSON.parse(JSON.stringify(this.state)));

    delete obj.primaryEarner;
    delete obj.secondaryEarner;

    for( var el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum += parseFloat( obj[el] );
      }
    }
    return sum;
  }

  render() {
    const totalEarnings = this.state.primaryEarner + this.state.secondaryEarner;
    const totalBills = this.addBills();
    const sharePercent = totalBills / totalEarnings;

    let primaryShare = this.state.primaryEarner * sharePercent;
    let secondaryShare = this.state.secondaryEarner * sharePercent;
    primaryShare = primaryShare.toFixed(2)
    secondaryShare = secondaryShare.toFixed(2)

    return (
      <div className="container shadow">

        <Header />

        <Earnings
          earnersValue={ (name, value) => {this.handleChange(name, value)} } />

        <Bills
          billsvalue={ (name, value) => {this.handleChange(name, value)} } />

        <Results
          totalEarnings={totalEarnings}
          totalBills={totalBills}
          primaryShare={primaryShare}
          secondaryShare={secondaryShare} />

        <hr />

        <footer>Created by <a href="https://github.com/jamigibbs/fair-split-calculator">Jami Gibbs</a></footer>
      </div>
    );
  }
}

export default App;
