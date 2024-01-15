import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Colors from "./constants/Colors";

const App = () => {
  return (
    <View style={styles.container}>
      <RegisterScreen />
      {/* <LoginScreen /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
