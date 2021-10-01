import React, { Component } from 'react';
import './Panel.css';
import PropTypes from 'prop-types';

class Panel extends Component {
  render() {
    
    const { border, children }  = this.props;
    
    return <div className={!!border ? "card" : '' }>{children}</div>;
  }
}

Panel.propTypes = {
  border: PropTypes.bool
}

export default Panel;
