import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import VerificationScreen from './screens/Verification';
import OTPScreen from './screens/OTP';
import TFRScreen from './screens/ThanksForRegistering';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="ThanksForRegistering" component={TFRScreen} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;