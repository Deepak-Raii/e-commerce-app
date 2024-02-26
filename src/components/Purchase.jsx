import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {colors} from '../../env';

const Purchase = ({route}) => {
    const responseData = route.params;
    console.log("item data : ", responseData);
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
        
      </View>
      <Text style={Styles.header}>OR</Text>
      <FlatList
        data={option}
        renderItem={({item, index}) => (
          <TouchableOpacity activeOpacity={0.6} key={index} style={Styles.optionView}>
            <Text style={{color: 'black'}}>{item.name}</Text>
            {/* <Text
              style={{
                color: 'black',
                fontWeight: '400',
                fontSize: 22,
              }}>{`>`}</Text> */}
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
  },
  header: {
    fontWeight: '400',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  productView: {
    backgroundColor: colors.PRIMARY_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'auto',
    paddingVertical:40
  },
  optionView: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth:1,
    borderBlockColor:colors.PRIMARY_COLOR,
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
    paddingVertical:30
  },
  addCardText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
  },
});
