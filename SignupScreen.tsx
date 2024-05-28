import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import type { PropsWithChildren } from 'react';
import { NavigationProp } from '@react-navigation/native';
import axios from 'axios';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function SignUpScreen({ navigation }: SectionProps): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSignUp = () => {
    console.log(username, email, password, password2);
    axios
      .post('http://10.0.2.2:8000/api/auth/register/', {
        username,
        email,
        password,
        password2,
      })
      .then(response => {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'An error occurred. Please try again.');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={password2}
        onChangeText={setPassword2}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text>{'\n'}</Text>
      <Button title="Back to login" onPress={() => navigation.navigate('Login')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
  },
});

export default SignUpScreen;
