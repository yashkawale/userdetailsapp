import { StyleSheet, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScreenTitle title="Login" />
        <Input placeholder="Enter username" />
        <Input placeholder="Enter password" />
        <Button title="Login" />
        <Button title="Back" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
