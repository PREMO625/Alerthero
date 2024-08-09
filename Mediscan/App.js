import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from './screens/Splashscreen';
import OnboardScreen from './screens/onboard'; // Import the Onboard screen
import SignInScreen from './screens/signin'; // Import SignIn screen
import LogInScreen from './screens/login'; // Import LogIn screen

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreenComponent}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Onboard"
                    component={OnboardScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LogIn"
                    component={LogInScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
