import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingScreen}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg1.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.beTheFirst, styles.beTheFirstFlexBox]}>
          Be the First to Respond, Be the First to Save a Life
        </Text>
      </View>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Pressable
        style={styles.loginForDispatcherContainer}
        onPress={() => navigation.navigate("SignUpLoginForDisp")}
      >
        <Text style={[styles.loginForDispatcher, styles.beTheFirstFlexBox]}>
          Login For Dispatcher
        </Text>
      </Pressable>
      <Image
        style={styles.screenshotRemovebgPreview1Icon}
        resizeMode="cover"
        source={require("../assets/screenshotremovebgpreview-1.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("OnboardingScreen1")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.signUp, styles.logInTypo]}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("OnboardingScreen2")}
      >
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  beTheFirstFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  buttonLayout: {
    height: 54,
    width: 220,
    position: "absolute",
  },
  logInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    top: 13,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  bgIcon: {
    left: 212,
    width: 216,
    height: 216,
    top: 641,
    position: "absolute",
  },
  beTheFirst: {
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
    color: Color.colorDarkslategray,
    width: 337,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    letterSpacing: 0,
  },
  text: {
    marginLeft: -168.5,
    bottom: 309,
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  imageIcon: {
    top: -20,
    left: -104,
    width: 460,
    height: 447,
    position: "absolute",
  },
  loginForDispatcher: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontFamily: FontFamily.rubikRegular,
    color: Color.color,
  },
  loginForDispatcherContainer: {
    left: 121,
    top: 746,
    position: "absolute",
  },
  screenshotRemovebgPreview1Icon: {
    top: 160,
    left: -8,
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
  signUp: {
    left: 66,
    color: Color.colorMediumseagreen,
  },
  button: {
    left: 72,
    width: 220,
    top: 641,
  },
  logIn: {
    left: 76,
    color: Color.colorWhite,
  },
  button1: {
    top: 553,
    left: 72,
    width: 220,
  },
  onboardingScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default OnboardingScreen;
