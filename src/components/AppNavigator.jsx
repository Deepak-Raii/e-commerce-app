import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Product_Info from './Product_Info';
import App from '../../App';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductInfo"
          component={Product_Info}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
  );
};

export default AppNavigator;
