import React, {useState, useEffect} from 'react';
import Match from './Match';

const listOfPlayers = [
  {
    isSelected: false,
    id: 1,
    name: 'Manuel Castro',
    thumbnailUrl: 'https://via.placeholder.com/50',
  },
  {
    isSelected: false,
    id: 2,
    name: 'Hebreth Strube',
    thumbnailUrl: 'https://via.placeholder.com/50',
  },
  {
    isSelected: false,
    id: 3,
    name: 'Javier Malpica',
    thumbnailUrl: 'https://via.placeholder.com/50useEffect',
  },
  {
    isSelected: false,
    id: 4,
    name: 'Luis Zambrano',
    thumbnailUrl: 'https://via.placeholder.com/50',
  },
];

const listOfLocations = [
  {title: 'UCAT', address: 'Sabana Larga', isSelected: false},
  {title: 'El Dorado', address: 'La Popita', isSelected: false},
];
// todo move to another file
var monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default () => {
  const [players, setPlayers] = useState(listOfPlayers);
  const [locations, setLocations] = useState([]);
  const handlePlayerOnPress = index => {
    let nextPlayers = [...players];
    nextPlayers[index] = {
      ...nextPlayers[index],
      isSelected: !nextPlayers[index].isSelected,
    };
    setPlayers(nextPlayers);
  };
  useEffect(() => {
    setPlayers(listOfPlayers);
    setLocations(listOfLocations);
  }, []);
  return (
    <Match
      locations={locations}
      monthNames={monthNames}
      players={players}
      handlePlayerOnPress={handlePlayerOnPress}
    />
  );
};
