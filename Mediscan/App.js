import React, { useEffect } from 'react';
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
        console.log('User is signed in. Navigating to homepage...');
        setTimeout(() => navigation.replace('homepage'), 0.1000); // 1-second delay
      } else {
        console.log('No user signed in. Navigating to onboard...');
        setTimeout(() => navigation.replace('onboard'), 0.1000); // 1-second delay
      }
    });
  }, [navigation]);

  return null; // Render nothing to avoid any UI during auth check
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

export default App;
