import React, { useCallback, useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ navigation }) => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Simulate a loading process (e.g., fetching data)
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
            setTimeout(() => {
                navigation.replace('Onboard'); // Navigate to Onboard after 5 seconds
            }, 2000); // 5 seconds delay
        }
    }, [appIsReady]);

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

export default SplashScreenComponent;
