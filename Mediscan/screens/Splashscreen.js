import React, { useCallback, useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

const Splashscreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const prepare = async () => {
      try {
        // Ensure the image is fully loaded before proceeding
        await new Promise(resolve => setTimeout(resolve, 1000)); // Display for exactly 3 seconds
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
      // Hide the splash screen and navigate only after the image is fully loaded
      await SplashScreen.hideAsync();
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
        onLoad={() => setAppIsReady(true)} // Trigger appIsReady when the image is loaded
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
