import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import VerificationScreen from './screens/Verification';
import OTPScreen from './screens/OTP';
import TFRScreen from './screens/ThanksForRegistering';

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontLoaded: false
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
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
    }
  }

  _loadResourcesAsync = async () => {
    await Font.loadAsync({
      'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-medium': require('./assets/font/Montserrat-Medium.ttf'),
      'montserrat-semibold': require('./assets/font/Montserrat-SemiBold.ttf'),
      'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf')
    });

    this.setState({ fontLoaded: true });
    return Promise.all([...cacheImages(assetImages)]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    if (this.state.fontLoaded) {
      this.setState({ isLoadingComplete: true });
    }
  };
}