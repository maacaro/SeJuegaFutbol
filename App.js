import * as React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import user from './src/reducers/user.reducers';
import Navigator from './src/Navigator';
//import AsyncStorage from '@react-native-community/async-storage';
//import {authReducer} from './src/library/reducers';

export default App;

const store = createStore(combineReducers({user}));

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
