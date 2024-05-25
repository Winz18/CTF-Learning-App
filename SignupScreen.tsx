import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  DevSettings,
  Alert,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import {NavigationProp} from '@react-navigation/native';
import axios from 'axios';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function SignUpScreen({navigation}: SectionProps): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Do không dùng được navigation.push nên reload app cho nút back to login chạy được
  // (khi load app thì mặc định là chạy login screen)
  const reloadApp = () => {
    DevSettings.reload();
  };

  const handleSignUp = () => {
    axios
      .post('http://10.10.0.249:3000/auth/signup', {email, password})
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(response => {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Registration failed');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Text>{'\n'}</Text>
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text>{'\n'}</Text>
      <Button title="Back to login" onPress={reloadApp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
