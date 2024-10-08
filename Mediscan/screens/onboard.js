import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import CustomButton from '../components/custombutton'; // Ensure this path is correct

const OnboardScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/authpage.png')} style={styles.background}>
      <View style={styles.container}>
        <CustomButton
          title="Sign Up"
          onPress={() => navigation.navigate('signin')} // Ensure screen names match
        />
        <View style={styles.buttonSpacing} />
        <CustomButton
          title="Log In"
          onPress={() => navigation.navigate('login')} // Ensure screen names match
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    marginBottom: 50, // Adjust based on your background image
  },
  buttonSpacing: {
    height: 20, // Space between the buttons
  },
});

export default OnboardScreen;
