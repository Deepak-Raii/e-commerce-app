import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import User_icon from '../images/user_icon.svg';
import Search_icon from '../images/search.svg';
import Bell_icon from '../images/bell.svg';
import CustomCard from './CustomCard';
import {Category} from '../Items';
import { colors } from '../../env';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.headerView}>
        <View style={Styles.left_header}>
          <User_icon height={26} width={26} stroke={'black'} />
        </View>

        <Text style={{color:colors.PRIMARY_COLOR, fontWeight:'800', fontSize:20}}>WEMIOO</Text>
        <View style={Styles.right_header}>
          <Search_icon height={26} width={26} stroke={colors.PRIMARY_COLOR} />
          <Bell_icon height={26} width={26} stroke={colors.PRIMARY_COLOR} />
        </View>
      </View>

      <Image
        source={require('../images/shopping1.jpg')}
        alt="img"
        style={{
          height: (height * 20) / 100,
          width: width - 20,
          objectFit: 'fill',
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 10,
        }}
      />
      <Text
        style={{
          margin: 10,
          width: '90%',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize:16,
          color:colors.PRIMARY_COLOR
        }}>
        Category
      </Text>
      <FlatList
        style={{width: '92%', maxHeight:height*10/100, alignSelf: 'center'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Category}
        renderItem={(item, index) => (
          <TouchableOpacity key={index} style={Styles.categoryView}>
            <Image
              source={item.item.image}
              style={{height: 50, width: 50, borderRadius: 50}}
            />
            <Text>{item.item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <CustomCard />
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
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
  categoryView:{
    display:'flex',
    justifyContent:'center', alignItems:'center',
    marginRight:10
  }
});
