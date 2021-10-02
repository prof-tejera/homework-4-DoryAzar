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
	value: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Number;
