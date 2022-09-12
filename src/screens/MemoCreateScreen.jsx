import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
} from "react-native";

import firebase from "firebase";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

//追加対応！（Web版だとKeyboardSafeViewがうまく動かないため分岐を追加）
import { Platform } from "react-native";
import { autoFocus } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";

export default function MemoCreateScreen(props) {
	const { navigation } = props;
	const [bodyText, seteBodyText] = useState("");

	function handlePress() {
		const { currentUser } = firebase.auth();
		const db = firebase.firestore();
		const ref = db.collection(`users/${currentUser.uid}/memos`);
		ref
			.add({
				bodyText: bodyText,
				updatedAt: new Date(),
			})
			.then((dockRef) => {
				console.log("Created!", dockRef.id);
				navigation.goBack();
			})
			.catch((error) => {
				console.log("Error!", error);
			});
	}
	return (
		<KeyboardSafeView style={styles.container} behavior="height">
			<View style={styles.inputContainer}>
				<TextInput
					value={bodyText}
					multiline
					style={styles.input}
					onSubmitEditing={Keyboard.dismiss}
					onChangeText={(text) => {
						seteBodyText(text);
					}}
					autoFocus
				/>
			</View>
			<CircleButton name="check" onPress={handlePress} />
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
