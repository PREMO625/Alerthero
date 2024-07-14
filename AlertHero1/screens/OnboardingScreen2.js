import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const OnboardingScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingScreen01}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg1.png")}
      />
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Image
        style={styles.screenshotRemovebgPreview1Icon}
        resizeMode="cover"
        source={require("../assets/screenshotremovebgpreview-1.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.loginAsUser, styles.loginTypo]}>
          Login as User
        </Text>
      </Pressable>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.loginAsFirst, styles.loginTypo]}>
          Login as First Responder
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 54,
    width: 295,
    position: "absolute",
  },
  loginTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 15,
    position: "absolute",
  },
  bgIcon: {
    top: 641,
    left: 212,
    width: 216,
    height: 216,
    position: "absolute",
  },
  imageIcon: {
    top: -20,
    left: -104,
    width: 460,
    height: 447,
    position: "absolute",
  },
  screenshotRemovebgPreview1Icon: {
    top: 151,
    left: -11,
    width: 423,
    height: 199,
    position: "absolute",
  },
  buttonChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorMediumseagreen,
  },
  loginAsUser: {
    left: 90,
    textAlign: "center",
  },
  button: {
    top: 468,
    left: 47,
    width: 295,
  },
  loginAsFirst: {
    left: 37,
    textAlign: "left",
  },
  button1: {
    top: 563,
    left: 47,
    width: 295,
  },
  onboardingScreen01: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OnboardingScreen2;
