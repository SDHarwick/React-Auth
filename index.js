import React from 'react';
import { AppRegistry, View } from 'react-native';
// import Header from './src/components/common/header.js';
import App from './src/App.js';


// const App = () => (
// 	<View style={{ flex: 1 }}>
// 		<Header headerText={'Auth'} />
// 	</View>
// );

AppRegistry.registerComponent('auth', () => App);
