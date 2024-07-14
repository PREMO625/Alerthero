import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CreditPoints = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.creditPoints}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg4.png")}
      />
      <View style={styles.headline}>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("HomeScreenForUser")}
        >
          <View style={styles.groupChild} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group4.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textTypo1]}>10</Text>
        <Text style={[styles.creditPoints1, styles.textTypo1]}>
          Credit Points
        </Text>
      </View>
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={styles.creditPointsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-735.png")}
      />
      <Image
        style={[styles.creditPointsItem, styles.creditLayout]}
        resizeMode="cover"
        source={require("../assets/group-981.png")}
      />
      <Image
        style={[styles.creditPointsInner, styles.creditLayout]}
        resizeMode="cover"
        source={require("../assets/group-981.png")}
      />
      <Image
        style={[styles.creditPointsChild1, styles.creditLayout]}
        resizeMode="cover"
        source={require("../assets/group-981.png")}
      />
      <Image
        style={[styles.creditPointsChild2, styles.creditChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-667.png")}
      />
      <Image
        style={[styles.creditPointsChild3, styles.creditChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-667.png")}
      />
      <Image
        style={[styles.creditPointsChild4, styles.creditChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-667.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>10</Text>
      <Text style={[styles.text2, styles.textTypo]}>1200</Text>
      <Text style={[styles.text3, styles.textTypo]}>8</Text>
      <Text style={styles.sendAlerts}>Send Alerts</Text>
      <Text style={[styles.points, styles.pointsTypo]}>Points</Text>
      <Text style={[styles.alertAccepted, styles.pointsTypo]}>
        Alert Accepted
      </Text>
      <View style={[styles.orderStatus, styles.orderShadowBox1]}>
        <View style={styles.orderShadowBox} />
      </View>
      <View style={[styles.orderStatus1, styles.orderShadowBox1]}>
        <View style={styles.orderShadowBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  creditLayout: {
    height: 80,
    width: 78,
    position: "absolute",
  },
  creditChildLayout: {
    height: 158,
    width: 159,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_17xl,
    top: 345,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  pointsTypo: {
    top: 401,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  orderShadowBox1: {
    height: 85,
    width: 337,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 30,
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupIcon: {
    height: "42.33%",
    width: "23.33%",
    top: "23.33%",
    right: "50%",
    bottom: "34.33%",
    left: "26.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    height: 30,
    width: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    marginLeft: -10.5,
    top: 315,
    left: "50%",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  creditPoints1: {
    top: 13,
    left: 52,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  headline: {
    top: 28,
    width: 163,
    height: 336,
    left: 17,
    position: "absolute",
  },
  groupIcon1: {
    top: 112,
    left: 117,
    width: 130,
    height: 127,
    position: "absolute",
  },
  creditPointsChild: {
    top: 121,
    left: 107,
    width: 155,
    height: 133,
    position: "absolute",
  },
  creditPointsItem: {
    top: 151,
    left: 126,
  },
  creditPointsInner: {
    top: 175,
    left: 189,
  },
  creditPointsChild1: {
    top: 99,
    left: 155,
  },
  creditPointsChild2: {
    left: 5,
    top: 313,
    height: 158,
    width: 159,
  },
  creditPointsChild3: {
    left: 258,
    top: 313,
    height: 158,
    width: 159,
  },
  creditPointsChild4: {
    top: 314,
    left: 131,
  },
  text1: {
    left: 41,
  },
  text2: {
    left: 147,
  },
  text3: {
    left: 302,
  },
  sendAlerts: {
    top: 403,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: 17,
    position: "absolute",
  },
  points: {
    left: 162,
  },
  alertAccepted: {
    left: 258,
  },
  orderShadowBox: {
    borderRadius: Border.br_xs,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 85,
    width: 337,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  orderStatus: {
    top: 498,
    left: 19,
  },
  orderStatus1: {
    top: 609,
    left: 23,
  },
  creditPoints: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default CreditPoints;
