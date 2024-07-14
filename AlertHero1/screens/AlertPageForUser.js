import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AlertPageForUser = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.alertPageForUser, styles.instanceChildLayout]}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg5.png")}
      />
      <View style={styles.headline}>
        <Pressable
          style={styles.groupChildPosition}
          onPress={() => navigation.navigate("HomeScreenForUser")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group6.png")}
          />
        </Pressable>
        <Text style={[styles.alerts, styles.alertsTypo]}>Alerts</Text>
      </View>
      <View style={[styles.allDoctors, styles.doctor1Layout]}>
        <View style={[styles.doctor1, styles.doctor1Layout]}>
          <View style={[styles.doctor1, styles.doctor1Layout]}>
            <View style={[styles.instanceChild, styles.instanceChildLayout]} />
          </View>
          <Pressable
            style={[styles.button, styles.buttonLayout]}
            onPress={() => navigation.navigate("SendAlert1")}
          >
            <View style={[styles.buttonChild, styles.childPosition]} />
            <Text style={[styles.viewStatus, styles.viewStatusTypo]}>
              View Status
            </Text>
          </Pressable>
          <View style={[styles.descriptionParent, styles.buttonLayout]}>
            <Text style={[styles.description, styles.alertsTypo]}>
              Description
            </Text>
            <Text style={[styles.description1, styles.viewStatusTypo]}>
              Description...
            </Text>
          </View>
          <View style={[styles.image, styles.imageLayout]}>
            <View style={[styles.imageChild, styles.imageLayout]} />
          </View>
          <View style={[styles.text, styles.textLayout]}>
            <View style={[styles.text1, styles.textLayout]}>
              <Text style={[styles.location, styles.alertsTypo]}>
                Location-
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.alertPageForUserChild} />
      <Image
        style={styles.videoIcon}
        resizeMode="cover"
        source={require("../assets/video.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  instanceChildLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  groupChildPosition: {
    width: 30,
    left: 0,
    top: 0,
    height: 30,
    position: "absolute",
  },
  alertsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  doctor1Layout: {
    height: 170,
    width: 335,
    position: "absolute",
  },
  buttonLayout: {
    height: 34,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  viewStatusTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    position: "absolute",
  },
  imageLayout: {
    height: 87,
    width: 92,
    position: "absolute",
  },
  textLayout: {
    height: 21,
    width: 83,
    position: "absolute",
  },
  bgIcon: {
    top: -33,
    left: -99,
    width: 544,
    height: 905,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 30,
  },
  groupIcon: {
    height: "42.33%",
    width: "23.33%",
    top: "5%",
    right: "50%",
    bottom: "52.67%",
    left: "26.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  alerts: {
    top: 5,
    left: 49,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
  },
  headline: {
    top: 36,
    width: 100,
    height: 30,
    left: 20,
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "2.09%",
    bottom: "0%",
    left: "-2.09%",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  doctor1: {
    left: 0,
    top: 0,
  },
  buttonChild: {
    backgroundColor: Color.colorMediumseagreen,
    height: 34,
    position: "absolute",
    width: 112,
  },
  viewStatus: {
    top: 10,
    left: 25,
    color: Color.colorWhite,
  },
  button: {
    top: 105,
    left: 184,
    width: 112,
    height: 34,
  },
  description: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  description1: {
    top: 20,
    color: Color.color,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  descriptionParent: {
    top: 51,
    left: 128,
    width: 74,
  },
  imageChild: {
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  image: {
    top: 18,
    left: 20,
  },
  location: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  text1: {
    left: 0,
    top: 0,
  },
  text: {
    top: 22,
    left: 126,
  },
  allDoctors: {
    top: 143,
    left: 20,
  },
  alertPageForUserChild: {
    top: 162,
    left: 40,
    backgroundColor: "#d9d9d9",
    height: 86,
    width: 92,
    position: "absolute",
  },
  videoIcon: {
    top: 180,
    left: 62,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  alertPageForUser: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default AlertPageForUser;
