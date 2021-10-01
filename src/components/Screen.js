import { Component } from 'react';
import Display from './Display/Display';
import PropTypes from 'prop-types';


class Screen extends Component {

  render() {
    return <Display {...this.props} type="number">{this.props.value}</Display>;
  }
}

Screen.propTypes = {
  type: PropTypes.oneOf(['number', 'text'])
}

export default Screen;
