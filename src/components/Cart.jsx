import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Cart = () => {
  const data = useSelector(state => state.cart.value);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(data);
    console.log('data : ', data);
  }, []);
  return (
    <View style={Styles.mainView}>
      <Text>{cart}</Text>
    </View>
  );
};

export default Cart;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
