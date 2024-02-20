import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {New_Arrivals} from '../Items';
import { colors } from '../../env';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomCard = () => {
  return (
    <View>
      <Text style={Styles.header}>New Arrivals</Text>
      {
        <FlatList
          style={{width: '92%', alignSelf: 'center'}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={New_Arrivals}
          renderItem={(item, index) => (
            <TouchableOpacity key={index} style={Styles.card}>
              <Image
                source={item.item.image}
                style={{
                  height: (height * 15) / 100,
                  width: (width * 50) / 100,
                  borderRadius: 10,
                  objectFit: 'fill',
                }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 5,
                }}>
                {item.item.title}
              </Text>
              <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 5}}>
                ₹{item.item.price}
              </Text>
              <Text style={{color: 'gray', marginLeft: 5}}>
                ⭐ {item.item.rating}
              </Text>
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
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    color:colors.PRIMARY_COLOR
  },
});
