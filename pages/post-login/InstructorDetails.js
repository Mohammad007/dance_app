import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { API_URL_IMAGE, API_URL } from "../../services/api_url";

export const InstructorDetails = ({navigation, route}) => {
  const {id,item} = route.params;

  const BannerWidth = Dimensions.get('window').width * 1;

  const renderItem = useCallback(
    ({item, index}) => (
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri: `${API_URL_IMAGE}/${item}`}} />
        {/* <Text style={style.imageTitle}>{item.name}</Text>
        <Text style={style.imageDescription}>{item.description}</Text> */}
      </View>
    ),
    [],
  );

  console.log(item)

  return (
    <ScrollView
      style={style.view}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}>
      <View style={style.bannerView}>
        <Carousel
          data={item?.imagelist}
          renderItem={renderItem}
          sliderWidth={BannerWidth}
          itemWidth={BannerWidth}
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
        />
      </View>
      <View style={style.line}>
        <View style={style.lineHR} />
        <Image style={style.lineLabel} source={{uri: `${API_URL_IMAGE}/${item?.profileImage}`}} />
        <View style={style.lineHR} />
      </View>
      <View style={{flex: 1}}>
        <Text style={style.instructorTitle}>{item?.name}</Text>
        <Text style={style.instructorDescription}>{item.designation}</Text>
      </View>
      <View style={{flex: 30}}>
        <Text style={style.aboutHeder}>About Instructor</Text>
        <Text style={style.about}>{item.about}</Text>
        
        <Image style={{width:'100%', height:scale(160), marginTop:moderateVerticalScale(30)}} source={{uri: `https://api.born2dance.in/uploads/1663439799506_banner.png`}} />
      </View>
      <View style={style.takeClassesContainer}>
        <TouchableOpacity
          style={style.buttonTakeClasses}
          onPress={() => {
            navigation.navigate('hireus-one', {id: item._id});
          }}>
          <LinearGradient
            style={style.takeClassesGradient}
            colors={['#2885E5', '#844AE9']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Text style={{...style.takeClassesButtonText, color: '#FFFFFF'}}>
              Request Us
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  view: {
    padding: '3%',
    backgroundColor: '#0E172A',
    flex: 1,
  },
  bannerView: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.4,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    backgroundColor: '#000000',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  line: {flexDirection: 'row', marginTop: -50},
  lineHR: {
    backgroundColor: '#334155',
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },
  lineLabel: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    fontSize: 12,
    backgroundColor: '#1E293B',
    color: '#E2E8F0',
    borderRadius: 100,
  },
  instructorTitle: {
    padding: '4%',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
  instructorDescription: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(14),
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#BABFC8',
  },
  aboutHeder: {
    paddingTop: '5%',
    paddingBottom: '5%',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: scale(16),
    lineHeight: 19,
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
  about: {
    // paddingHorizontal: '2%',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: scale(13),
    lineHeight: scale(14),
    letterSpacing: -0.24,
    color: '#BABFC8',
  },
  takeClassesContainer: {
    bottom: 8,
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
  },
  takeClassesGradient: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTakeClasses: {
    marginTop: '10%',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'linear-gradient(90deg, #2885E5 0%, #9968EE 100%)',
  },
  takeClassesButtonText: {
    padding: '2%',
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
});
