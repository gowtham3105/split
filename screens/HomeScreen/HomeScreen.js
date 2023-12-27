import React from 'react';
import { View, Text } from 'react-native';
import BalanceCard from './BalanceCard';


const HomeScreen = () => {
	return (
		<View>
			<View className='container'>
				<BalanceCard balance={20567} />
			</View>
		</View>
	);
};

export default HomeScreen;
