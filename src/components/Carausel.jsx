import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
const shoes = require('../images/shoes1.jpg');
const menSuit = require('../images/men-suit1.jpg');
const shopping1 = require('../images/shopping1.jpg');

const width = Dimensions.get('window').width;
function Carausel() {
  const data = [shoes, menSuit, shopping1];

  return (
    <View style={Styles.mainView}>
      <Carousel
      pagingEnabled
        loop
        width={(width * 95) / 100}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={3000}
        renderItem={({item, index}) => (
          <Image key={index} source={item} style={Styles.image} />
        )}
      />
    </View>
  );
}

export default Carausel;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: width / 2,
    marginHorizontal: 10,
    width: '95%',
    objectFit: 'fill',
    borderRadius: 20,
  },
});
