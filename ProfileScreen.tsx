import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useAuth } from "./AuthProvider";
import axios from "axios";
import { NavigationProp } from "@react-navigation/native";
import { Appbar, Avatar, Button, Card, Subheading, TextInput, Title } from "react-native-paper";

type SectionProps = {
  navigation: NavigationProp<any, any>;
};

function ProfileScreen({ navigation }: SectionProps): React.JSX.Element {
  const { user, updateUser } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateEmail = async () => {
    if (!user) {
      Alert.alert("Error", "User not found");
      return;
    }
    try {
      await axios.put(
        `http://10.0.2.2:8000/api/auth/users/${user.id}/email`,
        { email }
      );
      updateUser({ ...user, email });
      Alert.alert("Success", "Email updated successfully");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to update email");
    }
  };

  const handleChangePassword = async () => {
    if (!user) {
      Alert.alert("Error", "User not found");
      return;
    }
    try {
      await axios.put(
        `http://10.0.2.2:8000/api/auth/users/${user.id}/password`,
        { password, newPassword }
      );
      Alert.alert("Success", "Password updated successfully");
      setPassword("");
      setNewPassword("");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to update password");
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <Card style={styles.card}>
        <Card.Title
          title={user?.username}
          subtitle={user?.email}
          left={(props) => <Avatar.Icon {...props} icon="account" />}
        />
        <Card.Content>
          <Title>Update Profile</Title>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleUpdateEmail} style={styles.button}>
            Update Email
          </Button>
          <Subheading>Change Password</Subheading>
          <TextInput
            label="Current Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            label="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button mode="contained" onPress={handleChangePassword} style={styles.button}>
            Change Password
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  card: {
    margin: 16,
    padding: 16
  },
  input: {
    marginVertical: 10
  },
  button: {
    marginVertical: 10
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold"
  }
});

export default ProfileScreen;
