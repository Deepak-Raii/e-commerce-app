import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import User_icon from '../images/user_icon.svg';
import Bell_icon from '../images/bell.svg';
import CustomCard from './CustomCard';
import {Category} from '../Items';
import {colors} from '../../env';
import {New_Arrivals} from '../Items';
import {getProducts} from '../Items';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = () => {
  const [product, setProduct] = useState([]);
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
// navigation.navigate("ProductInfo")
    },3000)

  },[])
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.mainView}>
        <View style={Styles.headerView}>
          <View style={Styles.left_header}>
            <User_icon height={26} width={26} stroke={'black'} />
          </View>

          <Text
            style={{
              color: colors.PRIMARY_COLOR,
              fontWeight: '800',
              fontSize: 20,
            }}>
            WE U
          </Text>
          <View style={Styles.right_header}>
            {/* <Search_icon height={26} width={26} stroke={colors.PRIMARY_COLOR} /> */}
            <Bell_icon height={26} width={26} stroke={colors.PRIMARY_COLOR} />
          </View>
        </View>

        <TextInput placeholder="search" style={Styles.textInput} />

        <Image
          source={require('../images/shopping1.jpg')}
          alt="img"
          style={{
            height: (height * 20) / 100,
            width: width - 30,
            objectFit: 'fill',
            borderRadius: 20,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            width: '90%',
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            color: colors.PRIMARY_COLOR,
          }}>
          Category
        </Text>
        <FlatList
          style={{
            width: '92%',
            maxHeight: (height * 10) / 100,
            alignSelf: 'center',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Category}
          renderItem={(item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={Styles.categoryView}>
              <Image
                source={item.item.image}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  shadowColor: 'black',
                  shadowOffset: {height: 10, width: 10},
                  shadowOpacity: 1,
                  shadowRadius: 3,
                }}
              />
              <Text>{item.item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <CustomCard header={'New Arrivals'} />
        <CustomCard header={'Jewelery'} />
      </View>
    </ScrollView>
  );
};

export default Home;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    gap: 10,
    paddingBottom:100
  },
  headerView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: (width * 90) / 100,
    alignSelf: 'center',
    marginTop: 10,
  },
  left_header: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.PRIMARY_COLOR,
  },
  right_header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  categoryView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textInput: {
    width: '90%',
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
  },
});
