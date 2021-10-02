import { Component } from "react";

import Panel from "../components/Panel/Panel";
import Number from "../components/Number";
import Operator from "../components/Operator";
import Screen from "../components/Screen";
import './Calculator.css';


class Calculator extends Component {

  precision  = 17;
  state = {
    first: 0,
    operator: null,
    second: 0,
  };

  handleNumberClick = (e) => {
    const number = e.target.value;
    if (!this.state.operator) {
      this.setState({ first: this.validate(`${this.state.first || ""}${number}`) });
    } else {
      this.setState({ second: this.validate(`${this.state.second || ""}${number}`) });
    }
  };

  handleOperatorClick = (e) => {
    const operator = e.target.value;
    const first = parseFloat(this.state.first);
    const second = parseFloat(this.state.second);
    if (operator === "=") {
      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: 0 });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: isFinite(first / second)? first/second : first, second: 0 });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: 0 });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first  * second, second: 0 });
      } 
    } else if (operator === "+/-") {
        if (this.state.second !== 0) {
          this.setState({second: this.reverseSign(second)});
        } else {
          this.setState({ first: this.reverseSign(first)});
        }
    } else if (operator === "clear") {
      this.setState({ first: 0, second: 0, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second  || this.state.first;

  // Validates the number entries as supported by  the calculator
  validate = (v) => {
    
    // if string is just a ., then add 0
    if (v  && v === ".") return "0.";
    
    // if more than oone decimal point entered, ignore
    const numberArray = v.split(".");
    if (numberArray.length > 1) return numberArray.slice(0, 2).join(".") + numberArray.slice(2).join("");
    
    // if string results in 0, return 0
    if (v && parseInt(v) === 0) return "0";

    // if string starts with 0 then remove
    if (v && v.startsWith("0")) return  v.substring(1);

    // if string is more than the defined calculator precision then cut
    if (v && v.length > this.precision - 1) return v.substring(0, this.precision);
    return v;
  }

  // Reverse the sign to accommodate negative numbers
  reverseSign = (v) => {
    if (v && v !== 0) return -v;
    return v;
  }

  render() {
    return (
      <Panel border={true}>
        <Screen value={this.getScreenValue()} />
        <div className="container">
          <div>
            <Number value={0} onClick={this.handleNumberClick} />
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
            <Number value="." onClick={this.handleNumberClick} />
          </div>
          <div className="operators">
            <Operator value="+" onClick={this.handleOperatorClick} />
            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
            <Operator value="+/-" onClick={this.handleOperatorClick} />
            <Operator value="clear" onClick={this.handleOperatorClick} />
          </div>
        </div>
      </Panel>
    );
  }
}

export default Calculator;
