import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";
import UserData from "../data/UserData";

const LoginScreen = ({ home, back }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Home = () => {
    if (userName === "" || password === "") {
      Alert.alert("Enter username and password!");
    } else {
      const user = UserData.find(
        (user) => user.username === userName && user.password === password
      );
      if (user) {
        Alert.alert("Logged in");
        home(user);
        setUserName("");
        setPassword("");
      } else {
        Alert.alert("Invalid credentials!");
      }
    }
  };

  const Back = () => {
    back();
  };

  return (
    <View style={styles.container}>
      <View>
        <ScreenTitle title="Login" />
        <Input
          placeholder="Enter username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        <Input
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" func={Home} />
        <Button title="Back" func={Back} />
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
