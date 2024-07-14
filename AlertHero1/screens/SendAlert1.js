import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SendAlert1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendAlert}>
      <Image
        style={styles.sendAlertChild}
        resizeMode="cover"
        source={require("../assets/line-24.png")}
      />
      <Text style={[styles.description, styles.statusTypo]}>Description :</Text>
      <View style={styles.google}>
        <View style={styles.googleChild} />
      </View>
      <View style={styles.sendAlertItem} />
      <Text style={[styles.description1, styles.description1Typo]}>
        Description
      </Text>
      <View style={[styles.email, styles.emailLayout2]}>
        <View style={[styles.emailChild, styles.emailBorder]} />
        <Text style={[styles.location, styles.locationTypo]}>Location</Text>
      </View>
      <Text style={[styles.viewLocationOn, styles.description1Typo]}>
        view location on map
      </Text>
      <Pressable
        style={styles.component1}
        onPress={() => navigation.navigate("AlertPageForUser")}
      >
        <View style={[styles.component1Child, styles.childPosition]} />
        <View style={[styles.component1Inner, styles.instanceChildPosition]}>
          <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
      </Pressable>
      <View style={[styles.email1, styles.emailLayout1]}>
        <View style={[styles.emailItem, styles.emailLayout1]} />
        <Text style={[styles.contactInfoOf, styles.locationTypo]}>
          Contact info of bystanders
        </Text>
      </View>
      <Text style={[styles.status, styles.statusTypo]}>Status-</Text>
      <View style={[styles.email2, styles.emailLayout]}>
        <View style={[styles.emailInner, styles.emailLayout]} />
        <Text style={[styles.location, styles.locationTypo]}>
          Accepted by ...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    left: 18,
    position: "absolute",
  },
  description1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  emailLayout2: {
    height: 34,
    width: 160,
    position: "absolute",
  },
  emailBorder: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  locationTypo: {
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    top: 6,
    color: Color.color,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    backgroundColor: Color.colorWhite,
  },
  instanceChildPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  emailLayout1: {
    width: 191,
    height: 34,
    position: "absolute",
  },
  emailLayout: {
    width: 242,
    height: 34,
    position: "absolute",
  },
  sendAlertChild: {
    top: 336,
    width: 380,
    height: 1,
    left: 6,
    position: "absolute",
  },
  description: {
    top: 366,
  },
  googleChild: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 22,
    elevation: 22,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 141,
    width: 337,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  google: {
    top: 529,
    height: 141,
    width: 337,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 18,
    position: "absolute",
  },
  sendAlertItem: {
    top: 107,
    backgroundColor: "#f2eded",
    height: 181,
    width: 337,
    left: 18,
    position: "absolute",
  },
  description1: {
    top: 544,
    left: 36,
    color: Color.color,
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
  },
  emailChild: {
    height: 34,
    width: 160,
    position: "absolute",
  },
  location: {
    left: 6,
  },
  email: {
    top: 426,
    left: 5,
  },
  viewLocationOn: {
    top: 461,
    color: Color.colorCornflowerblue,
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    left: 18,
  },
  component1Child: {
    top: "16.67%",
    right: "14.29%",
    width: "85.71%",
    height: "83.33%",
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "100%",
  },
  component1Inner: {
    bottom: "16.67%",
    left: "14.29%",
    width: "85.71%",
    height: "83.33%",
  },
  groupIcon: {
    height: "35.28%",
    width: "20%",
    top: "25%",
    right: "37.14%",
    bottom: "39.72%",
    left: "42.86%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component1: {
    top: 39,
    left: 13,
    width: 35,
    height: 36,
    position: "absolute",
  },
  emailItem: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  contactInfoOf: {
    left: 3,
    width: 185,
  },
  email1: {
    top: 424,
    left: 178,
  },
  status: {
    width: 190,
    top: 730,
  },
  emailInner: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  email2: {
    left: 115,
    top: 730,
  },
  sendAlert: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SendAlert1;
