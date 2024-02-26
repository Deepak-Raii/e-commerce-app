import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {colors} from '../../env';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Cart = () => {
  const navigation = useNavigation();
  console.log('in cart');
  const data = useSelector(state => state.cart.value);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(data);
  }, [data]);

  const handleItems = (item) => {
    navigation.navigate("Product Info", {responseData:item})
    
  }

  return (
    <View style={Styles.mainView}>
      {cart.length>0 ? (
        <FlatList
        style={{paddingBottom:100,}}
        data={cart}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={()=>handleItems(item)} activeOpacity={0.7} style={Styles.card} key={index}>
            <View style={{width: '25%',flexWrap:'wrap'}}>
              <Image source={{uri: item.thumbnail}} style={Styles.image} />
              
            </View>

            <View style={{width: '50%', alignSelf:'flex-start',paddingLeft:6}}>
              <Text style={{textAlign: 'left', fontWeight:'bold'}}>{item.brand}</Text>
              <Text style={{textAlign: 'left'}}>{item.title}</Text>
              <Text>{`⭐${item.rating} ( ${item.stock} )`}</Text>
            </View>

            <View
              style={{
                width: '25%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap:10
              }}>

              <View>
                <Text style={{color:'green', fontWeight:'bold'}}>₹{item.price}</Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.PRIMARY_COLOR,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 30,
                }}>
                <Text style={Styles.text}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      ) : (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>No item in cart...</Text>
        </View>
      )
      }
    </View>
  );
};

export default Cart;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    height: 80,
    width: 80,
    objectFit: 'fill',
    marginBottom:5
  },
  card: {
    backgroundColor: 'white',
    width: '95%',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex:1000
  },
  leftCardInner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    overflow: 'hidden',
    height: 'auto',
  },
  countView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 30,
    padding: 5,
  },
  addSubBtn: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});