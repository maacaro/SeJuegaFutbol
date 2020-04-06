import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/SignUp/SignUp';
import SingIn from '../screens/SingIn';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Home from '../screens/Home/index';
import CreateMatch from '../screens/CreateMatch/index';

const Stack = createStackNavigator();

export default ({isSingIn, singIn}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSingIn === false && (
          <>
            <Stack.Screen
              name={'SingIn'}
              options={{
                headerShown: false,
              }}>
              {props => <SingIn {...props} onSingIn={singIn} />}
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
};
