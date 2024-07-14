import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen01}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg2.png")}
      />
      <View style={styles.text}>
        <Pressable
          style={[styles.forgotPassword, styles.emailPosition]}
          onPress={() => navigation.navigate("ForgotPass")}
        >
          <Text style={styles.forgotPassword1}>Forgot password</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreenForUser")}
      >
        <View style={styles.buttonChild} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </Pressable>
      <View style={[styles.tab, styles.emailLayout]}>
        <View style={[styles.email, styles.emailLayout]}>
          <View style={[styles.emailChild, styles.childBorder]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.itsmemamun1gmailcom, styles.password1Typo]}>
            itsmemamun1@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.text1}>
        <Text style={[styles.welcomeBackTo, styles.loginTypo]}>
          Welcome back to AlertHero
        </Text>
      </View>
      <View style={styles.text1}>
        <Text style={[styles.welcomeBackTo, styles.loginTypo]}>
          Welcome back to AlertHero
        </Text>
      </View>
      <View style={[styles.inputPassword, styles.emailLayout]}>
        <View style={styles.passwordPosition}>
          <View style={[styles.passwordChild, styles.passwordPosition]} />
        </View>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.password1, styles.password1Typo]}>Password</Text>
      </View>
      <Image
        style={styles.component8Icon}
        resizeMode="cover"
        source={require("../assets/component-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailPosition: {
    top: 0,
    left: 0,
  },
  loginTypo: {
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  emailLayout: {
    width: 335,
    height: 54,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "38.89%",
    position: "absolute",
    overflow: "hidden",
  },
  password1Typo: {
    color: Color.color,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
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
  forgotPassword1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.rubikRegular,
    color: Color.colorMediumseagreen,
    textAlign: "left",
    letterSpacing: 0,
  },
  forgotPassword: {
    position: "absolute",
  },
  text: {
    top: 609,
    left: 137,
    width: 105,
    height: 17,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_xs,
    height: 54,
    width: 295,
    top: 0,
    left: 0,
    position: "absolute",
  },
  login: {
    left: 123,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    width: 50,
    height: 18,
    top: 18,
  },
  button: {
    top: 536,
    left: 40,
    height: 54,
    width: 295,
    position: "absolute",
  },
  emailChild: {
    width: 335,
    height: 54,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
  },
  vectorIcon: {
    height: "20.37%",
    width: "4.48%",
    right: "7.46%",
    bottom: "40.74%",
    left: "88.06%",
  },
  itsmemamun1gmailcom: {
    left: 25,
    top: 18,
  },
  email: {
    top: 0,
    left: 0,
  },
  tab: {
    top: 378,
    left: 20,
    width: 335,
  },
  welcomeBackTo: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    top: 0,
    left: 0,
  },
  text1: {
    top: 183,
    left: 47,
    width: 304,
    height: 28,
    position: "absolute",
  },
  passwordChild: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  icon: {
    height: "25.93%",
    width: "6.03%",
    right: "6.51%",
    bottom: "35.19%",
    left: "87.46%",
  },
  password1: {
    top: "29.63%",
    left: "5.07%",
  },
  inputPassword: {
    top: 457,
    left: 20,
    width: 335,
  },
  component8Icon: {
    top: 273,
    left: 89,
    width: 200,
    height: 43,
    position: "absolute",
  },
  loginScreen01: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginScreen;
