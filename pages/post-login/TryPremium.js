import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, moderateVerticalScale,moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { pricesAdd } from '../../redux/reducers/appData';
import { API_URL } from "../../services/api_url";

export const TryPremium = ({navigation, route}) => {
  const dispatch = useDispatch();
  const pricesList = useSelector(state => state.appData.pricesList);
  const [colorv, setColorv] = useState(null)

  // prices function
  const pricesFun = async () => {
    const response = await fetch(`${API_URL}/getPricesList`);
    const data = await response.json();
    dispatch(pricesAdd(data?.priceslist));
  }

  const checkoutPay = async () => {
    ToastAndroid.showWithGravity(
      'Payment method or UPI',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    )
  }

  useEffect(() => {
    pricesFun();
  },[])

  // select prices fun
  const SelectPriceFun = async (item) => {
    setColorv(item._id)
  }


  return (
    <>
     <View style={style.view}>
        <View>
            <View>
                <Image style={style.mainHeaderImage} source={require('../../assets/images/menStep.png')} />
            </View>
        </View>       
        <View style={style.maintextRow}>
            <View>
              <TouchableOpacity onPress={() => {
            navigation.navigate('premium-screen');
          }}>
                <Image style={style.crosbtnImage} source={require('../../assets/images/crossBtn.png')} />
              </TouchableOpacity>
            </View>
            <View>
                <Text style={style.missingText}>Select your subscription package</Text>
            </View>
            {pricesList?.length > 0 ? pricesList.map((item, index) => (
            <View style={{...style.secScroll, backgroundColor: colorv == item?._id ? '#FDB601' : ''}} key={index} onTouchEnd={() => SelectPriceFun(item) }>
                <View>
                    <Text style={style.classesText}>{item?.title}</Text>
                    <Text style={style.weeklyText}>{item?.subtitle}</Text>
                </View>
                <View>
                    <Text style={style.priceText}>₹{item?.price}</Text>
                </View>
            </View>
            )) : null}
        </View>
    </View>
    <View style={style.takeClassesContainer}>
            <TouchableOpacity style={style.buttonTakeClasses} onPress={checkoutPay}>
            <LinearGradient
                style={style.takeClassesGradient}
                colors={['#2885E5', '#844AE9']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <Text style={{...style.takeClassesButtonText, color: '#FFFFFF'}}>
                Checkout
                </Text>
            </LinearGradient>
            </TouchableOpacity>
    </View>
    </>
    
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: '#0E172A',
    flex: 2,
    height: '100%',
  },
  takeClassesContainer: {
    bottom: 8,
    position: 'absolute',
    width: '100%',
    padding: scale(10),
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  takeClassesGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTakeClasses: {
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'linear-gradient(90deg, #2885E5 0%, #9968EE 100%)',
  },
  takeClassesIcon: {
    padding: '2%',
    alignSelf: 'center',
    fontStyle: 'normal',
  },
  takeClassesButtonText: {
    positions:'fixed',
    bottom: 0,
    padding: '3%',
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    borderRadius : 5,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
},
overlay: {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'red',
  opacity: 0.3
},
  mainHeaderImage:{
    width: '100%',
    height: scale(400),
    objecFit: 'cover',
    opacity: .6,
  },
  maintextRow:{
    padding: scale(12),
    backgroundColor: '#1E293B',
    marginTop:  scale(-125),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    height: '100%',
  },
  danceDuration:{
    color:'#FFB800',
    fontSize: scale(20),
    fontWeight: '400',
    lineHeight: scale(12),
    fontStyle: 'normal',
    fontFamily: 'Inter',
    textTransform: 'uppercase',
    paddingTop: scale(8),
    
  },
  danceType:{
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(14),
    marginTop: scale(3),
  },
  missingText:{
    color: '#FFFFFF',
    fontFamly: 'Raleway',
    fontSize: scale(16),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: scale(19),
    paddingTop: scale(18),
    paddingBottom: scale(10),
  },
  secScroll:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
    borderWidth: 1,
    borderColor: '#BABFC8',
    marginBottom: scale(8),
    borderRadius: scale(5),
  },
  classesText:{
    color: '#FFFFFF',
    fontSize: scale(16),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: scale(19),
    fontFamly: 'Raleway',
  },
  weeklyText:{
    color: '#BABFC8',
    fontSize: scale(12),
    fontFamily: 'Raleway',
    marginTop: scale(5),
  },
  priceText:{
    color:'#FFFFFF',
    fontFamily: 'Raleway',    
    marginTop: scale(12),
  },
  crosbtnImage:{
    width: scale(20),
    height: scale(20),
    marginTop: scale(20)
  },
  secScrollLast:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FDB601',
    borderRadius: scale(5),
    padding: '3%',
  },
  weeklyText2:{
    color: '#FFFFFF',
    fontSize: scale(12),
    fontFamily: 'Raleway',
    marginTop: scale(5),
  }
});