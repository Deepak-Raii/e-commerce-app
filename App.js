import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import User_icon from './src/images/user_icon.svg';
import Home_Icon from './src/images/home.svg';
import Cart_icon from './src/images/cart.svg';
import Heart_icon from './src/images/heart.svg';
import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Favorite from './src/components/Favorite';
import Profile from './src/components/Profile';
import { colors } from './env';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  const [selctedScreen, setSelectedScreen] = useState(0);
  const bottomItem = [
    {
      icon: Home_Icon,
      title: 'Home',
    },
    {
      icon: Cart_icon,
      title: 'Cart',
    },
    {
      icon: Heart_icon,
      title: 'Favorite',
    },
    {
      icon: User_icon,
      title: 'Profile',
    },
  ];

  return (
    <View style={Styles.mainView}>
      {selctedScreen === 0 ? (
        <Home />
      ) : selctedScreen === 1 ? (
        <Cart />
      ) : selctedScreen === 2 ? (
        <Favorite />
      ) : (
        <Profile />
      )}
      <View style={Styles.bottomNav}>
        {bottomItem.map((item, index) => (
          <TouchableOpacity
            style={[Styles.itemView]}
            onPress={() => setSelectedScreen(index)}
            key={index}>
            <View
              style={{
                backgroundColor: selctedScreen === index ? 'white' : null,
                borderRadius: 30,
                padding: 15,
                position: selctedScreen === index ? 'absolute' : null,
                bottom: selctedScreen === index ? 10 : null,
              }}>
              <item.icon height={22} width={22} stroke={selctedScreen===index?'black':'white'} />
            </View>
            <Text style={[Styles.title, {top:selctedScreen===index?10:0}]}>{item.title}</Text>
          </TouchableOpacity>
          
        ))}
      </View>
    </View>
  );
};

export default App;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY_COLOR,
    position: 'absolute',
    width: width - 20,
    bottom: 5,
    alignSelf: 'center',
    borderRadius: 30,
    height:height*7/100
  },
  itemView: {
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 5,
    position:'relative',
  },
  title: {
    fontSize: 10,
    color: 'white'
  },
});
