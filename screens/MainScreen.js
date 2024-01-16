import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import Logo from "../assets/images/logo.png";

const MainScreen = ({ login, register }) => {
  const Login = () => {
    login();
  };
  const Register = () => {
    register();
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" func={Login} />
        <Button title="Register" func={Register} />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: 250,
    height: 250,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  buttonContainer: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});
