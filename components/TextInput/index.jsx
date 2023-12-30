import {
	View,
	Text,
	Image,
	TextInput,
	Pressable,
	StyleSheet,
} from 'react-native';
import colors from '../utils/colors';
import React, { useState, useRef } from 'react';

const PhoneNumberInput = ({
	readOnly,
	value,
	error,
	onChange,
	inputSize,
	placeholder,
	inpRef,
	highlight,
	setOnHighlight,
}) => {
	const styles = StyleSheet.create({
		innerCont: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			paddingLeft: 20,
			alignItems: 'center',
			width: '100%',
			elevation: 1,
			borderRadius: 15,
			backgroundColor: readOnly ? '#D5E1DB' : error ? '#FFECF0' : '#E0F3F0',
		},
		wrapper: {
			flexDirection: 'column',
			justifyContent: 'center',
			width: inputSize === 'large' ? 400 : 306,
			height: inputSize === 'large' ? 64 : 54,
			alignItems: 'center',
			borderRadius: 20,
			padding: 2,
			gap: 10,
		},

		container: {
			paddingHorizontal: inputSize === 'large' ? 5 : 8,
			width: inputSize === 'large' ? 406 : 306,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},

		label: {
			fontSize: inputSize === 'large' ? 18 : 12,
			paddingHorizontal: inputSize === 'large' ? 18 : 10,
			width: '100%',
			fontFamily: 'Poppins_600SemiBold',
			textAlign: 'left',
		},

		countryCodeLabel: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
			paddingLeft: inputSize === 'large' ? 20 : 10,
			paddingRight: inputSize === 'large' ? 30 : 10,
		},

		numberInput: {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			fontSize: inputSize === 'large' ? 24 : 20,
			paddingHorizontal: 10,
			minWidth: 200,
			paddingTop: 5,
			height: '100%',
			fontFamily: 'Poppins_600SemiBold',
		},
	});

	const internalChangeHandler = (text) => {
		const isNaN = Number.isNaN(+text);
		if (isNaN) return;
		onChange(text);
	};

	return (
		<View
			style={styles.container}
			behavior={'padding'}
			keyboardVerticalOffset={65}
		>
			<Text style={styles.label}>Enter your Phone Number</Text>
			<View
				style={[
					styles.wrapper,
					{
						borderWidth: 1.5,
						borderColor: readOnly
							? 'transparent'
							: highlight
							? error
								? colors['red-400']
								: colors['green-400']
							: 'transparent',
					},
				]}
			>
				<View style={styles.innerCont}>
					<View style={styles.countryCodeLabel}>
						<Image
							source={require('../assets/IND.png')}
							style={{
								borderRadius: 3,
								height: 24,
								width: 32,
								marginRight: 4,
							}}
						/>
						<Text
							style={{
								fontSize: inputSize === 'large' ? 24 : 20,
								fontFamily: 'Poppins_600SemiBold',
								alignSelf: 'center',
								textAlign: 'center',
								height: '100%',
								marginTop: 5,
							}}
						>
							+91
						</Text>
					</View>
					<View
						style={{
							width: 1.5,
							backgroundColor: '#C3C8C8',
							alignSelf: 'center',
							height: 35,
						}}
					></View>
					<Pressable
						onPress={() => {
							if (inpRef.current) {
								setOnHighlight(true);
								inpRef.current.focus();
							}
						}}
					>
						<View pointerEvents='none'>
							<TextInput
								value={value}
								onChangeText={internalChangeHandler}
								editable={!readOnly}
								style={styles.numberInput}
								maxLength={10}
								clearTextOnFocus={false}
								textAlignVertical='center'
								ref={inpRef}
								onSubmitEditing={() => {}}
								selectionColor={colors[error ? 'red-400' : 'green-400']}
								keyboardType={'numeric'}
								placeholder={placeholder}
							/>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default PhoneNumberInput;
