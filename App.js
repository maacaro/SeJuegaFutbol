/**
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home/index';
import CreateMatch from './src/screens/CreateMatch/index';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Match: {screen: CreateMatch},
});

const App = createAppContainer(MainNavigator);

export default App;
