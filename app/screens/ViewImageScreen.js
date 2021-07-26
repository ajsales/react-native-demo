import React from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';

export default function ViewImageScreen() {
	return (
		<View style={styles.container}>
			<View style={[styles.button, styles.closeButton]}/>
			<View style={[styles.button, styles.deleteButton]}/>
			
      <Image
				source={require('../assets/chair.jpg')}
				resizeMode="contain"
				style={styles.image}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%'
	},
	button: {
		position: 'absolute',
		height: 55,
		width: 55,
		top: 50
	},
	closeButton: {
		backgroundColor: '#fc5c65',
		left: 20
	},
	deleteButton: {
		backgroundColor: '#4ECDC4',
		right: 20
	}
});
