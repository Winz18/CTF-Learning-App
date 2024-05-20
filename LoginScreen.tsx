import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import type {PropsWithChildren} from 'react';
import {NavigationProp} from '@react-navigation/native';
import axios from 'axios';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function LoginScreen({navigation}: SectionProps): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Xử lý logic đăng nhập ở đây
  const handleSignIn = () => {
    axios
      .post('http://10.10.0.249:3000/auth/signin', {email, password})
      .then(response => {
        Alert.alert('Success', 'Login successful');
        // Lưu token và chuyển hướng tới màn hình khác
        const token = response.data.token;
        console.log(token);
        // Lưu token vào AsyncStorage hoặc Context
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Login failed');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
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
      <Text>{'\n'}</Text>
      <Button title="Login" onPress={handleSignIn} />
      <Text>{'\n'}</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
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

export default LoginScreen;
