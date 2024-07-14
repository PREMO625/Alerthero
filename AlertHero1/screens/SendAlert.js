import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SendAlert = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendAlert}>
      <View style={styles.allDoctors}>
        <View style={[styles.doctor4, styles.doctorLayout]}>
          <View style={styles.childShadowBox} />
          <View style={styles.button}>
            <View style={styles.buttonChild} />
            <Text style={[styles.bookNow, styles.bookPosition]}>Book Now</Text>
          </View>
          <View style={[styles.text, styles.textPosition1]}>
            <Text
              style={[styles.nextAvailable, styles.nextAvailableTypo]}
            >{`Next Available `}</Text>
            <Text style={[styles.amTomorrow, styles.text3FlexBox]}>
              <Text style={styles.text1Typo}>10:00</Text>
              <Text style={styles.text3Typo}> AM tomorrow</Text>
            </Text>
          </View>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image2.png")}
          />
          <View style={[styles.text2, styles.text2Position]}>
            <View style={[styles.groupParent, styles.parentGroupPosition]}>
              <View style={[styles.parent, styles.parentGroupPosition]}>
                <Text style={[styles.text3, styles.text3Typo]}>87%</Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
              <View
                style={[styles.patientStoriesParent, styles.patientPosition]}
              >
                <Text style={[styles.text3, styles.text3Typo]}>
                  69 Patient Stories
                </Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
            </View>
            <View style={[styles.text4, styles.textPosition]}>
              <Text style={[styles.toothsDentist, styles.text2Position]}>
                Tooths Dentist
              </Text>
              <Text
                style={[styles.yearsExperience, styles.text3Typo]}
              >{`6 Years experience `}</Text>
              <Text style={[styles.drBalestra, styles.text1Typo]}>
                Dr. Balestra
              </Text>
            </View>
            <Image
              style={[styles.likeIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/like.png")}
            />
          </View>
        </View>
        <View style={[styles.doctor3, styles.doctorLayout]}>
          <View style={styles.childShadowBox} />
          <View style={styles.button}>
            <View style={styles.buttonChild} />
            <Text style={[styles.bookNow1, styles.text1Typo]}>Book Now</Text>
          </View>
          <View style={[styles.text5, styles.textPosition1]}>
            <Text
              style={[styles.nextAvailable, styles.nextAvailableTypo]}
            >{`Next Available `}</Text>
            <Text style={[styles.amTomorrow, styles.text3FlexBox]}>
              <Text style={styles.text1Typo}>11:00</Text>
              <Text style={styles.text3Typo}> AM tomorrow</Text>
            </Text>
          </View>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image3.png")}
          />
          <View style={[styles.text2, styles.text2Position]}>
            <View style={[styles.groupParent, styles.parentGroupPosition]}>
              <View style={styles.group}>
                <Text style={[styles.text3, styles.text3Typo]}>59%</Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
              <View
                style={[styles.patientStoriesParent, styles.patientPosition]}
              >
                <Text style={[styles.text3, styles.text3Typo]}>
                  86 Patient Stories
                </Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
            </View>
            <View style={[styles.text9, styles.textPosition]}>
              <Text style={[styles.toothsDentist, styles.text2Position]}>
                Tooths Dentist
              </Text>
              <Text
                style={[styles.yearsExperience, styles.text3Typo]}
              >{`5 Years experience `}</Text>
              <Text style={[styles.drBalestra, styles.text1Typo]}>
                Dr. Crownover
              </Text>
            </View>
            <Image
              style={[styles.likeIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/like1.png")}
            />
          </View>
        </View>
        <View style={[styles.doctor2, styles.doctorLayout]}>
          <View style={styles.childShadowBox} />
          <View style={styles.button}>
            <View style={styles.buttonChild} />
            <Text style={[styles.bookNow1, styles.text1Typo]}>Book Now</Text>
          </View>
          <View style={[styles.text, styles.textPosition1]}>
            <Text
              style={[styles.nextAvailable, styles.nextAvailableTypo]}
            >{`Next Available `}</Text>
            <Text style={[styles.amTomorrow, styles.text3FlexBox]}>
              <Text style={styles.text1Typo}>12:00</Text>
              <Text style={styles.text3Typo}> AM tomorrow</Text>
            </Text>
          </View>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image4.png")}
          />
          <View style={[styles.text2, styles.text2Position]}>
            <View style={[styles.groupView, styles.parentGroupPosition]}>
              <View style={[styles.parent, styles.parentGroupPosition]}>
                <Text style={[styles.text3, styles.text3Typo]}>74%</Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
              <View
                style={[styles.patientStoriesContainer, styles.patientPosition]}
              >
                <Text style={[styles.text3, styles.text3Typo]}>
                  78 Patient Stories
                </Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
            </View>
            <View style={[styles.text14, styles.textPosition]}>
              <Text style={[styles.toothsDentist, styles.text2Position]}>
                Tooths Dentist
              </Text>
              <Text
                style={[styles.yearsExperience, styles.text3Typo]}
              >{`9 Years experience `}</Text>
              <Text style={[styles.drBalestra, styles.text1Typo]}>
                Dr. Watamaniuk
              </Text>
            </View>
            <Image
              style={[styles.likeIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/like.png")}
            />
          </View>
        </View>
        <View style={[styles.doctor1, styles.doctorLayout]}>
          <View style={styles.childShadowBox} />
          <View style={styles.button}>
            <View style={styles.buttonChild} />
            <Text style={[styles.bookNow1, styles.text1Typo]}>Book Now</Text>
          </View>
          <View style={[styles.text, styles.textPosition1]}>
            <Text
              style={[styles.nextAvailable, styles.nextAvailableTypo]}
            >{`Next Available `}</Text>
            <Text style={[styles.amTomorrow, styles.text3FlexBox]}>
              <Text style={styles.text1Typo}>10:00</Text>
              <Text style={styles.text3Typo}> AM tomorrow</Text>
            </Text>
          </View>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image5.png")}
          />
          <View style={[styles.text2, styles.text2Position]}>
            <View style={[styles.groupParent, styles.parentGroupPosition]}>
              <View style={[styles.parent, styles.parentGroupPosition]}>
                <Text style={[styles.text3, styles.text3Typo]}>87%</Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
              <View
                style={[styles.patientStoriesParent, styles.patientPosition]}
              >
                <Text style={[styles.text3, styles.text3Typo]}>
                  69 Patient Stories
                </Text>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../assets/ellipse-166.png")}
                />
              </View>
            </View>
            <View style={[styles.text19, styles.textPosition]}>
              <Text style={[styles.toothsDentist, styles.text2Position]}>
                Tooths Dentist
              </Text>
              <Text
                style={[styles.yearsExperience, styles.text3Typo]}
              >{`7 Years experience `}</Text>
              <Text style={[styles.drBalestra, styles.text1Typo]}>
                Dr. Shruti Kedia
              </Text>
            </View>
            <Image
              style={[styles.likeIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/like1.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={styles.button4}
        onPress={() => navigation.navigate("SendAlert1")}
      >
        <View style={styles.buttonChild1} />
      </Pressable>
      <Text style={styles.sendAlert1}>Send Alert</Text>
      <View style={styles.sendAlertChild} />
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <View style={styles.sendAlertItem} />
      <Image
        style={styles.uploadIcon}
        resizeMode="cover"
        source={require("../assets/upload1.png")}
      />
      <View style={[styles.google, styles.googleLayout1]}>
        <View style={[styles.googleChild, styles.googleShadowBox]} />
        <Text style={styles.uploadTakeVideo}>upload /Take Video</Text>
      </View>
      <Image
        style={styles.sendAlertInner}
        resizeMode="cover"
        source={require("../assets/line-23.png")}
      />
      <Text style={styles.description}>Description :</Text>
      <View style={[styles.email, styles.emailLayout1]}>
        <View style={[styles.emailChild, styles.emailBorder]} />
        <Text style={[styles.location, styles.locationTypo]}>Location</Text>
      </View>
      <View style={[styles.email1, styles.emailLayout]}>
        <View style={[styles.emailItem, styles.emailLayout]} />
        <Text style={[styles.contactInfoOf, styles.locationTypo]}>
          Contact info of bystanders
        </Text>
      </View>
      <View style={[styles.google1, styles.googleLayout]}>
        <View style={[styles.googleItem, styles.googleLayout]} />
      </View>
      <Text style={[styles.description1, styles.description1Typo]}>
        Description:
      </Text>
      <Text style={[styles.viewLocationOn, styles.description1Typo]}>
        view location on map
      </Text>
      <Pressable
        style={styles.component3}
        onPress={() => navigation.navigate("AlertPageForUser")}
      >
        <View style={[styles.component3Child, styles.childPosition]} />
        <View style={[styles.component3Inner, styles.component3Layout]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
        </View>
        <Image
          style={[styles.groupIcon1, styles.iconGroupLayout]}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  doctorLayout: {
    height: 170,
    left: 0,
    width: 335,
    position: "absolute",
  },
  bookPosition: {
    width: 57,
    textAlign: "left",
    color: Color.colorWhite,
    left: 28,
    top: 10,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textPosition1: {
    left: 21,
    top: 122,
    height: 34,
    position: "absolute",
  },
  nextAvailableTypo: {
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    textAlign: "left",
    left: 0,
  },
  text3FlexBox: {
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  text2Position: {
    top: 22,
    position: "absolute",
  },
  parentGroupPosition: {
    height: 13,
    left: 0,
    position: "absolute",
  },
  text3Typo: {
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
  },
  patientPosition: {
    left: 51,
    height: 13,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    height: 57,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  googleLayout1: {
    height: 54,
    width: 160,
    position: "absolute",
  },
  googleShadowBox: {
    elevation: 22,
    shadowRadius: 22,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  emailLayout1: {
    width: 160,
    height: 34,
    position: "absolute",
  },
  emailBorder: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  locationTypo: {
    top: 6,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.rubikLight,
    fontWeight: "300",
    color: Color.color,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  emailLayout: {
    width: 191,
    height: 34,
    position: "absolute",
  },
  googleLayout: {
    height: 141,
    width: 337,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  description1Typo: {
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  component3Layout: {
    width: "85.71%",
    height: "83.33%",
  },
  childShadowBox: {
    borderRadius: Border.br_5xs,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: 0,
    height: 170,
    left: 0,
    width: 335,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  buttonChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorMediumseagreen,
    height: 34,
    width: 112,
    top: 0,
    left: 0,
    position: "absolute",
  },
  bookNow: {
    fontFamily: FontFamily.rubikRegular,
    width: 57,
    textAlign: "left",
    color: Color.colorWhite,
    left: 28,
    top: 10,
  },
  button: {
    top: 119,
    left: 206,
    height: 34,
    width: 112,
    position: "absolute",
  },
  nextAvailable: {
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  amTomorrow: {
    top: 20,
    color: Color.color,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    left: 0,
  },
  text: {
    width: 103,
  },
  imageIcon: {
    top: 18,
    width: 92,
    height: 87,
    left: 20,
    position: "absolute",
  },
  text3: {
    left: 14,
    fontSize: FontSize.size_2xs,
    color: Color.color,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    top: 0,
  },
  groupChild: {
    top: 1,
    width: 10,
    height: 10,
    left: 0,
    position: "absolute",
  },
  parent: {
    width: 34,
    top: 0,
  },
  patientStoriesParent: {
    width: 98,
  },
  groupParent: {
    width: 149,
    top: 67,
    height: 13,
  },
  toothsDentist: {
    fontFamily: FontFamily.pTSansRegular,
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    textAlign: "left",
    left: 0,
  },
  yearsExperience: {
    top: 43,
    color: Color.color,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_xs,
    left: 0,
  },
  drBalestra: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
    top: 0,
    left: 0,
  },
  text4: {
    width: 98,
  },
  likeIcon: {
    height: "21.25%",
    width: "9.9%",
    bottom: "78.75%",
    left: "90.1%",
    right: "0%",
    top: "0%",
  },
  text2: {
    left: 126,
    width: 192,
    height: 80,
  },
  doctor4: {
    top: 540,
  },
  bookNow1: {
    width: 57,
    textAlign: "left",
    color: Color.colorWhite,
    left: 28,
    top: 10,
    fontSize: FontSize.size_xs,
    position: "absolute",
    fontWeight: "500",
  },
  text5: {
    width: 101,
  },
  group: {
    width: 35,
    height: 13,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text9: {
    width: 119,
  },
  doctor3: {
    top: 360,
  },
  patientStoriesContainer: {
    width: 97,
  },
  groupView: {
    width: 148,
    top: 67,
    height: 13,
  },
  text14: {
    width: 131,
  },
  doctor2: {
    top: 180,
  },
  text19: {
    width: 130,
  },
  doctor1: {
    top: 0,
  },
  allDoctors: {
    top: 51,
    left: 495,
    height: 710,
    width: 335,
    position: "absolute",
  },
  buttonChild1: {
    borderRadius: Border.br_xs,
    height: 59,
    width: 269,
    backgroundColor: Color.colorMediumseagreen,
    top: 0,
    left: 0,
    position: "absolute",
  },
  button4: {
    top: 720,
    left: 53,
    height: 59,
    width: 269,
    position: "absolute",
  },
  sendAlert1: {
    top: 735,
    left: 88,
    width: 199,
    height: 16,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    color: Color.colorWhite,
    position: "absolute",
  },
  sendAlertChild: {
    top: 45,
    width: 30,
    height: 30,
    borderRadius: Border.br_3xs,
    left: 13,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupIcon: {
    height: "1.56%",
    width: "1.87%",
    top: "6.65%",
    right: "91.47%",
    bottom: "91.79%",
    left: "6.67%",
  },
  sendAlertItem: {
    top: 91,
    left: 63,
    borderRadius: 50,
    backgroundColor: "#d4e0f7",
    borderStyle: "dashed",
    borderColor: Color.colorMediumseagreen,
    borderWidth: 4,
    width: 281,
    height: 211,
    position: "absolute",
  },
  uploadIcon: {
    top: 116,
    left: 169,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  googleChild: {
    height: 54,
    width: 160,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  uploadTakeVideo: {
    top: 19,
    left: 9,
    fontWeight: "600",
    fontFamily: FontFamily.rubikSemiBold,
    fontSize: FontSize.size_base,
    color: Color.color,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  google: {
    top: 185,
    left: 122,
  },
  sendAlertInner: {
    top: 397,
    width: 380,
    height: 1,
    left: 6,
    position: "absolute",
  },
  description: {
    top: 428,
    left: 22,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  emailChild: {
    width: 160,
    height: 34,
    position: "absolute",
  },
  location: {
    left: 6,
  },
  email: {
    top: 469,
    left: 6,
  },
  emailItem: {
    borderWidth: 1,
    borderColor: Color.colorSlategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  contactInfoOf: {
    left: 3,
    width: 185,
  },
  email1: {
    top: 470,
    left: 175,
  },
  googleItem: {
    elevation: 22,
    shadowRadius: 22,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: Border.br_xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  google1: {
    left: 19,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 540,
  },
  description1: {
    top: 553,
    left: 27,
    color: Color.color,
  },
  viewLocationOn: {
    top: 505,
    color: Color.colorCornflowerblue,
    left: 20,
  },
  component3Child: {
    top: "16.67%",
    right: "14.29%",
    width: "85.71%",
    height: "83.33%",
  },
  instanceChild: {
    height: "100%",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    right: "0%",
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: "100%",
  },
  component3Inner: {
    bottom: "16.67%",
    left: "14.29%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon1: {
    height: "35.28%",
    width: "20%",
    top: "25%",
    right: "37.14%",
    bottom: "39.72%",
    left: "42.86%",
  },
  component3: {
    top: 42,
    height: 36,
    left: 13,
    width: 35,
    position: "absolute",
  },
  sendAlert: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SendAlert;
