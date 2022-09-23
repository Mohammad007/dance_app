import { StackRouter } from "@react-navigation/native";
import React from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Box
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import crossIcon from "../../assets/images/crossBtn.png";

export function Wallet({ navigation }) {
  const style = {
    profileStyle: {
      flex: 1,
      alignItems: "center"
    },
    profileList: {
      backgroundColor: "#0F172A",
      width: "100%",
      height: "80%"
    },
    walletCardStyle: {
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "#1D283A",
      borderRadius: scale(10),
      width: scale(315),
      height: "auto",
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      marginTop: moderateVerticalScale(-75)
    },
    mainCardStyle: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      padding: scale(15)
    },
    walletrefralText: {
      color: "#C4C4C4",
      fontSize: scale(14),
      fontWeight: "500",
      lineHeight: scale(16)
    },
    walletImage: {
      width: scale(40),
      height: scale(40)
    },
    walletTimeText: {
      color: "#FFFFFF",
      fontSize: scale(20),
      lineHeight: scale(24),
      fontWeight: "700"
    },
    walletcardText: {
      color: "#BABFC8",
      fontWeight: "400",
      fontSize: scale(12),
      lineHeight: scale(14),
      padding: scale(15)
    },
    historyStyle: {
      marginTop: moderateVerticalScale(10),
      padding: "4.5%"
    },
    historyText: {
      color: "#fff",
      fontSize: scale(20),
      fontWeight: "600",
      lineHeight: scale(23)
    },
    historyCard:{
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#7A8E9A',
      marginTop: moderateVerticalScale(8),
      paddingTop: '2%',
      paddingBottom: '4%',
    },
    historyCardTexone:{
      color: '#FFFFFF',
      fontSize: scale(16),
      lineHeight: scale(19),
      fontWeight: '500',
    },
    histryPromoCode:{
      color: '#FFFFFF',
      fontSize: scale(14),
      lineHeight: scale(16),
      fontWeight: '400',
      marginTop: moderateVerticalScale(5),
    },
    historyDateText:{
      color: '#BABFC8',
      fontSize: scale(10),
      lineHeight: scale(12),
      fontWeight: '400',
      marginTop: moderateVerticalScale(5),
    },
    historyTimeText:{
      color: '#FFFFFF',
      fontSize: scale(16),
      lineHeight: scale(19),
      fontWeight: '700',
      marginTop: moderateVerticalScale(24)
    }
  };
  return (
    <LinearGradient
      colors={["#2885E5", "#9968EE"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={style.profileStyle} />
        <View style={style.profileList}>
          <View>
            <View style={style.walletCardStyle}>
              <View style={style.mainCardStyle}>
                <View>
                  <Text style={style.walletrefralText}>Referal Minutes </Text>
                  <Text style={style.walletTimeText}>20:00 mins</Text>
                </View>
                <View style={style.cardInnerStyle}>
                  <Image
                    source={require("../../assets/images/wallet2.png")}
                    style={style.walletImage}
                  />
                </View>
              </View>
              <View>
                <Text style={style.walletcardText}>
                  The maximum you share with your friends more seconds you’ll
                  get to watch subscription videos
                </Text>
              </View>
            </View>
          </View>
          <View style={style.historyStyle}>
            <View style={style.history}>
              <Text style={style.historyText}>History</Text>
            </View>
            <View style={style.historyCard}>
              <View>
                <Text style={style.historyCardTexone}>Craig Schleifer</Text>
                <Text style={style.histryPromoCode}>Promo code: hshgqshgsheuu2</Text>
                <Text style={style.historyDateText}>July 20</Text>
              </View>
              <View>
                <Text style={style.historyTimeText}>+60 sec</Text>
              </View>
            </View>
            <View style={style.historyCard}>
              <View>
                <Text style={style.historyCardTexone}>Emery Schleifer</Text>
                <Text style={style.histryPromoCode}>Promo code: ue7eywhw9w</Text>
                <Text style={style.historyDateText}>July 20</Text>
              </View>
              <View>
                <Text style={style.historyTimeText}>+2 min</Text>
              </View>
            </View>
            <View style={style.historyCard}>
              <View>
                <Text style={style.historyCardTexone}>Ahmad George</Text>
                <Text style={style.histryPromoCode}>Promo code: ue7eywhw9w</Text>
                <Text style={style.historyDateText}>July 20</Text>
              </View>
              <View>
                <Text style={style.historyTimeText}>+2 min</Text>
              </View>
            </View>
            <View style={style.historyCard}>
              <View>
                <Text style={style.historyCardTexone}>Ahmad George</Text>
                <Text style={style.histryPromoCode}>Promo code: ue7eywhw9w</Text>
                <Text style={style.historyDateText}>July 20</Text>
              </View>
              <View>
                <Text style={style.historyTimeText}>+2 min</Text>
              </View>
            </View>
            <View style={style.historyCard}>
              <View>
                <Text style={style.historyCardTexone}>Ahmad George</Text>
                <Text style={style.histryPromoCode}>Promo code: ue7eywhw9w</Text>
                <Text style={style.historyDateText}>July 20</Text>
              </View>
              <View>
                <Text style={style.historyTimeText}>+2 min</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
