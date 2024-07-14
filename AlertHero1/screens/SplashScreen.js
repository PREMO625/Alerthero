import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashScreen}
      onPress={() => navigation.navigate("OnboardingScreen")}
    >
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.connectingFirstResponders}>
          Connecting First Responders, Saving Lives
        </Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <Image
          style={[styles.bgIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <Image
          style={[styles.frameIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
        <Image
          style={[styles.frameIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: -72,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  connectingFirstResponders: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.rubikLightItalic,
    color: Color.colorBlack,
    textAlign: "center",
  },
  frame: {
    top: 397,
    width: 416,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bgIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    position: "absolute",
  },
  frameIcon: {
    top: 316,
    left: 26,
    width: 479,
    height: 203,
  },
  frame1: {
    top: -86,
    width: 518,
    height: 898,
  },
  splashScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen;
