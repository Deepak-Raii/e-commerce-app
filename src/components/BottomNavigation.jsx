import {View, Dimensions, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './Cart';
import Favorite from './Favorite';
import Profile from './Profile';
import Home_icon from '../images/home.svg';
import Cart_icon from '../images/cart1.svg';
import Heart1_icon from '../images/heart1.svg';
import User_icon from '../images/user1.svg';
import {colors} from '../../env';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const data = useSelector(state => state.cart.value);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.PRIMARY_COLOR,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 30,
          position: 'absolute',
          bottom: 3,
          height: (Dimensions.get('window').height * 7.5) / 100,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: {marginBottom: 10, marginTop: -5},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : '',
                borderRadius: 30,
                padding: 10,
                position: focused ? 'absolute' : null,
                bottom: focused ? 10 : 0,
              }}>
              <Home_icon
                height={focused ? 27 : 22}
                width={focused ? 27 : 22}
                stroke={focused ? 'black' : 'white'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : '',
                borderRadius: 30,
                padding: 10,
                position: focused ? 'absolute' : null,
                bottom: focused ? 10 : 0,
              }}>
              {
                data.length>0?(<View
                  style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    height: 15,
                    width: 15,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    zIndex: 10,
                    right: 3,
                    top: 4,
                  }}>
                  <Text style={{color: 'white', fontSize: 10}}>{data.length}</Text>
                </View>):(null)
              }
              <Cart_icon
                height={focused ? 27 : 22}
                width={focused ? 27 : 22}
                stroke={focused ? 'black' : 'white'}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : '',
                borderRadius: 30,
                padding: 10,
                position: focused ? 'absolute' : null,
                bottom: focused ? 10 : 0,
              }}>
              <Heart1_icon
                height={focused ? 27 : 22}
                width={focused ? 27 : 22}
                stroke={focused ? 'black' : 'white'}
                stroke-width="3"
              />
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'white' : '',
                borderRadius: 30,
                padding: 10,
                position: focused ? 'absolute' : null,
                bottom: focused ? 10 : 0,
              }}>
              <User_icon
                height={focused ? 27 : 22}
                width={focused ? 27 : 22}
                stroke={focused ? 'black' : 'white'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
