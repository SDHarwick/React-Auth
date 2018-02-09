// AlbumList.js


// Import lib to help create a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';


// make component

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map( album => 
			<AlbumDetail album={album} key={album.title}/>
		);
	}

	render() {
		console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
};



// Make component usable to other parts of the app

export default AlbumList;