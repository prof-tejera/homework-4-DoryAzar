import { Component } from 'react';
import './Display.css';
import className from 'classnames';
import PropTypes from 'prop-types';


class Display extends Component {

	render() {

		const {type, maxLength, ...displayAttributes} = this.props;

		const displayStyle = [{
			display: true,
			"align-right": type === 'number' 

		}];
		
		return (
			<div className="displayContainer">
				<div 
				className={className(displayStyle)} 
				{...displayAttributes} 
				/>
			</div>
		);
	}
}

Display.propTypes = {
	type: PropTypes.oneOf(['number', 'text']).isRequired
}


export default Display;
