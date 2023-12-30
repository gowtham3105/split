import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';


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

const BalanceCard = ({ balance }) => {
	return (
		<View className='p-4'>
			{balance > 0 ? (
				<PositiveBalance balance={balance} />
			) : (
				<NegativeBalance balance={balance} />
			)}
		</View>
	);
};

export default BalanceCard;
