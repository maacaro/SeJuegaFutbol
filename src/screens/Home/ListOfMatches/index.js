import React from 'react';
import ListOfMatches from './ListOfMatches';
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
    title: 'UCAT vs UNET',
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
export default () => <ListOfMatches matches={matches} />;
