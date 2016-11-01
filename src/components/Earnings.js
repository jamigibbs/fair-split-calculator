import React, { Component } from 'react';

class Earnings extends Component {

  constructor(props){
    super(props);

    this.state = {
      primaryEarner: 0,
      secondaryEarner: 0
    }
  }

  handleChange(name, val){
    switch(name) {
      case "primaryEarner":
        this.setState({primaryEarner: val});
        break;
      case "secondaryEarner":
        this.setState({secondaryEarner: val});
        break;
      default:
        console.log("No earning state to assign in Earnings component");
    }

    this.props.earnersValue(name, val)
  }

  render(){
    return (
      <div className="row earnings">

        <div className="col-lg-6">
          <h4>First Income</h4>
          <span>$ </span>
          <input
            type="text"
            value={this.state.primaryEarner}
            onChange={e => this.handleChange('primaryEarner', e.target.value)} />
        </div>

        <div className="col-lg-6">
          <h4>Second Income</h4>
          <span>$ </span>
          <input
            type="text"
            value={this.state.secondaryEarner}
            onChange={e => this.handleChange('secondaryEarner', e.target.value)}/>
        </div>

      </div>
    );
  }
}

export default Earnings;
