import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MyCarousel from './testing';
import Banner1 from '../../assets/images/banner1.png'
import Actor from '../../assets/images/actor.png'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { API_URL, API_URL_IMAGE } from '../../services/api_url';
import { useDispatch, useSelector } from 'react-redux';
import { bannerListAdd, cityListAdd, danceCategoryAdd, hireusAdd, loaderAdd, usersSignInAdd } from '../../redux/reducers/appData';
import { profile } from '../../services/services';

const {width: screenWidth} = Dimensions.get('window');

export const PostLoginLanding = ({navigation}) => {
  const dispatch = useDispatch();
  const cityLists = useSelector(state => state.appData.cityList);
  const getDanceCategory = useSelector(state => state.appData.danceCategory);
  const getbannerList = useSelector(state => state.appData.bannerList);
  const token = useSelector(state => state.appData.token);
  const hirelist = useSelector(state => state.appData.hireusList);

  const BannerWidth = Dimensions.get('window').width * 1;

  const lastBannerData = [
    {count: '1000+', name: 'Classes'},
    {count: '100+', name: 'Workshops'},
    {count: '80+', name: 'Instructors'},
    {count: '70+', name: 'Catogeries'},
  ];

  // unlimited function
  const hireusFun = async () => {
    const response = await fetch(`${API_URL}/getHireList`);
    const data = await response.json();
    dispatch(hireusAdd(data?.hirelist));
  }

  // dance category
  const danceCategory = async () => {
    const response = await fetch(`${API_URL}/getAllCategories`);
    const data = await response.json();
      dispatch(danceCategoryAdd(data));
  }

  // city list
  const cityList = async () => {
    const response = await fetch(`${API_URL}/allcity`);
    const data = await response.json();
    dispatch(cityListAdd(data));
  }

  // banner list
  const bannerList = async () => {
    const response = await fetch(`${API_URL}/getAllBanner`);
    const data = await response.json();
    dispatch(bannerListAdd(data));
  }


  useEffect(() => {
    danceCategory();
    cityList();
    bannerList();
    hireusFun();

    profile(token).then(res => {
      dispatch(usersSignInAdd(res));
    }).catch(err => {
      console.log(err);
    })

  }, []);

  return (
    <ScrollView style={style.view}>
      <StatusBar
        animated={true}
        backgroundColor="#1D283A" />
      <View >
        <Carousel
        style={style.bannerTop}
          data={getbannerList?.banners}
          renderItem={({item}) => {
        return(
        <View style={style.imageContainer}>
          <Image source={{uri: `${API_URL_IMAGE}/${item?.image}`}} style={{width:'100%',height:140,absoluteFillObject:'cover'}} />
        </View>
        )
        }}
          sliderWidth={BannerWidth}
          itemWidth={BannerWidth}
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
        />
      </View>
      <View style={style.section}>
        <View style={style.sectionHeader}>
          <Text style={style.sectionTitle}>Learn to Dance</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('learn-to-dance', { workshop: true });
            }}>
            <Text style={style.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width:320
        }}>
        <MyCarousel />
        </View>
      </View>
      <View style={style.section}>
        <View style={style.sectionHeader}>
          <Text style={style.sectionTitle}>Hire Us</Text>
            <Text style={style.seeAll} onTouchEnd={() => navigation.navigate('Hire Us')}>See All</Text>
        </View>
        <ScrollView horizontal={true} style={{paddingTop: '5%'}}>
          {hirelist?.map((item, index) => {
            return (
              <View key={`${index}`} style={style.hireUsView}>
                <View style={style.teacherImageContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('instructor-details', {id: item._id, item: item})}>
                  <Image
                    style={style.teacherImage}
                    source={{uri: `${API_URL_IMAGE}/${item?.profileImage}`}}
                  />
                  </TouchableOpacity>
                </View>
                <View style={style.teacherDetails}>
                  <Text style={style.teacherName}>{item.name}</Text>
                  <Text style={style.danceType}>{item.designation}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={style.section}>
        <View style={style.workshopstyle}>
          <Text style={style.sectionTitle}>B2D Workshop</Text>
          <TouchableOpacity 
            onPress={() => {
              navigation.navigate('learn-to-dance',{ workshop: false });
            }}>
            <Text style={style.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={{paddingTop: '8%'}}>
          {getDanceCategory?.categorys.slice(0,5).map((item, index) => {
            return (
              <View>
              <View key={`${index}`} style={style.workshopContainer}>
                <TouchableOpacity onPress={() =>  navigation.navigate('dance-type-details', {
                  id: item?._id,
                  item: item,
                  workshop: false
                })}>
                <Image
                  style={style.imageDance}
                  source={{uri: `${API_URL_IMAGE}/${item?.image}`}}
                />
                </TouchableOpacity>
              </View>
              <Text style={{color:'#FFF', marginLeft:'13%',marginTop:scale(-48), paddingBottom:scale(20)}}>{item?.categoryName}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={style.section}>
        <View style={style.sectionHeader}>
          <Text style={style.sectionTitle}>B2D In Cities</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('nearby-classes');
            }}>
            <Text style={style.seeAll} onTouchEnd={() => navigation.navigate('nearby-classes')}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={cityLists?.citys.slice(0, 4)}
          renderItem={({item}) => (
            <View style={style.imageContainerDance} onTouchEnd={() => navigation.navigate('classes-list', {city: item.cityName})}>
              <Image style={{alignSelf: 'center',width: 55,height:50,}} source={{uri: `${API_URL_IMAGE}/${item?.profileImage}`}} />
              <Text style={{color:'#BABFC8', textAlign:'center', marginTop:'5%', fontSize:14, fontWeight:'400'}}>{item?.cityName}</Text>
            </View>
          )}
          numColumns={4}
        />
      </View>
      <View
        style={{
          ...style.bannerView,
          marginTop: '5%',
          marginBottom: '15%',
        }}>
        <Image
          style={style.image}
          source={require('../../assets/images/LastBanner.png')}
        />
        <Text style={{...style.imageTitle, fontSize: 20}}>
          Get unlimited access with Premium
        </Text>
        <FlatList
          style={{ position:'relative', bottom:0, width:'100%', top:'25%'}}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          data={lastBannerData}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
                justifyContent: 'flex-end',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  ...style.imageTitleDance,
                  color: '#ff9300',
                  fontSize: 16,
                }}>
                {item?.count}
              </Text>
              <Text style={style.imageTitleDance}>{item?.name}</Text>
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: '#0E172A',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    backgroundColor: '#000000',
    borderRadius: 8,
    width: screenWidth - 20,
    marginHorizontal: 10,
    marginVertical:10

  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width      : '110%',
		resizeMode : 'contain',
		height     : 200,
    borderRadius:8
  },
  imageTitle: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    marginTop:'13%',
    marginLeft:'6%',
  },
  imageDescription: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 14,
    padding: '5%',
  },
  bannerTop:{
    width: '110%',
		resizeMode: 'cover',
		height : 173,
    borderRadius:8,
  },
  bannerView: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.3,
  },
  section: {
    paddingTop: '5%',
    backgroundColor: '#0E172A'
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:15
  },
  workshopstyle: {
    marginTop: scale(5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:15,
    marginBottom: scale(-18),
  },
  sectionTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 23,
    color: '#FFFFFF',
    paddingLeft:15,
    paddingBottom:10
  },
  seeAll: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#956DFF',
  },
  danceStyleView: {
    paddingVertical: '0%',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.51,
  },
  imageContainerDance: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    backgroundColor: '#0E172A',
    borderRadius: 8,
    justifyContent: 'flex-end',
    height: 80,
  },
  imageDance: {
    ...StyleSheet.absoluteFillObject,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageTitleDance: {
    padding: '1%',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    alignSelf: 'center',
    bottom: 0,
  },
  hireUsView: {
    marginHorizontal: 5,
  },
  teacherName: {
    fontStyle: 'normal',
    marginTop:8,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.1992,
    color: '#FFFFFF',
    textAlign:'center'
  },
  danceType: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    marginTop:5,
    letterSpacing: -0.1992,
    color: '#B6B8BB',
    width:scale(100),
    textAlign:'center'
  },
  teacherImageContainer: {
    borderRadius: 60,
    overflow: 'hidden',
  },
  teacherImage: {
    height: 120,
    width: 120,
  },
  teacherDetails: {
    alignItems: 'center',
  },
  workshopContainer: {
    paddingBottom: scale(50),
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    flex: 1,
  },
});
