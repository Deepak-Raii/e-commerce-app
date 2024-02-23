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
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {colors} from '../../env';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Cart = () => {
  console.log('in cart');
  const data = useSelector(state => state.cart.value);
  const [cart, setCart] = useState([]);
  // const [stars, setStar] = useState([]);
  useEffect(() => {
    setCart(data);
    // console.log('data in cart : ', data);
  }, [data]);

  // useEffect(() => {
  //   handleStar();
  // },[]);

  // handleStar = () => {
  //   for (var i = 0; i < data.length; i++) {
  //     console.log("star1::",stars);
  //     stars.push([]);
  //     const rateLength = Math.round(data[i].rating.rate);
  //     for (var j = 0; j < rateLength; j++) {
  //       stars[i].push(j)
  //     }
  //   }
  //   console.log('stars :: ', stars);
  // };
  return (
    <View style={Styles.mainView}>
      <FlatList
        data={cart}
        renderItem={({item, index}) => (
          <TouchableOpacity style={Styles.card} key={index}>
            <View style={{width: '25%'}}>
              <Image source={{uri: item.image}} style={Styles.image} />
              <Text>{`⭐${item.rating.rate} (${item.rating.count})`}</Text>
            </View>

            <View style={{width: '50%'}}>
              <Text style={{textAlign: 'left'}}>{item.title}</Text>
            </View>

            <View
              style={{
                width: '25%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap:10
              }}>
              <View style={Styles.countView}>
                <TouchableOpacity style={Styles.addSubBtn}>
                  <Text style={[Styles.text, {color: 'black'}]}>+</Text>
                </TouchableOpacity>
                <Text style={[Styles.text, {color: 'black'}]}>0</Text>
                <TouchableOpacity style={Styles.addSubBtn}>
                  <Text style={[Styles.text, {color: 'black'}]}>-</Text>
                </TouchableOpacity>
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
    </View>
  );
};

export default Cart;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    height: 60,
    width: 60,
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