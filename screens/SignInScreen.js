
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppContext } from '../context/AppContext';

const SignInScreen = ({ navigation }) => {
  const { login } = useAppContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login(username, password)) {
      navigation.replace('Dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign In" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({ /* styling here */ });

export default SignInScreen;
