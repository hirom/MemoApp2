import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
} from "react-native";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

//追加対応！（Web版だとKeyboardSafeViewがうまく動かないため分岐を追加）
import { Platform } from "react-native";

export default function MemoCreateScreen(props) {
	const { navigation } = props;
	return (
		<KeyboardSafeView style={styles.container} behavior="height">
			<View style={styles.inputContainer}>
				<TextInput
					multiline
					style={styles.input}
					onSubmitEditing={Keyboard.dismiss}
				/>
			</View>
			<CircleButton
				name="check"
				onPress={() => {
					navigation.goBack();
				}}
			/>
		</KeyboardSafeView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		paddingHorizontal: 27,
		paddingVertical: 32,
		flex: 1,
	},
	input: {
		flex: 1,
		textAlignVertical: "top",
		fontSize: 16,
		lineHeight: 24,
	},
});
