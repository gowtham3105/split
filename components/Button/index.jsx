import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
// import { Icon, MD3Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Button as NativeButton } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';

const NTBtn = styled(NativeButton)

const Button = ({ text, onPress }) => {
	return (
		<NTBtn
			className='bg-emerald-600 inline-flex text-white justify-center 1'
			buttonStyle={{ backgroundColor: '#059669' }}
			containerStyle={{ margin: 5, borderRadius: 8, maxWidth: 80, width:'80%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}
			disabledStyle={{
				borderWidth: 2,
				borderColor: '#00F',
			}}
			disabledTitleStyle={{ color: '#00F' }}
			linearGradientProps={null}
			icon={<Icon name='bell' color='white' size={12} />}
			// iconContainerStyle={{ background: '#000' }}
			loadingProps={{ animating: true }}
			loadingStyle={{}}
			onPress={() => alert('click')}
			title='Remind'
			titleProps={{}}
			titleStyle={{ marginHorizontal: 5, fontSize:12, fontFamily:'Roboto' }}
		/>

		// <PaperButton
		// 	mode='elevated'
		// 	icon='bell'
		// 	onPress={onPress}
		// 	className='bg-emerald-600 inline-flex text-white justify-center 1'
		// 	textColor='white'
		// 	style={{ borderRadius: 8, color: 'white' }}
		// />
	);
};

export default Button;
