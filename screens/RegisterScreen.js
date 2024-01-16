import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenTitle from "../components/ScreenTitle";
import Input from "../components/Input";
import Button from "../components/Button";
import UserData from "../data/UserData";

const RegisterScreen = ({ submit, back }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    const newUserData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone_number: phoneNumber,
      username: userName,
      password: password,
      get id() {
        return this.email;
      },
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setUserName("");
    setPassword("");

    UserData.push(newUserData);
    submit();
  };

  const Back = () => {
    back();
  };
  return (
    <View style={styles.container}>
      <View>
        <ScreenTitle title="Register" />
        <Input
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Input
          placeholder="Username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Submit" func={Submit} />
        <Button title="Back" func={Back} />
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
