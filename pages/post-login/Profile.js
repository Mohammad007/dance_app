import React from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import crossIcon from "../../assets/images/crossBtn.png";
import download from "../../assets/images/download.png";
import wallet from "../../assets/images/wallet.png";
import note from "../../assets/images/note.png";
import hire from "../../assets/images/hire.png";
import phone from "../../assets/images/phone.png";
import { useDispatch, useSelector } from "react-redux";
import { tokenAdd, usersSignInAdd } from "../../redux/reducers/appData";
import { API_URL_IMAGE } from "../../services/api_url";

export function Profile({ navigation }) {
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.appData.usersSignIn);

  const style = {
    TextButton: {
      fontSize: scale(15),
      fontWeight: "Inter",
      color: "#000000",
      backgroundColor: "#FFFFFF",
      width: "35%",
      padding: "1.5%",
      borderRadius: scale(5),
      textAlign: "center"
    },
    profileStyle: {
      flex: 1,
      alignItems: "center",
      marginTop: moderateVerticalScale(10)
    },
    profileImage: {
      width: scale(90),
      height: scale(90),
      borderRadius: scale(45),
      marginTop: moderateVerticalScale(6)
    },
    profileList: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: moderateVerticalScale(6),
      backgroundColor: "#1E293B",
      width: "100%",
      height: "60%",
      borderTopLeftRadius: scale(30),
      borderTopRightRadius: scale(30),
      paddingTop: moderateVerticalScale(10)
    }
  };
  return (
    <LinearGradient
      colors={["#2885E5", "#9968EE"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 0.4 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <Image
              source={crossIcon}
              style={{
                width: scale(15),
                height: scale(15),
                marginTop: moderateVerticalScale(6)
              }}
            />
          </TouchableOpacity>
          <Text style={style.TextButton}>Buy Premium</Text>
        </View>

        <View style={style.profileStyle}>
          <Image
            source={{ uri: `${API_URL_IMAGE}/`+userDetail?.profileImage }}
            style={style.profileImage}
          />
          <Text
            style={{
              fontSize: scale(20),
              fontWeight: "bold",
              color: "#FFFFFF",
              marginTop: moderateVerticalScale(6)
            }}
          >
            {userDetail?.fullname}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("profileTwo", { users:userDetail })}>
          <Text
            style={{
              fontSize: scale(15),
              fontWeight: "bold",
              color: "#FFFFFF",
              marginTop: moderateVerticalScale(6)
            }}
          >
            View Profile
          </Text>
          </TouchableOpacity>
        </View>
        <View style={style.profileList}>
          <FlatList
            data={[
              { key: "My wallet", image: wallet, route: "Wallet" },
              { key: "Register Dance class", image: note, route: "Nearby Classes" },
              { key: "Refer & Earn", image: note, route: "refer"},
              { key: "Hire Us", image: hire, route: "Hire Us" },
              { key: "Contact Us", image: phone, route: "contact" },
              { key: "Downloads", image: download, route: "download" },
              { key: "Logout", image: download, route: "logout" }
            ]}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      padding: moderateVerticalScale(15),
                      width: "100%",
                      borderBottomColor: "#334155",
                      borderBottomWidth: 1,
                      display: "flex"
                    }}
                    onPress={() => {
                      if(item.route == "logout"){
                        navigation.navigate("login")
                        dispatch(tokenAdd(null));
                        dispatch(usersSignInAdd(null))       
                      } else {
                      navigation.navigate(item.route);
                      }
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: scale(20),
                        height: scale(20),
                        marginRight: 15,
                        marginTop: 10
                      }}
                    />
                    <Text
                      style={{
                        fontSize: scale(15),
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        marginTop: moderateVerticalScale(6),
                        textAlign: "left"
                      }}
                    >
                      {item.key}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
