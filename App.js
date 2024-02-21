import 'react-native-gesture-handler';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from './env';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY_COLOR,
    position: 'absolute',
    width: width - 20,
    bottom: 5,
    alignSelf: 'center',
    borderRadius: 30,
    height:height*7/100
  },
  itemView: {
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 5,
    position:'relative',
  },
  title: {
    fontSize: 10,
    color: 'white'
  },
});
