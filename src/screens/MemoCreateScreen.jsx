import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
} from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

//追加対応！（Web版だとKeyboardSafeViewがうまく動かないため分岐を追加）
import { Platform } from "react-native";

export default function MemoCreateScreen() {
	return (
		<KeyboardSafeView style={styles.container} behavior="height">
			<AppBar />
			<View style={styles.inputContainer}>
				<TextInput
					multiline
					style={styles.input}
					onSubmitEditing={Keyboard.dismiss}
				/>
			</View>
			<CircleButton name="check" />
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
