/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Login} from './pre-login/Login';
import {PreLoginLanding} from './pre-login/Landing';
import {SignUp} from './pre-login/SignUp';
import {VerifyOTP} from './pre-login/VerifyOTP';
import {ForgotPassword} from './pre-login/ForgotPassword';
import {PostLoginLanding} from './post-login/Landing';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LearnToDance} from './post-login/LearnToDance';
import {DanceTypeDetails} from './post-login/DanceTypeDetails';
import {HireUs} from './post-login/HireUs';
import {HireusOne} from './post-login/HireusOne';
import {InstructorDetails} from './post-login/InstructorDetails';
import {RequestUs} from './post-login/RequestUs';
import {updateUserData} from '../redux/actions/dataActions';
import {NearByClasses} from './post-login/NearByClasses';
import {ClassesList} from './post-login/ClassesList';
import {ClasseDetails} from './post-login/ClassDetails';
import {PremiumDetails} from './post-login/PremiumDetails';
import { HireusTwo } from './post-login/HireusTwo';
import { HireusThree } from './post-login/HireusThree';
import { HireusFour } from './post-login/HireusFour';
import { HireusFive } from './post-login/HireusFive';
import { Profile } from './post-login/Profile';
import { ContactUs } from './post-login/ContactUs';
import { Feedback } from './post-login/Feedback';
import { Refer } from './post-login/Refer';
import { moderateScale } from 'react-native-size-matters';
import { ProfileTwo } from './post-login/ProfileTwo';
import { DownloadVideo } from './post-login/DownloadVideo';
import { Wallet } from './post-login/Wallet';
import { ClassList2 } from './post-login/ClassList2';
import { PremiumScreen } from './post-login/PremiumScreen';
import { TryPremium } from './post-login/TryPremium';
import { PlayerVideo } from './post-login/PlayerVideo';
import { PasswordReset } from './pre-login/PasswordReset';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const HireUsStack = createNativeStackNavigator();
const NearByClassesStack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();

