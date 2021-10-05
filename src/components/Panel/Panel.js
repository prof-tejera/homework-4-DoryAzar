import React, { Component } from 'react';
import './Panel.css';
import className from 'classnames';
import PropTypes from 'prop-types';

class Panel extends Component {
  render() {
    
    const { border, children }  = this.props;

    const panelStyle = [{
      "card": !!border
    }]
    
    return <div className={className(panelStyle)}>{children}</div>;
  }
}

Panel.propTypes = {
  border: PropTypes.bool
}

export default Panel;
