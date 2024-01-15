import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./constants/Colors";

const App = () => {
  let screen = <MainScreen />;

  return <SafeAreaView style={styles.container}>{screen}</SafeAreaView>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
