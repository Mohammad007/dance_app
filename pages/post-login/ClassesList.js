import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { classesAdd } from "../../redux/reducers/appData";
import { API_URL, API_URL_IMAGE } from "../../services/api_url";
import { useDispatch, useSelector } from "react-redux";
import Actor from "../../assets/images/actor.png";
import { moderateVerticalScale, scale } from "react-native-size-matters";


export const ClassesList = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const classLists = useSelector(state => state.appData.classesList);
  const city = route.params.city;

  const classesList = async () => {
    const response = await fetch(`${API_URL}/getStudiosList`);
    const data = await response.json();
    dispatch(classesAdd(data));
  };

  useEffect(() => {
    classesList();
  }, []);

  return (
    <View style={style.view}>
    <View style={style.pageHeaderView}>
      <Text style={style.pageHeader}>City: {city}</Text>
      <Text style={style.pageHeader}>{classLists?.studios?.filter(item => item.state == city).length} Classes</Text>
    </View>
    <ScrollView style={style.view}>
      {classLists?.studios?.filter(item => item.state == city).map((element, index) => (
      <View 
        onTouchEnd={() => {
          navigation.navigate('class-details', {
            id: element._id,
          });
        }}
      >
        <View style={style.card}>
          <View style={style.cardImageContainer}>
            <Image style={style.imageStyle} source={{uri: `${API_URL_IMAGE}/${element?.images[0]}`}} />
          </View>
          <View style={style.cardDetailsContainer}>
            <Text style={style.className}>{element?.studioName}</Text>
            <Text style={style.classRating}>
              4.5
              <AirbnbRating
                count={5}
                defaultRating={4.5}
                size={12}
               ratingContainerStyle={{paddingHorizontal: 5}}
              />
            </Text>
            <Text style={style.classAddress}>{element?.address}</Text>
            <Text style={style.classOpen}>{element?.status == 'Active' ? 'Open' : 'Close'}</Text>
            <Text style={style.classType}>{element?.city}, {element?.state}</Text>
          </View>
        </View>        
      </View>
      ))}
    </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: "#0E172A",
    flex: 1,
    padding: "2%"
  },
  pageHeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "2%",
    paddingLeft: "2%",
  },
  pageHeader: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF"
  },
  pageHeaderValue: {
    marginTop: 1,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF"
  },
  card: {
    marginTop: "3%",
    padding: 8,
    borderColor: "#BABFC8",
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    flexDirection: "row"
  },
  cardImageContainer: {
    flex: 0.65
  },
  imageStyle:{
    width: scale(100),
    height: scale(100),
  },
  cardDetailsContainer: {
    flex: 1
  },
  className: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF"
  },
  classRating: {
    paddingVertical: 8,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#FBFBFB"
  },
  classAddress: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    color: "#BABFC8"
  },
  classOpen: {
    paddingVertical: 5,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "#21F47A"
  },
  classType: {
    paddingVertical: 5,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "#FFFFFF"
  }
});
