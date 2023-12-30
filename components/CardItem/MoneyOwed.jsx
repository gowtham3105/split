import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoneyOwed = ({ amount }) => {


	return (
		<View className='container flex flex-col '>
			<View className=''>
				<Text className='text-gray-500 font-roboto text-xs text-right'>
					owes you
				</Text>
			</View>
			<View className=''>
				{amount ? (
					<Text className=' text-base font-roboto font-semibold text-emerald-700 text-right'>
						{'₹ ' +
							amount.toLocaleString('en-IN', {
								maximumFractionDigits: 2,
								minimunFractionDigits: 2,
							})}
					</Text>
				) : (
					''
				)}
			</View>
		</View>
	);
};

export default MoneyOwed;
