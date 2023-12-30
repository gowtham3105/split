import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MoneyOwed from './MoneyOwed';
import { Image } from '@rneui/themed';
import { styled } from 'nativewind';



const StyledImage = styled(Image);

const CardItem = ({ name, amount, iconSource }) => {
	return (
		<View className='flex flex-row items-center justify-center mx-3 my-3 '>
			<View className='w-1/12 flex justify-center items-center mr-4'>
				<StyledImage
					source={{
						uri: iconSource,
					}}
					// containerStyle={styles.item}
					PlaceholderContent={<ActivityIndicator />}
					className='w-10 h-10 rounded-full  '
				/>
			</View>
			<View className='w-7/12'>
				<Text className=' text-base font-normal' numberOfLines={1}>
					{name}
				</Text>
			</View>
			<View className='inline-flex w-3/12 ml-2'>
				<MoneyOwed amount={amount} />
			</View>
		</View>
	);
};

export default CardItem;
