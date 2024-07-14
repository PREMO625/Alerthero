import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpScreen}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg2.png")}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreenForUser")}
      >
        <View style={styles.buttonChild} />
        <Text style={[styles.signUp, styles.signUpFlexBox]}>Sign up</Text>
      </Pressable>
      <View style={[styles.tab, styles.emailLayout]}>
        <View style={[styles.email, styles.emailLayout]}>
          <View style={[styles.emailChild, styles.emailChildBorder]} />
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        </View>
        <View style={[styles.password, styles.emailLayout]}>
          <View style={[styles.emailChild, styles.emailChildBorder]} />
          <Text style={[styles.email1, styles.nameTypo]}>Email</Text>
        </View>
        <View style={[styles.privacy, styles.privacyPosition]}>
          <Image
            style={[styles.privacyChild, styles.privacyPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-163.png")}
          />
          <Text
            style={[styles.iAgreeWith, styles.text1Typo]}
          >{`I agree with the Terms of Service & Privacy Policy`}</Text>
        </View>
      </View>
      <View style={[styles.text, styles.textLayout]}>
        <Text style={[styles.joinTheNetwork, styles.textLayout]}>
          Join the Network of Heroes
        </Text>
      </View>
      <Pressable
        style={styles.alreadyHaveAccountContainer}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={[styles.text1, styles.text1Typo]}>
          <Text
            style={styles.alreadyHaveAccount}
          >{`Already have account ? `}</Text>
          <Text style={styles.logIn}>Log in</Text>
        </Text>
      </Pressable>
      <View style={[styles.inputPassword, styles.emailLayout]}>
        <View style={styles.passwordPosition}>
          <View style={[styles.passwordItem, styles.passwordPosition]} />
        </View>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.password2, styles.nameTypo]}>Set Password</Text>
      </View>
      <Text style={[styles.createYourAlerthero, styles.signUpFlexBox]}>
        Create Your AlertHero Account
      </Text>
      <Image
        style={styles.component7Icon}
        resizeMode="cover"
        source={require("../assets/component-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  emailLayout: {
    width: 335,
    position: "absolute",
  },
  emailChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  nameTypo: {
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    color: Color.color,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  privacyPosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.rubikRegular,
    letterSpacing: 0,
  },
  textLayout: {
    height: 50,
    width: 307,
    position: "absolute",
  },
  passwordPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bgIcon: {
    top: -33,
    left: -99,
    width: 564,
    height: 919,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 54,
    width: 295,
    position: "absolute",
  },
  signUp: {
    left: 116,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    width: 64,
    height: 18,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
    top: 18,
  },
  button: {
    top: 654,
    left: 40,
    height: 54,
    width: 295,
    position: "absolute",
  },
  emailChild: {
    width: 335,
    position: "absolute",
    left: 0,
    height: 54,
    top: 0,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
  },
  name: {
    color: Color.color,
    left: 25,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    top: 18,
  },
  email: {
    left: 0,
    width: 335,
    height: 54,
    top: 0,
  },
  email1: {
    top: 17,
    color: Color.color,
    left: 25,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
  },
  password: {
    top: 72,
    left: 0,
    width: 335,
    height: 54,
  },
  privacyChild: {
    width: 16,
    top: 0,
  },
  iAgreeWith: {
    top: 1,
    left: 27,
    fontSize: FontSize.size_xs,
    color: Color.color,
    textAlign: "left",
    position: "absolute",
  },
  privacy: {
    top: 212,
    width: 286,
  },
  tab: {
    top: 396,
    left: 20,
    height: 228,
  },
  joinTheNetwork: {
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    color: Color.color,
    fontSize: FontSize.size_base,
    height: 50,
    width: 307,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  text: {
    top: 227,
    left: 84,
  },
  alreadyHaveAccount: {
    color: Color.color,
  },
  logIn: {
    color: "#4dc6fd",
  },
  text1: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    textAlign: "center",
  },
  alreadyHaveAccountContainer: {
    left: 95,
    top: 738,
    position: "absolute",
  },
  passwordItem: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  icon: {
    height: "25.93%",
    width: "6.03%",
    top: "38.89%",
    right: "6.51%",
    bottom: "35.19%",
    left: "87.46%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  password2: {
    top: "29.63%",
    left: "5.07%",
    color: Color.color,
  },
  inputPassword: {
    top: 538,
    left: 21,
    height: 54,
  },
  createYourAlerthero: {
    top: 169,
    left: 15,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
  },
  component7Icon: {
    top: 298,
    left: 87,
    width: 200,
    height: 43,
    position: "absolute",
  },
  signUpScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUpScreen;
