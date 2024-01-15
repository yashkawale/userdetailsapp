import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const ScreenTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default ScreenTitle;

const styles = StyleSheet.create({
  title: {
    color: Colors.blue,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
  },
});
