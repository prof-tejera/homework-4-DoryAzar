import { Component } from 'react';
import Button from './Button/Button';
import PropTypes from 'prop-types';

class Number extends Component {
  render() {
    return (
      <Button  {...this.props}>
        {this.props.value}
      </Button>
    );
  }
}

Number.propTypes =  {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Number;
