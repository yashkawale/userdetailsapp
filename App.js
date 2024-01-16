import { SafeAreaView, StyleSheet } from "react-native";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./constants/Colors";
import { useState } from "react";

const App = () => {
  const handleLogin = () => {
    setScreens(
      <LoginScreen home={handleHomeLogin} back={handleBackFromLogin} />
    );
  };

  const handleRegister = () => {
    setScreens(
      <RegisterScreen
        submit={handleRegisterSubmit}
        back={handleBackFromRegister}
      />
    );
  };

  const [screens, setScreens] = useState(
    <MainScreen login={handleLogin} register={handleRegister} />
  );

  const handleBackFromLogin = () => {
    setScreens(<MainScreen login={handleLogin} register={handleRegister} />);
  };

  const handleBackFromRegister = () => {
    setScreens(<MainScreen login={handleLogin} register={handleRegister} />);
  };

  const handleHomeLogin = (data) => {
    setScreens(<HomeScreen goToMainScreen={handleLogout} userData={data} />);
  };

  const handleLogout = () => {
    setScreens(<MainScreen login={handleLogin} register={handleRegister} />);
  };

  const handleRegisterSubmit = () => {
    setScreens(
      <LoginScreen home={handleHomeLogin} back={handleBackFromLogin} />
    );
  };

  return <SafeAreaView style={styles.container}>{screens}</SafeAreaView>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
