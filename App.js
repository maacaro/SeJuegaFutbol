/**
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home/index';
import MatchScreen from './src/screens/MatchScreen';
import LocationScreen from './src/screens/LocationScreen';
import AvaiblePlayers from './src/screens/AvaiblePlayersScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Match: {screen: MatchScreen},
  Location: {screen: LocationScreen},
  AvaiblePlayers: {screen: AvaiblePlayers},
});

const App = createAppContainer(MainNavigator);

export default App;
