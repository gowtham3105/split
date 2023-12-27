import * as Font from 'expo-font';

const useLoadFontAsync = async () => {
	try {
		await Font.loadAsync({
			Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
			'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
			'Roboto-Medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
			'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
			'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),

			// Add more fonts here
		});
	} catch (error) {
		console.log('Error loading fonts:', error);
	}
};

export default useLoadFontAsync;
