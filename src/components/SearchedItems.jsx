import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SearchedItems = ({items}) => {
  const [allData, setData] = useState([]);
  useEffect(() => {
    setData(items);
  }, []);
  return (
    <View style={Styles.mainView}>
      {allData.map((item, index) => (
        <TouchableOpacity key={index} style={Styles.cardView}>
          <Image source={{uri: item.thumbnail}} style={Styles.image} />
          <Text>{item.brand}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SearchedItems;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardView: {
    height: (height * 25) / 100,
    width: (width * 40) / 100,
    backgroundColor: 'whitesmoke',
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  image: {
    height: (height * 15) / 100,
    width: (width * 35) / 100,
    borderRadius: 10,
  },
});
