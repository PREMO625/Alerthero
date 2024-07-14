import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginScreen1 = () => {
  return (
    <View style={styles.loginScreen03}>
      <Image
        style={styles.component11Icon}
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
          <View style={styles.buttonChild} />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
        <View style={[styles.tab, styles.emailLayout]}>
          <View style={[styles.email, styles.emailLayout]}>
            <View style={[styles.emailChild, styles.childBorder]} />
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.itsmemamun1gmailcom, styles.enterThe4Clr]}>
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
      <View style={[styles.enterDigits, styles.verifiedPosition]}>
        <View style={[styles.enterDigits, styles.verifiedPosition]}>
          <View style={[styles.verifiedChild, styles.verifiedPosition]} />
          <View style={[styles.verifiedItem, styles.verifiedPosition]} />
        </View>
        <View style={[styles.button1, styles.buttonLayout]}>
          <View style={styles.buttonChild} />
          <Text style={[styles.continue, styles.loginTypo]}>Continue</Text>
        </View>
        <View style={styles.digits}>
          <View style={[styles.view, styles.viewLayout]}>
            <View style={[styles.child, styles.viewLayout]} />
            <Text style={styles.text1}>5</Text>
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <View style={[styles.child, styles.viewLayout]} />
            <Text style={styles.text1}>3</Text>
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <View style={[styles.child, styles.viewLayout]} />
            <Text style={styles.text1}>0</Text>
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <View style={[styles.child, styles.viewLayout]} />
            <View style={styles.lineView} />
          </View>
        </View>
        <View style={styles.text4}>
          <Text style={styles.enter4Digits}>Enter 4 Digits Code</Text>
          <Text
            style={[styles.enterThe4, styles.enterThe4Clr]}
          >{`Enter the 4 digits code that you received on
your email.`}</Text>
        </View>
        <View style={styles.enterDigitsChild} />
      </View>
      <View style={styles.text5}>
        <Text style={styles.enter4Digits}>Welcome back to AlertHero</Text>
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
    fontFamily: FontFamily.rubikRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  buttonLayout: {
    width: 295,
    height: 54,
    position: "absolute",
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
  childBorder: {
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  enterThe4Clr: {
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
  viewLayout: {
    width: 54,
    height: 54,
    top: 0,
    position: "absolute",
  },
  component11Icon: {
    top: 273,
    left: 66,
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
    borderRadius: Border.br_xs,
    height: 54,
    width: 295,
    left: 0,
    top: 0,
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
    borderWidth: 1,
    width: 335,
    position: "absolute",
    height: 54,
    top: 0,
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
    left: 25,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.rubikLight,
    top: 18,
    color: Color.color,
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
  enterDigits: {
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
  child: {
    borderWidth: 0.8,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  text1: {
    top: 8,
    left: 21,
    fontSize: FontSize.size_7xl,
    lineHeight: 41,
    fontWeight: "700",
    fontFamily: FontFamily.pTSansBold,
    textAlign: "center",
    width: 14,
    height: 37,
    color: Color.colorMediumseagreen,
    letterSpacing: 0,
    position: "absolute",
  },
  view: {
    left: 0,
  },
  view1: {
    left: 71,
  },
  view2: {
    left: 142,
  },
  lineView: {
    top: 13,
    left: 27,
    borderColor: Color.color,
    borderRightWidth: 1,
    width: 1,
    height: 31,
    borderStyle: "solid",
    position: "absolute",
  },
  view3: {
    left: 213,
  },
  digits: {
    top: 604,
    left: 54,
    width: 267,
    height: 54,
    position: "absolute",
  },
  enter4Digits: {
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
  enterThe4: {
    top: 39,
    left: 1,
    lineHeight: 23,
    color: Color.color,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_sm,
  },
  text4: {
    top: 492,
    left: 19,
    width: 272,
    height: 85,
    position: "absolute",
  },
  enterDigitsChild: {
    top: 432,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorSilver,
    width: 130,
    height: 5,
    left: 123,
    position: "absolute",
  },
  text5: {
    top: 169,
    left: 37,
    width: 304,
    height: 28,
    position: "absolute",
  },
  loginScreen03: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default LoginScreen1;
