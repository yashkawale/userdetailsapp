import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import UserData from "../data/UserData";

const UserDetails = ({ loggedUser }) => {
  // const data = UserData.map((user) => {
  //   return {
  //     id: user.id,
  //     fullName: `${user.firstName} ${user.lastName}`,
  //     email: user.email,
  //     phone_no: user.phone_number,
  //   };
  // });
  // const userInfo = [loggedUser];

  const data = loggedUser.map((user) => {
    return {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone_no: user.phone_number,
    };
  });
  // console.log("log from UD", loggedUser);
  // console.log("log from UD array", userInfo);
  // console.log("log from UD extracted", data);

  return (
    <View>
      {data.map((user) => (
        <View style={styles.details} key={user.id}>
          <Text style={styles.detailsText}>Full Name: {user.fullName} </Text>
          <Text style={styles.detailsText}>Email: {user.email}</Text>
          <Text style={styles.detailsText}>Phone Number: {user.phone_no}</Text>
        </View>
      ))}
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
