import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const Button = ({ title, func }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.button] : styles.button
        }
        onPress={func}
      >
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },

  pressed: {
    opacity: 0.8,
  },

  button: {
    backgroundColor: Colors.purple,
    minWidth: 125,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 6,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.7,
  },

  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: Colors.white,
  },
});