export default Routes = () => {

  const token = useSelector(state => state.appData.token);
  const loader = useSelector(state => state.appData.loader);

  const preLoginPageHeaderOptions = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: '#1E293B',
    },
    headerTitleStyle: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
    },
    headerTintColor: '#fff',
  };

  const LogoTitle = ({navigation}) => {
    return (
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={{width: 30,height:30}}/>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('profile');
          }}>
          <Image source={require('../assets/images/user.png')} style={{width: 30,height:30,marginRight:moderateScale(6)}}/>
        </TouchableOpacity>
      </View>
    );
  };

  const NearByClassesScreen = () => {
    return (
      <NearByClassesStack.Navigator>
        <NearByClassesStack.Screen
          name="nearby-classes"
          component={NearByClasses}
          options={{
            title: 'Nearby Classes',
            ...preLoginPageHeaderOptions,
            headerTitleAlign:'center'
          }}
          
        />
        <NearByClassesStack.Screen
          name="classes-list"
          component={ClassesList}
          options={{
            title: 'Nearby Classes',
            ...preLoginPageHeaderOptions,
            headerTitleAlign:'center'
          }}
        />
        <NearByClassesStack.Screen
          name="class-details"
          component={ClasseDetails}
          options={{
            title: 'Nearby Classes',
            ...preLoginPageHeaderOptions,
          }}
        />
        <NearByClassesStack.Screen
          name="premium-details"
          component={PremiumDetails}
          options={{
            headerShown: false,
          }}
        />
      </NearByClassesStack.Navigator>
    );
  };

  const HireUsScreen = () => {
    return (
      <HireUsStack.Navigator>
        <HireUsStack.Screen
          name="hire-us"
          component={HireUs}
          options={{
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
            headerTitleAlign:'center'
          }}
          // options={{
            
          //   headerTitle: props => <LogoTitle {...props} />,
          //   headerStyle: {
          //     backgroundColor: '#1E293B',
          //   },
          //   headerBackVisible: false,
          // }}
        />
        <HireUsStack.Screen
          name="instructor-details"
          component={InstructorDetails}
          options={{
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HireUsStack.Screen
          name="hireus-one"
          component={HireusOne}
          options={{
            headerTitleAlign:'center',
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HireUsStack.Screen
          name="hireus-two"
          component={HireusTwo}
          options={{
            headerTitleAlign:'center',
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HireUsStack.Screen
          name="hireus-three"
          component={HireusThree}
          options={{
            headerTitleAlign:'center',
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HireUsStack.Screen
          name="hireus-four"
          component={HireusFour}
          options={{
            headerTitleAlign:'center',
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HireUsStack.Screen
          name="hireus-five"
          component={HireusFive}
          options={{
            headerTitleAlign:'center',
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HireUsStack.Screen
          name="request-us"
          component={RequestUs}
          options={{
            headerTitleAlign:'center',
            title: 'Hire Us',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HireUsStack.Screen
          name="class-list2"
          component={ClassList2}
          options={{
            headerTitleAlign:'center',
            title: 'Class List',
            ...preLoginPageHeaderOptions,
          }}
        />

      </HireUsStack.Navigator>
    );
  };

  const HomeStackScreen = ({navigation}) => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="home"
          component={PostLoginLanding}
          options={{
            headerTitle: props => <LogoTitle {...props} navigation={navigation}/>,
            headerStyle: {
              backgroundColor: '#1E293B',
            },
          }}
        />
        <HomeStack.Screen
          name="learn-to-dance"
          component={LearnToDance}
          options={{
            headerTitleAlign:'center',
            title: 'Learn to Dance',
            ...preLoginPageHeaderOptions,
          }}
        />
        <HomeStack.Screen
          name="dance-type-details"
          component={DanceTypeDetails}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="try-premium"
          component={TryPremium}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="premium-screen"
          component={PremiumScreen}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="player-video"
          component={PlayerVideo}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
           <HomeStack.Screen 
           name="contact"
           component={ContactUs}
           options={{
            headerShown: false,              
          }}
         />
         <HomeStack.Screen 
           name="feedback"
           component={Feedback}
           options={{
            headerShown: false,              
          }}
         />
         <HomeStack.Screen 
           name="refer"
           component={Refer}
           options={{
            headerShown: false,              
          }}
         />
          <HomeStack.Screen
          name="profileTwo"
          component={ProfileTwo}
          options={{
            title: 'Edit Profile',
            headerTitleAlign:'center',
            ...preLoginPageHeaderOptions
          }}
        />
        <HomeStack.Screen
          name="download"
          component={DownloadVideo}
          options={{
            title: 'Downloads',
            headerTitleAlign:'center',
            ...preLoginPageHeaderOptions
          }}
        />
      </HomeStack.Navigator>
    );
  };

  const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#0F172A',
            paddingBottom: 6,
            paddingTop:6
          },
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Nearby Classes') {
              iconName = 'compass';
            } else if (route.name === 'Hire Us') {
              iconName = 'search';
            } else if (route.name === 'Wallet') {
              iconName = 'wallet';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#926AEE',
          tabBarInactiveTintColor: '#9A9DA6',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Nearby Classes"
          component={NearByClassesScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Hire Us"
          component={HireUsScreen}
          options={{headerShown: false,}}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            title: 'Wallet',
            // headerTitle: () => (
            //   <View style={styles.header}>
            //     <TouchableOpacity>
            //       <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>back</Text>
            //     </TouchableOpacity>
            //     <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Wallet</Text>
            //   </View>
            // ),
            ...preLoginPageHeaderOptions,
            headerTitleAlign:'center',
            backgroundColor: 'red',
            headerStyle: {
              backgroundColor: '#3882E7',
              shadowOpacity: 0,
              elevation: 0,
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          {!token && (
            <>
              <Stack.Screen
                name="landing"
                component={PreLoginLanding}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="login"
                component={Login}
                options={{
                  title: 'Login',
                  ...preLoginPageHeaderOptions,
                  headerTitleAlign:'center',
                }}
              />
              <Stack.Screen
                name="signup"
                component={SignUp}
                options={{
                  title: 'Sign Up',
                  ...preLoginPageHeaderOptions,
                  headerTitleAlign:'center',
                }}
              />
              <Stack.Screen
                name="verify-otp"
                component={VerifyOTP}
                options={{
                  title: 'Verify',
                  ...preLoginPageHeaderOptions,
                  headerTitleAlign:'center',
                }}
              />
              <Stack.Screen
                name="reset-password"
                component={PasswordReset}
                options={{
                  title: 'Reset Password',
                  ...preLoginPageHeaderOptions,
                  headerTitleAlign:'center',
                }}
              />
              <Stack.Screen
                name="forgot-password"
                component={ForgotPassword}
                options={{
                  title: 'Forgot Password',
                  ...preLoginPageHeaderOptions,
                  headerTitleAlign:'center',
                }}
              />
            </>
          )}
          {token && (
            <Stack.Screen
              name="post-login"
              component={MyTabs}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
        {loader && (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#956DFF" />
          </View>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#0E172A',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  header: {
    margin: '0%',
    paddingRight: '5%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});