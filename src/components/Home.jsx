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
import {colors} from '../../env';
import {category} from '../Items';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = () => {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    category().then(data => setCategory(data));
  }, []);

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
            Mee U
          </Text>
          <View style={Styles.right_header}>
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
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={Styles.categoryView}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <CustomCard header={'Mens'} />
        <CustomCard header={'Womens'} />
      </View>
    </ScrollView>
  );
};

export default Home;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    gap: 10,
    paddingBottom: 100,
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
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  textInput: {
    width: '90%',
    paddingVertical: 7,
    marginTop: 10,
    backgroundColor: 'whitesmoke',
    borderRadius: 50,
    alignSelf: 'center',
    paddingHorizontal: 20,
    // elevation: 2,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
  },
});
