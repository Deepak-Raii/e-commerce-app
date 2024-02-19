import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react';
import User_icon from "../images/user_icon.svg";
import Search_icon from "../images/search.svg";
import Bell_icon from "../images/bell.svg";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Home = () => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.headerView}>
        <View style={Styles.left_header}>
          <User_icon height={26} width={26} stroke={"black"}/>
        </View>
        <View style={Styles.right_header}>
          <Search_icon height={26} width={26} stroke={"black"}/>
          <Bell_icon height={26} width={26} stroke={"black"}/>
        </View>
      </View>
    </View>
  )
}

export default Home;


const Styles = StyleSheet.create({
  mainView:{
    flex:1,
  },
  headerView:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    width:(width*90)/100,
    alignSelf:'center',
    marginTop:10

  },
  left_header:{
    padding:10,
    borderRadius:50,
    backgroundColor:'lightgray'
  },
  right_header:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    flexDirection:'row',
  }
})