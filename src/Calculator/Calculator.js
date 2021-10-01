import { Component } from "react";

import Panel from "../components/Panel/Panel";
import Number from "../components/Number";
import Operator from "../components/Operator";
import Screen from "../components/Screen";
import './Calculator.css';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      operator: null,
      second: 0,
    };

  }

  handleNumberClick = (e) => {
    const number = e.target.value;
    if (!this.state.operator) {
      this.setState({ first: this.validateLength(`${this.state.first || ""}${number}`) });
    } else {
      this.setState({ second: this.validateLength(`${this.state.second || ""}${number}`) });
    }
  };

  handleOperatorClick = (e) => {
    const operator = e.target.value;
    if (operator === "=") {
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: 0 });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: isFinite(first / second)? first/second : first, second: 0 });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: 0 });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: 0 });
      }
    } else if (operator === "clear") {
      this.setState({ first: 0, second: 0, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second  || this.state.first;

  validateLength = (v) => {
    if (v && parseInt(v) === 0) return "0";
    if (v && v.length > 17) {
      const modified = v.substring(0, 17);
      return modified;
    }
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
          </div>
          <div className="operators">
            <Operator value="+" onClick={this.handleOperatorClick} />
            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
            <Operator value="clear" onClick={this.handleOperatorClick} />
          </div>
        </div>
      </Panel>
    );
  }
}

export default Calculator;
