import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignUpLoginForDisp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUploginForDisp}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg2.png")}
      />
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={styles.buttonChild} />
        <Text style={[styles.signUp, styles.loginTypo]}>Sign up</Text>
      </View>
      <View style={styles.tab}>
        <View style={[styles.email, styles.passwordLayout]}>
          <View style={[styles.emailChild, styles.childBorder]} />
        </View>
        <View style={[styles.password, styles.passwordLayout]}>
          <View style={[styles.passwordChild, styles.childBorder]} />
          <Text style={[styles.password1, styles.eyeIconLayout]}>Password</Text>
          <Text style={[styles.usernameemail, styles.eyeIconLayout]}>
            Username/Email
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.text, styles.textPosition]}
        onPress={() => navigation.navigate("ForgotPass")}
      >
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPass")}
        >
          <Text style={[styles.forgotPassword1, styles.forgotPassword1FlexBox]}>
            Forgot password
          </Text>
        </Pressable>
      </Pressable>
      <View style={styles.linearIndeterminate}>
        <View style={styles.track}>
          <View style={styles.trackShape} />
        </View>
      </View>
      <Text style={[styles.newRagistration, styles.textPosition]}>
        New Ragistration :
      </Text>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={styles.buttonChild} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </View>
      <View style={[styles.tab1, styles.passwordLayout]}>
        <View style={[styles.email, styles.passwordLayout]}>
          <View style={[styles.emailChild, styles.childBorder]} />
          <Text style={[styles.email2, styles.email2Typo]}>Email</Text>
        </View>
        <View style={[styles.password2, styles.passwordLayout]}>
          <View style={[styles.emailChild, styles.childBorder]} />
          <Text style={[styles.specificCode, styles.email2Typo]}>
            Specific Code
          </Text>
        </View>
        <Image
          style={[styles.passwordIcon, styles.passwordLayout]}
          resizeMode="cover"
          source={require("../assets/password.png")}
        />
      </View>
      <Image
        style={[styles.eyeIcon, styles.eyeIconLayout]}
        resizeMode="cover"
        source={require("../assets/eye.png")}
      />
      <Image
        style={[styles.eyeIcon, styles.eyeIconLayout]}
        resizeMode="cover"
        source={require("../assets/eye.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={styles.infoIcon}
        resizeMode="cover"
        source={require("../assets/info.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: 295,
    left: 29,
    height: 54,
    position: "absolute",
  },
  loginTypo: {
    height: 18,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    top: 18,
    position: "absolute",
  },
  passwordLayout: {
    width: 335,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    width: 335,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  eyeIconLayout: {
    height: 21,
    position: "absolute",
  },
  textPosition: {
    left: 6,
    position: "absolute",
  },
  forgotPassword1FlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  email2Typo: {
    left: 25,
    color: Color.color,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
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
    width: 64,
  },
  button: {
    top: 698,
    height: 54,
  },
  emailChild: {
    top: 0,
    height: 54,
  },
  email: {
    left: 0,
    top: 0,
    height: 54,
  },
  passwordChild: {
    top: 61,
    height: 60,
  },
  password1: {
    top: 81,
    width: 68,
    color: Color.color,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 27,
    height: 21,
    textAlign: "left",
    letterSpacing: 0,
  },
  usernameemail: {
    width: 118,
    color: Color.color,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 27,
    height: 21,
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
  },
  password: {
    top: 16,
    left: 2,
    height: 121,
  },
  tab: {
    top: 86,
    left: 22,
    width: 337,
    height: 137,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 237,
    width: 105,
    height: 17,
  },
  trackShape: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.schemesSecondaryContainer,
    height: 4,
  },
  track: {
    marginTop: -6,
    top: "50%",
    right: "0%",
    left: "0%",
    justifyContent: "center",
    paddingLeft: Padding.p_11xs,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    position: "absolute",
    width: "100%",
  },
  linearIndeterminate: {
    top: 354,
    left: -14,
    width: 404,
    height: 12,
    position: "absolute",
  },
  newRagistration: {
    top: 385,
    color: Color.colorDarkslategray,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 6,
  },
  login: {
    left: 123,
    width: 50,
  },
  button1: {
    top: 286,
    height: 54,
  },
  email2: {
    top: 18,
    left: 25,
  },
  specificCode: {
    top: 17,
  },
  password2: {
    top: 72,
    left: 0,
    height: 54,
  },
  passwordIcon: {
    top: 144,
    left: 0,
    height: 54,
  },
  tab1: {
    top: 438,
    left: 16,
    height: 198,
  },
  eyeIcon: {
    top: 180,
    left: 313,
    width: 22,
    overflow: "hidden",
  },
  groupIcon: {
    top: 605,
    left: 41,
    width: 99,
    height: 8,
    position: "absolute",
  },
  infoIcon: {
    top: 532,
    left: 311,
    width: 16,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  signUploginForDisp: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUpLoginForDisp;
