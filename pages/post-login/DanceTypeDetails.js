import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from 'react-native-3d-swiper/styles';
import LinearGradient from 'react-native-linear-gradient';
import { scale, moderateVerticalScale } from 'react-native-size-matters';
import YoutubePlayer from "react-native-youtube-iframe";


export const DanceTypeDetails = ({navigation, route}) => {
  const { id, item, workshop } = route.params;
  const [VideoId,setVideoId] = useState(null)
  const [YouTubeList,setYouTubeList] = useState([
    {
      id:1,
      name:'Video Title',
      author: 'Video author name',
      videoLink:'https://www.youtube.com/watch?v=Rv2YocsWodE'
    },
    {
      id:2,
      name:'Video Title',
      author: 'Video author name',
      videoLink:'https://www.youtube.com/watch?v=5Eqb_-j3FDA'
    },
    {
      id:2,
      name:'Video Title',
      author: 'Video author name',
      videoLink:'https://www.youtube.com/watch?v=lQKNOtjYWwU'
    }
  ])

  const DownloadBtn = () => {
    ToastAndroid.showWithGravity(
      "Comming soon",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    )
  }

  const PlayVideoId = (videoId) => {
    setVideoId(videoId)
  }

  return (
    <>
    <ScrollView
      style={style.view}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
    }}>
      {item?.videoUrl ? (
            <YoutubePlayer
              height={220}
              videoId={VideoId == null ? item.videoUrl.split("v=")[1].substring(0, 11) : VideoId.split("v=")[1].substring(0, 11) }
              play={true}
            />
      ) : null}

      <View style={style.mainDanceDetails}>
        <View style={style.daneTeacherDetails}>
          <View>
              <Image
                style={style.dancerImage}
                      source={{uri: item?.titleImage}}
                    />
                    
          </View>
          <View style={style.mainDancerView}>
            <Text style={style.dacerText}>{ item?.title }</Text>
            <Text style={style.dancerName}>{ item?.titleName }</Text>
          </View>
        </View>
        {workshop ? (
        <View>
        <TouchableOpacity onPress={DownloadBtn}>
        <Image
                style={style.downloadImage}
                      source={require('../../assets/images/download.png')}
                    />
          </TouchableOpacity>
        </View>
        ) : null}
      </View>

      <View style={style.line}>
        <View style={style.lineHR} />
      </View>
      
      <View style={style.maintextRow}>
        <View>
          <Text style={style.danceDuration}>Level</Text>
          <Text style={style.danceType}>Intermediate</Text>
        </View>
        <View>
          <Text style={style.danceDuration}>Style</Text>
          <Text style={style.danceType}>{item?.categoryName}</Text>
        </View>
        <View>
          <Text style={style.danceDuration}>Time</Text>
          <Text style={style.danceType}>{item?.timeDate}</Text>
        </View>
      </View>
      
      <View style={style.line}>
        <View style={style.lineHR} />
      </View>

      <View style={style.aboutSection}>
        <Text style={style.aboutHeader}>About Instructor</Text>
        <Text style={style.aboutText}>{item?.about}</Text>
      </View>
     {workshop ? (
              YouTubeList.map((item, index) => 
              <TouchableOpacity onPress={() => PlayVideoId(item?.videoLink)}>
              <View style={style.mainLearnVideo } key={index}>  
                <View style={style.videoText}>
                <Image
                        style={style.dancerImage}
                              source={require('../../assets/images/introVideo.png')}
                            />
                  <View>
                  <Text style={style.videoText2}>{item?.name}</Text>
                  <Text style={{paddingLeft: scale(10)}}>{item?.author}</Text>
                  </View>
                </View>
                <View>
                  <Text style={style.videoQuantty}>1 video</Text>
                </View>
              </View>
              </TouchableOpacity>
              )
      ) : (
        YouTubeList.map((item, index) => 
      <TouchableOpacity onPress={() => PlayVideoId(item?.videoLink)}>
      <View style={style.mainLearnVideo } key={index}>  
        <View style={style.videoText}>
        <Image
                style={style.dancerImage}
                      source={require('../../assets/images/introVideo.png')}
                    />
          <View>
          <Text style={style.videoText2}>{item?.name}</Text>
          <Text style={{paddingLeft: scale(10)}}>{item?.author}</Text>
          </View>
        </View>
        <View>
          <Text style={style.videoQuantty}>1 video</Text>
        </View>
      </View>
      </TouchableOpacity>
      )
      )}

    </ScrollView>
    {workshop ? (
    <View style={style.takeClassesContainer}>
        <TouchableOpacity 
        style={style.buttonTakeClasses}
        onPress={() => {
          navigation.navigate('premium-screen', {
            item:item
          });
        }}
        >
          <LinearGradient
            style={style.takeClassesGradient}
            colors={['#2885E5', '#844AE9']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Image
              style={style.takeClassesIcon}
              source={require('../../assets/images/lock.png')}
            />
            <Text style={{...style.takeClassesButtonText, color: '#FFFFFF'}}>
              Take Classes
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      ) : null}
    </>
    
  );
};

const style = StyleSheet.create({
  view: {
    padding: '3%',
    backgroundColor: '#0E172A',
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: '3%',
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
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  headerDescription: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF',
  },
  line: {flexDirection: 'row'},
  lineHR: {
    backgroundColor: '#334155',
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },
  aboutSection: {
    flex: 1,
    paddingTop: scale(15),
    paddingBottom: scale(20),
  },
  aboutHeader: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  videoListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  mainDanceDetails:{
    displayName: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  daneTeacherDetails:{
    displayName: 'flex',
    flexDirection: 'row',
    paddingTop: scale(10),
    paddingBottom: scale(10),
  },
  dancerImage:{
    width: scale(50),
    height: scale(50),
  },
  mainDancerView:{
    paddingLeft: scale(10)
  },
  dacerText:{
    color:'#FFFFFF',
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeights:'600',
    fontStyle: 'normal',
    fontFamily: 'Raleway',
    width: scale(180)
  },
  dancerName:{
    color: '#FFFFFF',
    fontSize: scale(10),
    marginTop: scale(5)
  },
  downloadImage:{
    width: scale(30),
    height: scale(30),
    marginTop: scale(12),
  },
  maintextRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scale(12),
    paddingBottom: scale(12),
  },
  danceDuration:{
    color:'#BABFC8',
    fontSize: scale(10),
    fontWeight: '400',
    lineHeight: scale(12),
    fontStyle: 'normal',
    fontFamily: 'Inter',
    textTransform: 'uppercase'
  },
  danceType:{
    color:'#FFFFFF',
    fontSize: scale(10),
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Inter',
    textTransform: 'capitalize',
    lineHeight: scale(12),
    paddingTop: scale(5),  
  },
  aboutText:{
    color:'#BABFC8',
    fontSize: scale(14),
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Raleway',
    lineHeight: scale(18),
  },
  mainLearnVideo:{
    backgroundColor: '#1E293B',
    width: '100%',
    padding: scale(8),
    borderRadius: scale(5),
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: scale(10)
  },
  videoText:{
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  videoText2:{
    color: '#FFFFFF',
    paddingLeft: scale(10),
    fontSize: scale(14),
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Raleway',
    lineHeight: scale(16),
    marginTop: scale(12),
  },
  videoQuantty:{
    color: '#FFFFFF',
    fontSize: scale(10),
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Raleway',
    lineHeight: scale(12),
    marginTop: scale(17),
  }

});
