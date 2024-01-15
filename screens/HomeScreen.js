import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenTitle from "../components/ScreenTitle";
import Colors from "../constants/Colors";
import Button from "../components/Button";
import UserDetails from "../components/UserDetails";

const HomeScreen = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <View style={styles.container}>
      <ScreenTitle title="Home" />
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.greetText}>Welcome,</Text>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.instructions}>
            To check your details click on the button below.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Details" func={handleShowDetails} />
        </View>
      </View>
      {showDetails && <UserDetails />}
      <View style={[styles.buttonContainer, styles.logoutButton]}>
        <Button title="logout" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  mainContainer: {
    maxWidth: "80%",
  },

  buttonContainer: {
    width: 150,
    marginLeft: 32,
  },

  textContainer: {
    marginLeft: 40,
  },

  greetText: {
    fontSize: 20,
    textDecorationColor: Colors.black,
    textDecorationLine: "underline",
  },

  userName: {
    fontSize: 30,
    paddingVertical: 4,
    color: Colors.purple,
  },

  instructions: {
    fontSize: 15,
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.black,
  },

  logoutButton: {
    position: "absolute",
    bottom: 40,
  },
});
