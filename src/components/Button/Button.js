import { Component } from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    
		const { classifiers, ...buttonAttributes } = this.props;
		
		return (
			<button 
			className={classifiers ?? "primary-button"} 
			onClick={this.props.onClick} 
			{...buttonAttributes}>
					{this.props.value}
			</button>
		)
	}
}

Button.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onClick: PropTypes.func.isRequired
}

export default Button;
