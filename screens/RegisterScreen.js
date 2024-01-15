import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenTitle from "../components/ScreenTitle";
import Input from "../components/Input";
import Button from "../components/Button";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScreenTitle title="Register" />
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button title="Submit" />
        <Button title="Back" />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
