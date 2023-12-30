import React, { useState } from 'react';
import {
	View,
	Text,
	FlatList,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import HomeCard from './HomeCard';
import CardItem from '../../components/CardItem';

const HomeScreen = () => {
	const [data, setData] = useState([
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			amount: 1253.23,
			name: 'Prajwal',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
			amount: 1253.23,
			name: 'Prajwal',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d721',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai67',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
			amount: 1253.23,
			name: 'Prajwal353',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d722',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai98',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai78',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
			amount: 1253.23,
			name: 'Prajwal99',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d723',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai124',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
			amount: 12523.23,
			name: 'A.venkata Siva Sai A.venkata siva Sai12312',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f634',
			amount: 1253.23,
			name: 'Prajwal11',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d724',
			amount: 12523.23,
			name: '22',
			iconSource:
				'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		},
	]);

	return (
		<View className='container  '>
			<ScrollView>
				<HomeCard balance={20567} />
				{data.map((item, index) => {
					return (
						<TouchableOpacity onPress={() => {alert(item.amount)}} key={index}>
							<CardItem
								amount={item.amount}
								name={item.name}
								iconSource={item.iconSource}
								key={index}
							/>
						</TouchableOpacity>
					);
				})}
				{/* <FlatList
				// data={data}
				// renderItem={({ item }) => (
				// 	<CardItem
				// 		amount={item.amount}
				// 		name={item.name}
				// 		iconSource={item.iconSource}
				// 	/>
				// )}
				// keyExtractor={(item) => item.id}
			// /> */}
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
