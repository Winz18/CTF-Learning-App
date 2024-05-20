import React, {type PropsWithChildren, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useAuth} from './AuthProvider';
import axios from 'axios';
import {NavigationProp} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function ProfileScreen({navigation}: SectionProps): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {user, updateUser, signOut} = useAuth();
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateEmail = async () => {
    if (!user) {
      Alert.alert('Error', 'User not found');
      return;
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.put(
        `http://10.10.0.249:3000/auth/users/${user.id}/email`,
        {email},
      );
      updateUser({...user, email});
      Alert.alert('Success', 'Email updated successfully');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update email');
    }
  };

  const handleChangePassword = async () => {
    if (!user) {
      Alert.alert('Error', 'User not found');
      return;
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.put(
        `http://10.10.0.249:3000/auth/users/${user.id}/password`,
        {password, newPassword},
      );
      Alert.alert('Success', 'Password updated successfully');
      setPassword('');
      setNewPassword('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update password');
    }
  };

  const goback = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>{'\n'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text>{'\n'}</Text>
      <Button title="Update Email" onPress={handleUpdateEmail} />
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <Text>{'\n'}</Text>
      <Button title="Change Password" onPress={handleChangePassword} />
      <Text>{'\n'}</Text>
      <Button title="Back To Home" onPress={goback} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default ProfileScreen;
