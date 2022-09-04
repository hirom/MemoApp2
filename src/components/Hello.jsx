import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bool, shape, string } from "prop-types";

function Hello(props) {
	const { children, bang, style } = props;
	return (
		<View>
			<Text style={[styles.text, style]}>{`Hello ${children}${
				bang ? "!" : ""
			}`}</Text>
		</View>
	);
}

Hello.propTypes = {
	children: string.isRequired,
	bang: bool,
	style: shape(),
};

Hello.defaultProps = {
	bang: false,
	style: null,
};

const styles = StyleSheet.create({
	text: {
		color: "#ffffff",
		backgroundColor: "blue",
		fontSize: 40,
		fontWeight: "bold",
		padding: 16,
		marginBottom: 20,
	},
});

export default Hello;
