// header.js


// Import lib to help create a component
import React from 'react';
import { Text, View } from 'react-native';


// make component

const Header = (props) => {
	const {textStyle, viewStyle} = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F8F8F8'
	},
	textStyle: {
		fontSize: 20

	}
}

// Make component usable to other parts of the app

export { Header };