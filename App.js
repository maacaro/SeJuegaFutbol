import * as React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
//import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/screens/SignUp/SignUp';
import Login from './src/screens/Login/Login';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import Home from './src/screens/Home/index';
import CreateMatch from './src/screens/CreateMatch/index';
//import {authReducer} from './src/library/reducers';
import user from './src/reducers/user.reducers';

const store = createStore(combineReducers({user}));

export default App;

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <Router isSingIn={true} />
    </Provider>
  );
}

const Router = ({isSingIn}) => (
  <NavigationContainer>
    <Stack.Navigator>
      {isSingIn === false && (
        <>
          <Stack.Screen
            name={'Login'}
            options={{
              headerShown: false,
            }}>
            {props => <Login {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name={'SignUp'}
            options={{
              headerShown: false,
            }}>
            {props => <SignUp {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name={'ForgotPassword'}
            options={{
              headerShown: false,
            }}>
            {props => <ForgotPassword {...props} />}
          </Stack.Screen>
        </>
      )}
      <Stack.Screen name={'Home'} options={{headerShown: false}}>
        {props => <Home {...props} />}
      </Stack.Screen>
      <Stack.Screen name={'Create Match'}>
        {props => <CreateMatch {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
