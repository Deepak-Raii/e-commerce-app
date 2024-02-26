import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product_Info from './Product_Info';
import BottomNavigation from './BottomNavigation';
import Purchase from './Purchase';
import { colors } from '../../env';

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
          name="Product Info"
          component={Product_Info}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Purchase"
          component={Purchase}
          options={{
            headerShown: true,
            headerStyle:{
              backgroundColor:colors.PRIMARY_COLOR
            }
          }}
        />
      </Stack.Navigator>
  );
};

export default AppNavigator;
