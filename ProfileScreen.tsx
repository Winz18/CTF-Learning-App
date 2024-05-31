import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useAuth } from "./AuthProvider";
import axios from "axios";
import { NavigationProp } from "@react-navigation/native";
import { Appbar, Button, Card, Subheading, TextInput, Title } from "react-native-paper";

type SectionProps = {
  navigation: NavigationProp<any, any>;
};


function ProfileScreen({ navigation }: SectionProps): React.JSX.Element {
  const { user, updateUser } = useAuth();
  const [email, setEmail] = useState("");
  const [old_password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [userData, setUserData] = useState<{ [key: string]: [string] }>({});
  const handleUpdateEmail = async () => {
    if (!user) {
      Alert.alert("Error", "User not found");
      return;
    }
    try {
      await axios.put(`http://10.0.2.2:8000/api/auth/update-email/`, { email }, {
        headers: {
          Authorization: `token ${user.token}`
        }
      });
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
      await axios.put(`http://10.0.2.2:8000/api/auth/change-password`, { old_password, new_password }, {
        headers: {
          Authorization: `token ${user.token}`
        }
      });
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

  useEffect(() => {
    axios.get(`http://10.0.2.2:8000/api/custom-users/?username=${user?.username}`, {
      headers: {
        Authorization: `token ${user?.token}`
      }
    })
      .then((response) => {
        const content: { [key: string]: [string] } = {};
        response.data.forEach((item: any) => {
          content["avatar"] = item.avatar;
        });
        setUserData(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (<View style={styles.container}>
    <Appbar.Header>
      <TouchableOpacity onPress={goBack}>
        <Image style={styles.img} source={require("./components/subject-page/header/img/back.png")} />
      </TouchableOpacity>
    </Appbar.Header>
    <Card style={styles.card}>
      <Card.Title
        title={user?.username}
        subtitle={user?.email}
      />
      <Card.Content>
        <Title style={styles.title}>Update Profile</Title>
        <TextInput
          label="New Email"
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
          value={old_password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          label="New Password"
          value={new_password}
          onChangeText={setNewPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={handleChangePassword} style={styles.button}>
          Change Password
        </Button>
      </Card.Content>
    </Card>
  </View>);
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
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    color: "purple"
  },
  img: {
    marginTop: 5,
    width: 20,
    height: 20
  }
});

export default ProfileScreen;
