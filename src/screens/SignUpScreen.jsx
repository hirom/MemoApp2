import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";

import Button from "../components/Button";

export default function SignUpScreen(props) {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Text style={styles.title}>Sign Up</Text>
				<TextInput style={styles.input} value="Email Address" />
				<TextInput style={styles.input} value="password" />
				<Button
					label="Submit"
					onPress={() => {
						navigation.reset({ index: 0, routes: [{ name: "MemoList" }] });
					}}
				/>
				<View style={styles.footer}>
					<Text style={styles.footerText}>Already registered?</Text>
					<TouchableOpacity
						onPress={() => {
							navigation.reset({ index: 0, routes: [{ name: "LogIn" }] });
						}}
					>
						<Text style={styles.footerLink}>Log in.</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0F4F8",
	},
	inner: {
		paddingHorizontal: 27,
		paddingVertical: 24,
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		fontWeight: "bold",
		marginBottom: 24,
	},
	input: {
		fontSize: 16,
		height: 48,
		paddingHorizontal: 8,
		borderColor: "#DDDDDD",
		borderWidth: 1,
		backgroundColor: "#ffffff",
		marginBottom: 16,
	},

	footer: {
		flexDirection: "row",
	},
	footerText: {
		fontSize: 14,
		lineHeight: 24,
		marginRight: 8,
	},
	footerLink: {
		fontSize: 14,
		lineHeight: 24,
		color: "#467FD3",
	},
});
