const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import OnboardingScreen1 from "./screens/OnboardingScreen1";
import OnboardingScreen2 from "./screens/OnboardingScreen2";
import SignUpLoginForDisp from "./screens/SignUpLoginForDisp";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotPass from "./screens/ForgotPass";
import HomeScreenForUser from "./screens/HomeScreenForUser";
import CreditPoints from "./screens/CreditPoints";
import LoginScreen1 from "./screens/LoginScreen1";
import SignUpLoginForFR from "./screens/SignUpLoginForFR";
import SendAlert from "./screens/SendAlert";
import SendAlert1 from "./screens/SendAlert1";
import AlertPageForUser from "./screens/AlertPageForUser";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen1"
              component={OnboardingScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen2"
              component={OnboardingScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpLoginForDisp"
              component={SignUpLoginForDisp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPass"
              component={ForgotPass}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreenForUser"
              component={HomeScreenForUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditPoints"
              component={CreditPoints}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen1"
              component={LoginScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpLoginForFR"
              component={SignUpLoginForFR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendAlert"
              component={SendAlert}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendAlert1"
              component={SendAlert1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AlertPageForUser"
              component={AlertPageForUser}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
