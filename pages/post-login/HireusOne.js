import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View,Button,TouchableOpacity, TextInput} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';


const style = StyleSheet.create({
  view: {
    backgroundColor: '#0E172A',
    flex: 1,
    padding: '3%',
  },
  requestFormText:{
    color:'#ffffff',
    fontSize: scale(16),
  },
  pleaseText:{
    color:'#BABFC8',
    fontSize: scale(12),
  },
  whyYouText:{
    color:'#ffffff',
    fontSize: scale(16),
    fontStyle:'Poppins',
  },
  dropdownStyle:{
    marginTop: moderateScale(20)
  },
  inputStyle:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'#334155',
    padding:'2%'
  },
  placeholderStyle:{
    color: '#BABFC8',
  },
  loginButtonText:{
    padding:'3%',
    textAlign:'center',
  },
  mainNextstyle:{
    marginTop: moderateVerticalScale(410),
  },
  selectedTextStyle: {
    color: '#BABFC8',
  },
  inputSearchStyle:{
    backgroundColor: '#0E172A',
    color: '#BABFC8',
  }
  
});

export const HireusOne = ({navigation}) => {
  
  const data = [
    {label: 'School', value: '1'},
    {label: 'College', value: '2'},
    {label: 'Institute', value: '3'},
    {label: 'School', value: '1'},
    {label: 'College', value: '2'},
    {label: 'Institute', value: '3'},
  ];

  const [value, setValue] = useState(null);
  const [cities, setCities] = useState([]);

  const [teachers, setTeachers] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const getHireUsAPI = async () => {
    try {
      const resp = await getHireUs();
      setTeachers(resp.data);
    } catch (error) {}
  };

  useEffect(() => {
    getHireUsAPI();
  }, []);

  return (
    <View style={{flex:1, backgroundColor:'#E5E5E5'}}>
      {/* <View style={{ width:'20%', height:4,backgroundColor:'#956DFF'}}></View>÷ */}
    <ScrollView style={style.view}>     
      <View>
        <Text style={style.requestFormText}>Request Form</Text>
      </View>
      <View style={{marginTop:moderateScale(10)}}>
        <Text style={style.pleaseText}>Please answer the following question so the we can reach to you.</Text>
      </View>
      <View style={{marginTop:moderateScale(15)}}>
        <Text style={style.whyYouText}>What type of requirement you have?</Text>
      </View>
       
      <View style={style.dropdownStyle}>
        <Dropdown
          style={style.inputStyle}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          iconStyle={style.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Please select the type' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            navigation.navigate('classes-list', {city: item.value});
          }}
        />
      </View>

      <View style={{marginTop:moderateScale(15)}}>
        <Text style={style.whyYouText}>Where do you want to learn?</Text>
      </View>
       
      <View style={style.dropdownStyle}>
        <Dropdown
          style={style.inputStyle}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          iconStyle={style.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Please select the type' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            navigation.navigate('classes-list', {city: item.value});
          }}
        />
      </View>

      <View style={{marginTop:moderateScale(15)}}>
        <Text style={style.whyYouText}>Please enter your number?</Text>
      </View>
       
      <View style={style.dropdownStyle}>
        <TextInput placeholderTextColor="#BABFC8" style={{
        marginTop: moderateVerticalScale(1),
        backgroundColor: '#0E172A',
        borderWidth:1,
        borderColor:'#334155',
        borderRadius: 5,
        padding: '2%',
        paddingLeft:moderateScale(16),
        // margin: '2%',
        color: '#BABFC8',
        fontSize: scale(12),
        lineHeight: 14,
        width: '100%',
        // marginHorizontal:'2.5%',
        textTransform: 'capitalize',
        marginVertical: '5%',
        
      }} placeholder="Eg; 9747474747" />
      </View>

      <View style={{marginTop:moderateScale(2)}}>
        <Text style={style.whyYouText}>Please enter your email ID?</Text>
      </View>
       
      <View style={style.dropdownStyle}>
      <TextInput placeholderTextColor="#BABFC8" style={{
        backgroundColor: '#0E172A',
        marginTop: moderateVerticalScale(1),
        borderWidth:1,
        borderColor:'#334155',
        borderRadius: 5,
        padding: '2%',
        paddingLeft:moderateScale(16),
        // margin: '2%',
        color: '#BABFC8',
        fontSize: scale(12),
        lineHeight: 14,
        width: '100%',
        // marginHorizontal:'2.5%',
        textTransform: 'capitalize',
        marginVertical: '5%',
        
      }} placeholder="Eg; abcd@gmail.com" />
      </View>
      
      <View style={{ marginTop:moderateVerticalScale(-260) }}>
      <TouchableOpacity style={style.mainNextstyle} onPress={() => {
            navigation.navigate('request-us');
          }}>
          <LinearGradient
            colors={['#2885E5', '#9968EE']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={{borderWidth: 1, borderStyle: 'solid', borderRadius: 5}}>
            <Text style={{...style.loginButtonText, color: '#FFFFFF'}}>
              Submit
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      
    </ScrollView>
    </View>
  );
};