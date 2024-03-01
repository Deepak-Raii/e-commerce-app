import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product_Info from './Product_Info';
import BottomNavigation from './BottomNavigation';
import Purchase from './Purchase';
import { colors } from '../../env';
import Splace from './Splace';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splace"
          component={Splace}
          options={{
            headerShown: false,
          }}
        />
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
            headerTitle:'',
            // headerStyle:{
            //   backgroundColor:colors.PRIMARY_COLOR,
            // },
            headerLeftContainerStyle:{
              backgroundColor:'lightgray',
              borderRadius:50,
              height:35,
              width:35,
              display:'flex',
              justifyContent:'center', alignItems:'center',
              marginTop:10,
              marginLeft:10
            }
          }}
        />
      </Stack.Navigator>
  );
};

export default AppNavigator;
