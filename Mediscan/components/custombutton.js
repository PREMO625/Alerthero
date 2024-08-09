import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  const [pressAnim] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    Animated.spring(pressAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 10, // Increase the speed of the animation
      bounciness: 0, // Remove the bounce effect for a more dynamic feel
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(pressAnim, {
      toValue: 0,
      useNativeDriver: true,
      speed: 10, // Increase the speed of the animation
      bounciness: 0, // Remove the bounce effect for a more dynamic feel
    }).start();
  };

  const animatedStyles = {
    transform: [
      {
        translateY: pressAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 8],
        }),
      },
      { skewX: '-10deg' },
    ],
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      activeOpacity={1}
    >
      <Animated.View style={[styles.buttonOuter, animatedStyles]}>
        <Animated.View style={[styles.buttonInner, animatedStyles]}>
          <Text style={styles.buttonText}>{title}</Text>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonOuter: {
    width: 295,
    height: 54,
    backgroundColor: '#0A8F5C', // Darker shade for outer button
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  buttonInner: {
    width: 295,
    height: 54,
    backgroundColor: '#0EBE7F', // Main color for inner button
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -8,
    left: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 2,
  },
});

export default CustomButton;
