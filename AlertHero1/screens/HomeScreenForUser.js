import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomeScreenForUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreenForUser}>
      <View style={styles.profilePosition}>
        <LinearGradient
          style={[styles.profileChild, styles.profilePosition]}
          locations={[0, 1]}
          colors={["#0ebe7e", "#07d9ad"]}
          useAngle={true}
          angle={101.01}
        />
        <View style={styles.group}>
          <Image
            style={[styles.imageIcon, styles.imageIconPosition]}
            resizeMode="cover"
            source={require("../assets/image1.png")}
          />
          <View style={styles.text}>
            <Text style={styles.welcome}>Welcome !!</Text>
            <Text style={styles.togetherForImmediate}>
              Together for Immediate Response
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.statsBer}>
        <View style={styles.timeParent}>
          <Text style={styles.time}>9:41</Text>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.capIconPosition]}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capIconPosition]} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <Image
        style={styles.homeScreenForUserChild}
        resizeMode="cover"
        source={require("../assets/line-23.png")}
      />
      <View style={[styles.orderStatus, styles.orderShadowBox1]}>
        <Pressable
          style={styles.orderShadowBox}
          onPress={() => navigation.navigate("SignUpLoginForFR")}
        />
        <View style={styles.registerAsFirstResponderParent}>
          <Text style={styles.registerAsFirst}>
            Register as a First Responder
          </Text>
          <Image
            style={[styles.groupChild, styles.imageIconPosition]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
        </View>
      </View>
      <View style={[styles.orderStatus1, styles.orderShadowBox1]}>
        <Pressable
          style={styles.orderShadowBox}
          onPress={() => navigation.navigate("SignUpLoginForFR")}
        />
        <View style={styles.registerAsFirstResponderParent}>
          <Text style={styles.registerAsFirst}>Register as a Dispatcher</Text>
          <Image
            style={[styles.groupChild, styles.imageIconPosition]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
        </View>
      </View>
      <View style={styles.homeScreenForUserItem} />
      <Text style={styles.search}>{`Search..... `}</Text>
      <View style={styles.search1}>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group3.png")}
        />
        <Image
          style={[styles.searchChild, styles.tabIconPosition]}
          resizeMode="cover"
          source={require("../assets/group-29.png")}
        />
      </View>
      <View style={styles.component4}>
        <Image
          style={[styles.tabIcon, styles.tabIconPosition]}
          resizeMode="cover"
          source={require("../assets/tab.png")}
        />
        <Text style={[styles.creditPoints, styles.sendAlertTypo]}>
          Credit Points
        </Text>
        <Text style={[styles.viewAlerts, styles.sendAlertTypo]}>
          View Alerts
        </Text>
        <Text style={[styles.sendAlert, styles.sendAlertTypo]}>Send Alert</Text>
        <Pressable
          style={[styles.upload, styles.uploadLayout]}
          onPress={() => navigation.navigate("SendAlert")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/upload.png")}
          />
        </Pressable>
        <Pressable
          style={styles.icon1}
          onPress={() => navigation.navigate("CreditPoints")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
        <Image
          style={[styles.alertTriangleIcon, styles.uploadLayout]}
          resizeMode="cover"
          source={require("../assets/alert-triangle.png")}
        />
      </View>
      <Image
        style={styles.homeScreenForUserInner}
        resizeMode="cover"
        source={require("../assets/frame-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition: {
    height: 255,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  imageIconPosition: {
    height: 81,
    top: 0,
    position: "absolute",
  },
  borderPosition: {
    height: 11,
    top: "50%",
    position: "absolute",
  },
  capIconPosition: {
    top: "50%",
    position: "absolute",
  },
  orderShadowBox1: {
    height: 171,
    width: 167,
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tabIconPosition: {
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sendAlertTypo: {
    color: Color.colorBlack,
    lineHeight: 23,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  uploadLayout: {
    height: "38.1%",
    width: "12.73%",
    position: "absolute",
  },
  profileChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.linear,
  },
  imageIcon: {
    left: 255,
    width: 84,
  },
  welcome: {
    fontSize: FontSize.size_5xl,
    color: "#fafafa",
    width: 136,
    height: 36,
    textAlign: "left",
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  togetherForImmediate: {
    top: 46,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    height: 108,
    color: Color.colorWhite,
    textAlign: "left",
    letterSpacing: 0,
    width: 297,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 55,
    height: 154,
    width: 297,
    left: 0,
    position: "absolute",
  },
  group: {
    top: 29,
    left: 28,
    width: 339,
    height: 209,
    position: "absolute",
  },
  time: {
    width: 54,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    marginTop: -9,
    height: 18,
    top: "50%",
    color: Color.colorWhite,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  border: {
    marginTop: -5.35,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 21,
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    right: 0,
  },
  capacity: {
    marginTop: -3.55,
    right: 4,
    borderRadius: 1,
    width: 17,
    height: 7,
    backgroundColor: Color.colorWhite,
    top: "50%",
  },
  battery: {
    marginTop: -6,
    width: 23,
    right: 0,
  },
  wifiIcon: {
    width: 14,
    height: 10,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 10,
  },
  timeParent: {
    marginTop: -9,
    height: 18,
    width: 349,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  statsBer: {
    marginTop: -576,
    left: 6,
    height: 18,
    width: 349,
    top: "50%",
    position: "absolute",
  },
  homeScreenForUserChild: {
    top: 486,
    left: -3,
    width: 380,
    height: 1,
    position: "absolute",
  },
  orderShadowBox: {
    borderRadius: Border.br_5xs,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 171,
    width: 167,
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
  registerAsFirst: {
    top: 103,
    height: 19,
    color: Color.color,
    width: 106,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 12,
    width: 79,
  },
  registerAsFirstResponderParent: {
    top: 26,
    left: 32,
    height: 121,
    width: 106,
    position: "absolute",
  },
  orderStatus: {
    top: 527,
    left: 198,
  },
  orderStatus1: {
    top: 528,
    left: 9,
  },
  homeScreenForUserItem: {
    top: 228,
    left: 24,
    borderRadius: Border.br_7xs,
    width: 335,
    height: 54,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  search: {
    top: 249,
    left: 62,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_mini,
    color: Color.color,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "84.62%",
    width: "3.73%",
    top: "7.69%",
    bottom: "7.69%",
    left: "96.27%",
    right: "0%",
    position: "absolute",
  },
  searchChild: {
    width: "4.41%",
    right: "95.59%",
    bottom: "0%",
    height: "100%",
  },
  search1: {
    height: "1.6%",
    width: "78.67%",
    top: "30.79%",
    right: "10.67%",
    bottom: "67.61%",
    left: "10.67%",
    position: "absolute",
  },
  tabIcon: {
    height: "97.62%",
    bottom: "2.38%",
    right: "0%",
    width: "100%",
  },
  creditPoints: {
    top: "79.37%",
    left: "68.7%",
  },
  viewAlerts: {
    top: "80.95%",
    left: "35.81%",
  },
  sendAlert: {
    top: "81.75%",
    left: "1.06%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  upload: {
    left: "4.77%",
    top: "18.25%",
    right: "82.49%",
    bottom: "43.65%",
  },
  icon1: {
    left: "75.07%",
    top: "20.63%",
    right: "13.53%",
    bottom: "45.24%",
    width: "11.41%",
    height: "34.13%",
    position: "absolute",
  },
  alertTriangleIcon: {
    top: "19.05%",
    right: "47.48%",
    bottom: "42.86%",
    left: "39.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component4: {
    top: 328,
    left: 11,
    width: 377,
    height: 126,
    position: "absolute",
  },
  homeScreenForUserInner: {
    top: 720,
    height: 92,
    width: 375,
    left: 0,
    position: "absolute",
  },
  homeScreenForUser: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeScreenForUser;
