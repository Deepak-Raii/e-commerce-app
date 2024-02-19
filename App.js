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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  const [selctedScreen, setSelectedScreen] = useState(0);

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
        <TouchableOpacity
          onPress={() => setSelectedScreen(0)}
          style={[Styles.itemView,]}>
          <View
            style={{
              backgroundColor: selctedScreen === 0 ? 'black' : null,
              borderRadius: 100,
              padding: 8,
              
            }}>
            <Home_Icon height={selctedScreen === 0 ? 35 : 22} width={ selctedScreen === 0 ? 32 : 22} stroke={'white'} />
          </View>
          <Text style={Styles.title}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedScreen(1)}
          style={[Styles.itemView]}>
          <View
            style={{
              backgroundColor: selctedScreen === 1 ? 'black' : null,
              borderRadius: 100,
              padding: 8,
            }}>
            <Cart_icon height={selctedScreen === 1 ? 35 : 22} width={ selctedScreen === 1 ? 32 : 22} stroke={'white'} />
          </View>

          <Text style={Styles.title}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedScreen(2)}
          style={[Styles.itemView]}>
          <View
            style={{
              backgroundColor: selctedScreen === 2 ? 'black' : null,
              borderRadius: 100,
              padding: 8,
            }}>
            <Heart_icon height={selctedScreen === 2 ? 35 : 22} width={ selctedScreen === 2 ? 32 : 22}  stroke={'white'} />
          </View>

          <Text style={Styles.title}>favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedScreen(3)}
          style={[Styles.itemView]}>
          <View
            style={{
              backgroundColor: selctedScreen === 3 ? 'black' : null,
              borderRadius: 100,
              padding: 8,
            }}>
            <User_icon height={selctedScreen === 3 ? 35 : 22} width={ selctedScreen === 3 ? 32 : 22} stroke={'white'}/>
          </View>

          <Text style={Styles.title}>Profile</Text>
        </TouchableOpacity>
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
    backgroundColor: '#f0cd4f',
    position: 'absolute',
    bottom: 5,
    width: width - 20,
    height: (height * 8) / 100,
    alignSelf: 'center',
    borderRadius: 30,
  },
  itemView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontSize: 10,
    color: 'white',
  },
});
