import React, { useCallback, useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

// Prevent auto-hide of splash screen until we're ready
SplashScreen.preventAutoHideAsync();

const Splashscreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const prepare = async () => {
      try {
        // Simulate a loading process
        await new Promise(resolve => setTimeout(resolve, 3000)); // Display for at least 3 seconds
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen
      await SplashScreen.hideAsync();
      // Navigate to the AuthCheck screen
      navigation.replace('AuthCheck');
    }
  }, [appIsReady, navigation]);

  if (!appIsReady) {
    return null; // Prevent rendering until the app is ready
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        source={require('../assets/Splashscreen.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Splashscreen;
