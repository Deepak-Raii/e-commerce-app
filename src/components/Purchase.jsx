import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../env';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Purchase = ({route}) => {
  const {responseData} = route.params;
  const [productDetails, setProductDetails] = useState([]);
  const [star, setStar] = useState([]);
  // console.log('item data : ', responseData);
  useEffect(() => {
    setProductDetails(responseData);
  }, []);

  useEffect(() => {
    const rate = Math.floor(productDetails.rating);
    console.log('star ::::: ', rate);
    setStar(rate);
  }, [productDetails]);
  const option = [
    {
      name: 'UPI',
    },
    {
      name: 'Net Banking',
    },
    {
      name: 'Cash on delivery',
    },
  ];
  return (
    <View style={Styles.mainView}>
      <View style={Styles.productView}>
        <View style={Styles.imageView}>
          <Image
            source={{uri: productDetails.thumbnail}}
            style={Styles.image}
          />
        </View>
        <View style={Styles.detailView}>
        <Text>{productDetails.title}</Text>
          <Text style={{fontWeight:'bold'}}>{productDetails.brand}</Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf:'flex-start'
            }}>
            {Array.from({length: star}, (_, index) => (
              <Text key={index}>⭐</Text>
            ))}
            <Text>({productDetails.stock})</Text>
          </View>
          <Text style={{color:'green', fontWeight:'bold'}}>₹{productDetails.price}</Text>
        </View>
      </View>

      <Text style={Styles.header}>Pay Now</Text>
      <FlatList
        data={option}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={index}
            style={Styles.optionView}>
            <Text style={{color: 'black'}}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Purchase;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    fontWeight: '700',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  productView: {
    backgroundColor: 'whitesmoke',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: (height * 20) / 100,
    width: width*95/100,
    alignSelf:'center',
    gap: 5,
    paddingVertical: 20,
    marginTop:10,
    borderRadius:20,
    elevation:2
  },
  imageView: {
    width: (width * 25) / 100,
    height: '90%',
    marginLeft:10,
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'fill',
    borderRadius: 15,
  },
  detailView: {
    width: (width * 63) / 100,
    height: (height * 11) / 100,
    marginLeft:10
  },
  optionView: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBlockColor: colors.PRIMARY_COLOR,
    borderRadius: 10,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCard: {
    width: '85%',
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 30,
  },
  addCardText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
  },
});
