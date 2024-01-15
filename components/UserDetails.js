import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserDetails = () => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsText}>First Name: </Text>
      <Text style={styles.detailsText}>Last Name: </Text>
      <Text style={styles.detailsText}>Email: </Text>
      <Text style={styles.detailsText}>Phone Number: </Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  details: {
    marginLeft: 20,
    padding: 20,
    gap: 5,
  },

  detailsText: {
    fontSize: 18,
  },
});
