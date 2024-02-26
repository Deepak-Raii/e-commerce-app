import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {colors} from '../../env';
import Heart from '../images/heart1';
import {useDispatch} from 'react-redux';
import {
  addItem,
  increaseItemCount,
  removeItem,
  decreaseItemCount,
} from '../store/slices';
import {useNavigation} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Product_Info = ({route}) => {
  const {responseData} = route.params;
  const [details, setDetails] = useState([]);
  const [stars, setStar] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isfav, setIsFav] = useState(true);
  const [count, setCount] = useState(0);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    handleStar();
  }, []);

  useMemo(() => {
    return setDetails(responseData);
  }, [responseData]);

  const productColor = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'gray'},
    {color: 'pink'},
    {color: 'green'},
    {color: 'black'},
    {color: 'orange'},
  ];

  const sizes = [
    {size: 'S'},
    {size: 'M'},
    {size: 'L'},
    {size: 'XL'},
    {size: 'XXL'},
  ];

  const handleCart = details => {
    console.log('fav icon clicked...');
    setIsFav(!isfav);

    if (isfav === true) {
      console.log('status : ', isfav);
      dispatch(addItem(details));
    } else {
      console.log('staus in false ', isfav);
      dispatch(removeItem(details));
    }
  };

  const handleStar = async () => {
    const starLength = Math.round(details.rating);
    const starArr = [];
    for (var i = 0; i < starLength; i++) {
      starArr.push(i);
    }
    setStar(starArr);
  };

  const handleItem = title => {
    if (title === 'add') {
      dispatch(increaseItemCount(1));
      setCount(count >= 0 ? count + 1 : null);
    } else if (title === 'remove') {
      dispatch(decreaseItemCount(1));
      setCount(count > 0 ? count - 1 : null);
    }
  };

  const handlePurchase = () => {
    navigation.replace('Purchase', {responseData:details});
  };

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={Styles.card}>
          <TouchableOpacity
            onPress={() => handleCart(details)}
            activeOpacity={0.9}
            style={Styles.heartView}>
            <Heart
              height={22}
              width={22}
              stroke={!isfav ? '' : 'black'}
              fill={!isfav ? 'red' : null}
            />
          </TouchableOpacity>
          <FlatList
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            data={details.images}
            renderItem={({item, index}) => (
              <Image
                key={index}
                source={{uri: details ? item : ''}}
                style={Styles.image}
              />
            )}
          />

          <View style={Styles.titleView}>
            <Text style={Styles.title}>{details ? details.title : '--'}</Text>
          </View>

          <View style={Styles.ratingView}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {stars.length > 0 ? (
                stars.map((item, index) => <Text key={index}>⭐</Text>)
              ) : (
                <Text>--</Text>
              )}
              <Text>({details.rating})</Text>
              <Text> {details.stock} ratings</Text>
            </View>
            <View style={Styles.countView}>
              <TouchableOpacity
                onPress={() => handleItem('add')}
                style={Styles.addSub}>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>{count > 0 ? count : 0}</Text>
              <TouchableOpacity
                onPress={() => handleItem('remove')}
                style={Styles.addSub}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              textAlign: 'left',
              width: '100%',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'green',
            }}>
            ₹{details.price}
          </Text>

          <View
            style={{
              width: '100%',
              marginTop: 10,
              borderTopWidth: 0.2,
              borderTopColor: 'gray',
              paddingTop: 10,
            }}>
            <FlatList
              style={{display: 'flex', width: '100%'}}
              data={productColor}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => setSelectedColor(index)}
                  key={index}
                  style={[
                    Styles.colorView,
                    {
                      backgroundColor: item.color,
                      borderWidth: selectedColor === index ? 2 : 0,
                      borderColor: selectedColor === index ? 'purple' : '',
                    },
                  ]}></TouchableOpacity>
              )}
            />
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
              marginTop: 10,
            }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={sizes}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedSize(index)}
                  style={[
                    Styles.sizeView,
                    {
                      backgroundColor:
                        selectedSize === index
                          ? colors.PRIMARY_COLOR
                          : 'whitesmoke',
                    },
                  ]}>
                  <Text
                    style={{color: selectedSize === index ? 'white' : 'black'}}>
                    {item.size}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={Styles.descriptionView}>
            <Text style={{textAlign: 'left', fontWeight: 'bold'}}>
              Description
            </Text>
            <Text>{details.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={Styles.buttonView}>
        <TouchableOpacity
          style={[
            Styles.cartButton,
            {
              borderColor: !isfav ? 'gray' : colors.PRIMARY_COLOR,
              borderWidth: 1,
              backgroundColor: 'white',
            },
          ]}
          onPress={() => handleCart(details)}
          activeOpacity={0.9}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {!isfav ? 'Remove From Cart' : 'Add To Cart'}
          </Text>
        </TouchableOpacity>

        <TouchableHighlight
          onPress={handlePurchase}
          underlayColor="lightblue"
          style={[Styles.cartButton]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Buy now</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Product_Info;

const Styles = StyleSheet.create({
  card: {
    width: (width * 90) / 100,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    gap: 10,
    paddingBottom: 200,
  },
  image: {
    height: (height * 60) / 100,
    width: (width * 90) / 100,
    borderRadius: 15,
    objectFit: 'fill',
  },
  titleView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    width: '60%',
  },
  price: {
    color: colors.PRIMARY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    // gap: 10,
  },
  ratingText: {
    fontSize: 16,
  },
  countView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 20,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  colorView: {
    height: 25,
    width: 25,
    marginRight: 10,
    opacity: 0.7,
    borderRadius: 30,
  },
  addSub: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 20,
    width: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeView: {
    marginRight: 10,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  descriptionView: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  heartView: {
    height: 35,
    width: 35,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 5,
    backgroundColor: 'white',
    zIndex: 1000,
  },
  buttonView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cartButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: (Dimensions.get('window').height * 6) / 100,
    width: '50%',
    backgroundColor: colors.PRIMARY_COLOR,
  },
});
