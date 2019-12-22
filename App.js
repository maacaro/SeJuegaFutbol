/**
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MatchScreen from './src/screens/MatchScreen';
import LocationScreen from './src/screens/LocationScreen';
import AvaiblePlayers from './src/screens/AvaiblePlayersScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Match: {screen: MatchScreen},
  Location: {screen: LocationScreen},
  AvaiblePalyers: {screen: AvaiblePlayers},
});

const App = createAppContainer(MainNavigator);

export default App;
