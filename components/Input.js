import { StyleSheet, TextInput } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    minWidth: "70%",
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 18,
    borderColor: Colors.black,
    color: Colors.blue,
  },
});
