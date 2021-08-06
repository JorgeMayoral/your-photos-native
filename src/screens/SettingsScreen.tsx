import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { removeToken } from '../utils/tokenStorage';
import { removeUser } from '../utils/userStorage';

const SettingsScreen = ({ navigation }: any) => {
  const handleSignout = async () => {
    await removeUser();
    await removeToken();
    navigation.replace('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleSignout()}>
        <View>
          <Text style={styles.buttonText}>Signout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#00adb5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default SettingsScreen;
