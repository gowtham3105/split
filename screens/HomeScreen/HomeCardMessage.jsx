import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';

const CollectDues = () => (
	<View className='flex flex-row justify-center items-center '>
		<Text className='text-md text-gray-500 font-roboto font-medium  inline-flex w-4/6 '>
			Time to collect your dues!
		</Text>
		<View className='w-2/6 flex justify-center items-center'>
			<Button text='Remind' onPress={() => {}} className='' />
		</View>
	</View>
);

const HomeCardMessage = ({ balance }) => {
	return (
		<View className='bg-cc-gray-500 p-3'>
			{balance > 0 ? (
				<CollectDues />
			) : (
				<Text className='text-md text-gray-500 font-roboto font-medium '>
					You owe ₹{Math.abs(balance)}
				</Text>
			)}
		</View>
	);
};

export default HomeCardMessage;
