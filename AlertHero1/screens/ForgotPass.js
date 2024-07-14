import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ForgotPass = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPass}>
      <Image
        style={styles.component9Icon}
        resizeMode="cover"
        source={require("../assets/component-7.png")}
      />
      <Image
        style={styles.component9Icon}
        resizeMode="cover"
        source={require("../assets/component-7.png")}
      />
      <View style={[styles.bgParent, styles.bgIconLayout]}>
        <Image
          style={[styles.bgIcon, styles.bgIconLayout]}
          resizeMode="cover"
          source={require("../assets/bg3.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.forgorPassword, styles.dontHaveAnTypo]}>
            Forgor password
          </Text>
          <Text style={[styles.dontHaveAn, styles.dontHaveAnTypo]}>
            Don’t have an account? Join us
          </Text>
        </View>
        <View style={[styles.button, styles.buttonLayout]}>
          <View style={[styles.buttonChild, styles.childLayout]} />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
        <View style={[styles.tab, styles.emailLayout]}>
          <View style={[styles.email, styles.emailLayout]}>
            <View style={[styles.emailChild, styles.emailLayout]} />
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.itsmemamun1gmailcom, styles.emailClr]}>
              itsmemamun1@gmail.com
            </Text>
          </View>
          <Image
            style={[styles.passwordIcon, styles.emailLayout]}
            resizeMode="cover"
            source={require("../assets/password1.png")}
          />
        </View>
      </View>
      <View style={[styles.forgotPassword, styles.verifiedPosition]}>
        <View style={[styles.verified, styles.verifiedPosition]}>
          <View style={[styles.verifiedChild, styles.verifiedPosition]} />
          <View style={[styles.verifiedItem, styles.verifiedPosition]} />
        </View>
        <View style={[styles.button1, styles.buttonLayout]}>
          <Pressable
            style={[styles.buttonChild, styles.childLayout]}
            onPress={() => navigation.navigate("LoginScreen1")}
          />
          <Text style={[styles.continue, styles.loginTypo]}>Continue</Text>
        </View>
        <View style={[styles.eMail, styles.emailLayout]}>
          <View style={[styles.emailChild, styles.emailLayout]} />
          <Text style={[styles.email1, styles.emailClr]}>Email</Text>
        </View>
        <View style={styles.text1}>
          <Text style={styles.forgotPassword1}>Forgot password</Text>
          <Text
            style={[styles.enterYourEmail, styles.emailClr]}
          >{`Enter your email for the verification proccesss,
we will send 4 digits code to your email.`}</Text>
        </View>
        <View style={styles.forgotPasswordChild} />
      </View>
      <View style={styles.text2}>
        <Text style={styles.forgotPassword1}>Welcome back to AlertHero</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgIconLayout: {
    height: 919,
    width: 564,
    position: "absolute",
  },
  dontHaveAnTypo: {
    textAlign: "left",
    color: Color.colorMediumseagreen,
    letterSpacing: 0,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  buttonLayout: {
    width: 295,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_xs,
    height: 54,
    left: 0,
    top: 0,
  },
  loginTypo: {
    height: 18,
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    top: 18,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  emailLayout: {
    width: 335,
    position: "absolute",
  },
  emailClr: {
    color: Color.color,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  verifiedPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  component9Icon: {
    top: 273,
    left: 92,
    width: 200,
    height: 43,
    position: "absolute",
  },
  bgIcon: {
    left: 0,
    top: 0,
  },
  forgorPassword: {
    left: 45,
    top: 0,
  },
  dontHaveAn: {
    top: 160,
    left: 0,
  },
  text: {
    top: 642,
    left: 191,
    width: 196,
    height: 177,
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen,
    width: 295,
    position: "absolute",
  },
  login: {
    width: 50,
    left: 123,
  },
  button: {
    top: 569,
    left: 139,
    height: 54,
  },
  emailChild: {
    borderStyle: "solid",
    borderColor: Color.colorSlategray_100,
    borderWidth: 1,
    borderRadius: Border.br_xs,
    height: 54,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    height: "20.37%",
    width: "4.48%",
    top: "38.89%",
    right: "7.46%",
    bottom: "40.74%",
    left: "88.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itsmemamun1gmailcom: {
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 25,
    color: Color.color,
    top: 18,
  },
  email: {
    height: 54,
    left: 0,
    top: 0,
  },
  passwordIcon: {
    top: 72,
    height: 54,
    left: 0,
  },
  tab: {
    top: 411,
    left: 119,
    height: 126,
  },
  bgParent: {
    top: -33,
    left: -99,
  },
  verifiedChild: {
    backgroundColor: Color.blackish,
    opacity: 0.5,
    top: 0,
    height: 812,
  },
  verifiedItem: {
    top: 412,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 400,
    backgroundColor: Color.colorWhite,
  },
  verified: {
    top: 0,
    height: 812,
  },
  continue: {
    left: 108,
    width: 79,
  },
  button1: {
    top: 698,
    left: 40,
    height: 54,
  },
  email1: {
    top: 17,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 25,
    color: Color.color,
  },
  eMail: {
    top: 614,
    left: 20,
    height: 54,
  },
  forgotPassword1: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  enterYourEmail: {
    top: 40,
    left: 1,
    lineHeight: 23,
    color: Color.color,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_sm,
  },
  text1: {
    top: 492,
    left: 19,
    width: 288,
    height: 86,
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 432,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorSilver,
    width: 130,
    height: 5,
    left: 123,
    position: "absolute",
  },
  forgotPassword: {
    top: -1,
    height: 812,
  },
  text2: {
    top: 169,
    left: 35,
    width: 304,
    height: 28,
    position: "absolute",
  },
  forgotPass: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default ForgotPass;
