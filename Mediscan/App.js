import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreenComponent from './screens/Splashscreen';

const App = () => {
    return (
        <NavigationContainer>
            <SplashScreenComponent />
            {/* Other components like your main app navigation go here */}
        </NavigationContainer>
    );
};

export default App;
