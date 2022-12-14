import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";

import firebase from "firebase";

import Button from "../components/Button";
import Loading from "../components/Loading";
import CancelLogin from "../components/CancelLogin";
import { translateErrors } from "../utils";

export default function SignUpScreen(props) {
	const { navigation } = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <CancelLogin />,
		});
	});

	function handlePress() {
		setIsLoading(true);
		const { currentUser } = firebase.auth();
		if (!currentUser) {
			return;
		}
		const credential = firebase.auth.EmailAuthProvider.credential(
			email,
			password
		);
		currentUser
			.linkWithCredential(credential)
			.then(() => {
				Alert.alert(
					"登録完了",
					"登録したメールアドレスとパスワードは大切に保管してください",
					[
						{
							text: "OK",
							onPress: () => {
								navigation.reset({ index: 0, routes: [{ name: "MemoList" }] });
							},
						},
					]
				);
			})
			.catch((error) => {
				const errorMsg = translateErrors(error.code);
				Alert.alert(errorMsg.title, errorMsg.description);
			})
			.then(() => {
				setIsLoading(false);
			});
	}

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Text style={styles.title}>Sign Up</Text>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={(text) => {
						setEmail(text);
					}}
					autoCapitalize="none"
					keyboardType="email-address"
					placeholder="email"
					textContentType="emailAddress"
				/>
				<TextInput
					style={styles.input}
					value={password}
					onChangeText={(text) => setPassword(text)}
					autoCapitalize="none"
					keyboardType="email-address"
					placeholder="password"
					secureTextEntry
					textContentType="password"
				/>
				<Button label="Submit" onPress={handlePress} />
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
