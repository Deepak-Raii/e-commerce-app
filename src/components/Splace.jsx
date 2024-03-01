import { View, Text, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Splace = () => {
  const navigation = useNavigation();
  useEffect(()=>{
setTimeout(()=>{
  navigation.replace("BottomNavigator")
},2000)
  },[])
  return (
    <View style={{flex:1}}>
      <StatusBar hidden/>
      <Image source={require("../images/girl-with-bag.jpg")} style={{height:'100%',width:'100%', objectFit:'fill'}}/>
      <LinearGradient style={{position:'absolute', height:'100%', width:'100%'}} colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}>
      <View style={{position:'absolute', height:'40%', width:'100%', bottom:10, marginLeft:20, display:'flex', justifyContent:'flex-end'}}>
        <Text style={{fontSize:30, fontFamily:'sans-serif', color:'orange', fontWeight:'800', lineHeight:40}}>Let's Start</Text>
        <Text style={{fontSize:50, fontFamily:'sans-serif', color:'yellow', fontWeight:'800',lineHeight:50}}>Shopping...</Text>
      </View>
      </LinearGradient>
    </View>
  )
}

export default Splace