import type { PropsWithChildren } from "react";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "./AuthProvider";

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function LoginScreen({ navigation }: SectionProps): React.JSX.Element {
  const { user, updateUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    axios
      .post("http://10.0.2.2:8000/api/auth/login/", { username, password })
      .then(response => {
        Alert.alert("Success", "Login successful");
        updateUser({id: response.data.user_id, email: response.data.email,
          username: response.data.username, token: response.data.token});
        navigation.navigate("Home");
      })
      .catch(error => {
        console.error(error);
        Alert.alert("Error", "Login failed");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text>{"\n"}</Text>
      <Button title="Login" onPress={handleSignIn} />
      <Text>{"\n"}</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8
  }
});

export default LoginScreen;
