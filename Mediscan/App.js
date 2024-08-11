import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import Splashscreen from './screens/Splashscreen';
import OnboardScreen from './screens/onboard';
import SignInScreen from './screens/signin';
import LogInScreen from './screens/login';
import Homepage from './screens/homepage';

const Stack = createStackNavigator();

const AuthCheck = ({ navigation }) => {
  const [message, setMessage] = useState('Checking authentication...');

  useEffect(() => {
    const checkAuth = async () => {
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          unsubscribe();
          resolve(user);
        });
      });
    };

    checkAuth().then((user) => {
      if (user) {
        setMessage('Welcome back! Navigating to homepage...');
        console.log('User is signed in');
        setTimeout(() => navigation.replace('homepage'), 3000); // 3-second delay
      } else {
        setMessage('Please sign in or create an account');
        console.log('No user signed in');
        setTimeout(() => navigation.replace('onboard'), 1000); // 1-second delay
      }
    });
  }, [navigation]);

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splashscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthCheck"
          component={AuthCheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboard"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homepage"
          component={Homepage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#333',
  },
});

export default App;
