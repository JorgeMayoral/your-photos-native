import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CameraScreen from './src/screens/CameraScreen';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import SignupScreen from './src/screens/SignupScreen';
import { getUser } from './src/utils/userStorage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={getUser() ? 'Home' : 'LoginScreen'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Your Photos' }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: 'Signup' }}
        />
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ title: 'Camera' }}
        />
        <Stack.Screen
          name="PreviewScreen"
          component={PreviewScreen}
          options={{ title: 'Preview' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
