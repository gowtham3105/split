import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import useLoadFontAsync from './../../utils/LoadFonts';
import { MaskedView } from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const PositiveBalance = ({ balance }) => (
	<View className='px-2'>
		<View className='flex'>
			<Text className='text-md text-gray-500 font-roboto font-medium '>
				You've stacked up
			</Text>
			<Text className=' text-3xl py-3 font-roboto font-semibold text-emerald-700'>
				{'₹' + balance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
			</Text>
		</View>
	</View>
);

const NegativeBalance = ({ balance }) => (
	<View className='text-red-600'>
		<Text>You owe ${Math.abs(balance)}</Text>
	</View>
);

const CollectDues = () => (
	<View className='text-red-600'>
		<Text className='text-md text-gray-500 font-roboto font-medium '>
			Time to collect your dues!
		</Text>
	</View>
);

const BalanceCard = ({ balance }) => {
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
			<LinearGradient colors={['#36373b', '#28292b']} className='rounded-2xl '>
				<View className='balance-card container mx-auto shadow-2xl bg-transparent  '>
					<View className='p-4'>
						{balance > 0 ? (
							<PositiveBalance balance={balance} />
						) : (
							<NegativeBalance balance={balance} />
						)}
					</View>
					<View className='bg-cc-gray-500 p-4'>
						{balance > 0 ? (
							<CollectDues />
						) : (
							<Text className='text-md text-gray-500 font-roboto font-medium '>
								You owe ₹{Math.abs(balance)}
							</Text>
						)}
					</View>
				</View>
			</LinearGradient>
			{/* </MaskedViewIOS> */}
		</View>
	);
};

export default BalanceCard;
