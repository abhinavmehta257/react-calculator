import Display from "./components/display";
import NumberPanle from "./components/numberPanle";
import calculate from "./logic/logic";
import React from "react";

export default class App extends React.Component {

  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render(){return (
    <div className="container">
      <Display value={this.state.next ||this.state.total ||  '0'} /> 
      <NumberPanle clickHandler={this.handleClick}/>
    </div>
  );}
}
