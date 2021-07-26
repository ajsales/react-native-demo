import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Image,
} from 'react-native';

export default function WelcomeScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/background.jpg')}
				resizeMode="cover"
				style={styles.background}
			>
				<View style={styles.logoContainer}>
					<Image
						source={require('../assets/logo-red.png')}
						style={styles.logo}
					/>
					<Text>Sell What You Don't Need</Text>
				</View>

				<View style={[styles.button, styles.loginButton]}/>
				<View style={[styles.button, styles.registerButton]}/>
			</ImageBackground>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	logoContainer: {
		top: 80,
		position: 'absolute',
		alignItems: 'center'
	},
	logo: {
		height: 100,
		width: 100,
	},
	button: {
		width: '100%',
		height: 65
	},
	loginButton: {
		backgroundColor: '#fc5c65'
	},
	registerButton: {
		backgroundColor: '#4ECDC4'
	}
});