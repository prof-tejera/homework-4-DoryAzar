import { Component } from 'react';
import Button from './Button/Button';
import PropTypes from 'prop-types';

class Operator extends Component {
  render() {
    return (
      <Button {...this.props}>
        {this.props.value}
      </Button>
    );
  }
}

Operator.propTypes =  {
  value: PropTypes.oneOf(['+', '-', 'x', '=', '/', '+/-', 'clear']).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Operator;
