// AlbumDetail.js

// Import lib to help create a component
import React, { Component } from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';


// make component

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const { 
		thumbnailStyle, 
		headerContentStyle, 
		thumbnailContainerStyle, 
		headerTextStyle, 
		imageStyle 
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle} 
						source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image
					style={imageStyle}
					source={{ uri: image }} 
				/>
			</CardSection>
			<CardSection>			
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	}

};


// Make component usable to other parts of the app

export default AlbumDetail;
