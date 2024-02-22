import 'react-native-gesture-handler';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
