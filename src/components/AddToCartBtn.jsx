import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../env';
import { useSelector } from 'react-redux';

const AddToCartBtn = (props) => {
    const title = props.title;
    const data = useSelector((state)=>state.cart.value);
    const handleCart = () => {
      console.log('ye rha srtore ka data : ',data);

    }
  return (
    <TouchableOpacity onPress={handleCart} activeOpacity={0.8} style={Styles.mainView}>
      <Text style={{color:'white', fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AddToCartBtn;

const Styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.PRIMARY_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: (Dimensions.get('window').height * 7) / 100,
    borderRadius:30,
    elevation:2
  },
});
