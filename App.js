/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import HomeScreen from './src/HomeScreen/HomeScreen';
const matches = [
  {
    id: 1,
    title: 'Juego Amistoso',
    attending: [{Name: 'Manuel'}, {Name: 'Juan'}],
    address: 'Jaula Aurinegra,San Cristobal',
    date: '16 Nov, 2019',
    time: '10:00AM-12:00AM',
  },
  {
    id: 2,
    title: 'UCAT vs Frenos la Russa',
    attending: [
      {Name: 'Manuel'},
      {Name: 'Juan'},
      {Name: 'luis'},
      {Name: 'rafa'},
    ],
    address: 'UCAT sabana larga,San Cristobal',
    date: '24 Nov, 2019',
    time: '10:00AM-12:00AM',
  },
];
const App: () => React$Node = () => {
  return <HomeScreen matches={matches} />;
};

export default App;
