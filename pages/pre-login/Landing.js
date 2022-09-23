import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const style = StyleSheet.create({
  image: {
    height: '80%',
  },
  header: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#0F172A',
    margin: '1%',
    paddingBottom: '2%',
  },
  view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexGrow: 1,
    padding: '3%',
    marginBottom: '2%',
  },
  buttonLogin: {
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'linear-gradient(90deg, #2885E5 0%, #9968EE 100%)',
    padding: '2%',
  },
  buttonSignUp: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#2885E5',
    margin: '2%',
  },
  loginButtonText: {
    padding: '2.5%',
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
  },
});

export const PreLoginLanding = ({navigation}) => {
  return (
    <SafeAreaView style={style.view}>
      <View style={style.view}>
        <ImageBackground
          style={style.image}
          source={require('../../assets/images/Gallery.png')}>
          <LinearGradient
            colors={['#00000000', '#FFFFFFFF']}
            style={{height: '80%', width: '100%'}}></LinearGradient>
        </ImageBackground>
        <View>
          <Text style={style.header}> Welcome to B2D</Text>
        </View>
        <View>
          <TouchableOpacity
            style={style.buttonLogin}
            onPress={() => {
              navigation.navigate('login');
            }}>
            <LinearGradient
              colors={['#2885E5', '#9968EE']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: 5,
                borderColor: 'transparent',
              }}>
              <Text style={{...style.loginButtonText, color: '#FFFFFF'}}>
                Log In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonSignUp}
            onPress={() => {
              navigation.navigate('signup');
            }}>
            <Text style={{...style.loginButtonText, color: '#475569'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
