import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/screens/SignUp/SignUp';
import Login from './src/screens/Login/Login';
import Home from './src/screens/Home/index';
import CreateMatch from './src/screens/CreateMatch/index';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={'SignUp'}
        options={{
          headerShown: false,
        }}>
        {props => <SignUp {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name={'Login'}
        options={{
          headerShown: false,
        }}>
        {props => <Login {...props} />}
      </Stack.Screen>
      <Stack.Screen name={'Home'}>{props => <Home {...props} />}</Stack.Screen>
      <Stack.Screen name={'Create Match'}>
        {props => <CreateMatch {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
