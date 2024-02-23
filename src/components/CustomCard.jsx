import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../env';
import {getItems, getProducts} from '../Items';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomCard = props => {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    products();
  }, []);

  const products = () => {
    console.log('function called');
    if (props.header === 'Mens') {
      setHeader(props.header);
      getItems('mens-shirts').then(datas => setData(datas.products));
    } 
    else if (props.header === 'Womens') {
      setHeader(props.header);
      getItems("womens-dresses").then(datas => setData(datas.products));
    }
  };

  const handleProduct =(data)=>{
    navigation.navigate("Product Info",{responseData:data})
  }
  return (
    <View>
      <Text style={Styles.header}>{header}</Text>
      {
        <FlatList
          style={{width: '92%', alignSelf: 'center'}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={(item, index) => (
            <TouchableOpacity
              onPress={()=>handleProduct(item.item)}
              activeOpacity={0.8}
              key={index}
              style={Styles.card}>
              <Image source={{uri: item.item.thumbnail}} style={Styles.cardImage} />
              <Text style={Styles.title}>
                {item.item.title.length > 20
                  ? `${item.item.title.slice(0, 20)} ...`
                  : item.item.title}
              </Text>
              <Text style={{fontWeight: 'bold', color: 'gray', marginLeft: 5}}>
                ₹{item.item.price}
              </Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'gray', marginLeft: 5}}>
                  ⭐ {item.item.rating}
                </Text>
                <Text style={{color: 'gray', marginRight: 5}}>
                  ({item.item.stock})
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  );
};

export default CustomCard;

const Styles = StyleSheet.create({
  card: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: 'whitesmoke',
    margin: 5,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: 'gray',
    elevation: 3,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
    color: colors.PRIMARY_COLOR,
  },
  cardImage: {
    height: (height * 15) / 100,
    width: (width * 40) / 100,
    borderRadius: 10,
    objectFit: 'fill',
  },
  title: {
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
    marginLeft: 5,
  },
});
