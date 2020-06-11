if (__DEV__) {
  import('./src/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}
import * as React from 'react';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import user from './src/reducers/user.reducers';
import Navigator from './src/navigator';
import {reactotron} from './src/ReactotronConfig';

export default App;

const middlewares = [];
// Initialising a middlewares array, later on you can add a
// saga middleware for example
if (__DEV__) {
  // Check if it's development mode
  const reactotronMiddleware = reactotron.createEnhancer();
  // Creating Reactotron "data capturer"
  middlewares.push(reactotronMiddleware);
  // And pushing it to the middlewares array
}
const store = createStore(combineReducers({user}), compose(...middlewares)); // Creating a store with given configuration

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
