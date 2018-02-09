/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import AlbumList from './components/AlbumList.js';


class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyDsNV-woGRZAadQBFX60GJhHXChUQ0kxmk',
	    authDomain: 'authenticat-308bc.firebaseapp.com',
	    databaseURL: 'https://authenticat-308bc.firebaseio.com',
	    projectId: 'authenticat-308bc',
	    storageBucket: 'authenticat-308bc.appspot.com',
	    messagingSenderId: '483334510357'
  });

	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			this.setState({ loggedIn: true });
		} else {
			this.setState({ loggedIn: false });
		}
	});
}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
						<View style={{ flex: 1 }}>
							<AlbumList>
							</AlbumList> 
							<Button onPress={() => firebase.auth().signOut()}>
								Log Out
							</Button>
						</View>
					);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

  render() {
    return (
      <View>
      	<Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
