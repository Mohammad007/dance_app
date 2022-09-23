import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hireusAdd } from '../../redux/reducers/appData';
import { API_URL_IMAGE, API_URL } from "../../services/api_url";

export const HireUs = ({navigation}) => {
  const dispatch = useDispatch();
  const hirelist = useSelector(state => state.appData.hireusList);

  // unlimited function
  const hireusFun = async () => {
    const response = await fetch(`${API_URL}/getHireList`);
    const data = await response.json();
    dispatch(hireusAdd(data?.hirelist));
  }

  useEffect(() => {
    hireusFun();
  },[])

  return (
    <ScrollView style={style.view}>
      <View style={{marginTop:10}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff', marginBottom: 20}}>Hire Us</Text>
      </View>
      {hirelist?.length > 0 ? hirelist?.map((item, index) => {
        return (
          <View
            style={style.headerContainer}
            onTouchEnd={() => {
              navigation.navigate('instructor-details', {id: item._id, item: item});
            }} key={index}>
            <View style={style.headerLogo}>
              <Image
                style={style.instructorlogo}
                source={{uri: `${API_URL_IMAGE}/${item?.profileImage}`}}
              />
            </View>
            <View style={style.headerTitleContainer}>
              <Text style={style.headerTitle}>{item.name}</Text>
              <Text style={style.headerDescription}>{item.designation}</Text>
            </View>
            <View style={style.arrow}>
              <Image source={require('../../assets/images/arrow.png')} />
            </View>
          </View>
        );
      }) : null}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: '#0E172A',
    flex: 1,
    padding: '3%',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: '2%',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '5%',
  },
  headerLogo: {
    overflow: 'hidden',
    borderRadius: 100,
  },
  instructorlogo: {
    height: 70,
    width: 70,
  },
  headerTitleContainer: {flex: 2, paddingTop: '5%', paddingLeft: '5%'},
  headerTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    marginBottom: '4%'
  },
  headerDescription: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: '#BABFC8',
  },
  arrow: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});