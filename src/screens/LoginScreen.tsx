import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { login } from '../services/login';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    const user = await login(usernameInput, passwordInput);

    if ((user as ErrorResponse).error) {
      setError((user as ErrorResponse).error);
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <CustomTextInput
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="username"
        keyboardType="default"
        value={usernameInput}
        onChangeText={(text) => setUsernameInput(text)}
      />
      <CustomTextInput
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry
        value={passwordInput}
        onChangeText={(text) => setPasswordInput(text)}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <CustomButton text="Login" onPress={() => handleLogin()} />
      <View style={styles.row}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignupScreen')}>
          <Text style={styles.link}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 21,
    color: '#00adb5',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  error: {
    fontSize: 13,
    color: 'red',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#00adb5',
  },
});

export default LoginScreen;
