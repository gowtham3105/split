import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen/HomeScreen';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<StatusBar
				animated={true}
				backgroundColor='#18191b'
				barStyle='default'
				showHideTransition='fade'
			/>
			<SafeAreaView className='flex-1 bg-cc-gray-700'>
				<View
					style={{
						flex: 1,
					}}
				>
					<Stack.Navigator>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{ headerShown: false }}
							title='Home111'
						/>
					</Stack.Navigator>
				</View>
			</SafeAreaView>
		</NavigationContainer>
	);
}
