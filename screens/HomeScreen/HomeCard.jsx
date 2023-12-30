import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BalanceCard from './BalanceCard';
import HomeCardMessage from './HomeCardMessage';
import * as Font from 'expo-font';
import useLoadFontAsync from './../../utils/LoadFonts';
import { MaskedView } from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const HomeCard = ({ balance }) => {
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		useLoadFontAsync().finally(() => {
			setFontLoaded(true);
		});
	}, []);

	if (!fontLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<View className='container p-8 bg-cc-gray-700'>
			{/* <MaskedViewIOS maskElement={<Text style={styles.text} />}> */}
			<LinearGradient
				colors={['#36373b', '#28292b']}
				className='rounded-2xl bg-cc-gray-500 shadow-2xl '
			>
				<BalanceCard balance={balance} />
				<HomeCardMessage balance={balance} />
			</LinearGradient>
			{/* </MaskedViewIOS> */}
		</View>
	);
};

export default HomeCard;
