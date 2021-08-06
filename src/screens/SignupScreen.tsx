import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { signup } from '../services/signup';

const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);

    if (passwordInput !== confirmPasswordInput) {
      setError('Both passwords must be the same');
    } else {
      const user = await signup(usernameInput, emailInput, passwordInput);

      if ((user as ErrorResponse).error) {
        setError((user as ErrorResponse).error);
      } else {
        navigation.replace('Home');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
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
        placeholder="Email"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={emailInput}
        onChangeText={(text) => setEmailInput(text)}
      />
      <CustomTextInput
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry
        value={passwordInput}
        onChangeText={(text) => setPasswordInput(text)}
      />
      <CustomTextInput
        placeholder="Confirm Password"
        returnKeyType="done"
        secureTextEntry
        value={confirmPasswordInput}
        onChangeText={(text) => setConfirmPasswordInput(text)}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <CustomButton text="Signup" onPress={() => handleLogin()} />
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
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

export default SignupScreen;
