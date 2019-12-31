import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Button, Text} from 'native-base';
import {toggleItemFrom} from '../helpers/index';

const avaiblePlayersData = [
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

const FlatListItemSeparator = () => <View style={styles.line} />;

const AvaiblePlayers = props => {
  const {selectedPlayers} = props;
  const [playerList, setPlayerList] = useState([]);
  const [numberOfSelectedItems, setNumberOfSelectedItems] = useState(0);

  useEffect(() => {
    const playerListWithSelected = avaiblePlayersData.map(avaiblePlayer => {
      if (selectedPlayers[avaiblePlayer.id] !== undefined) {
        return selectedPlayers[avaiblePlayer.id];
      }
      return avaiblePlayer;
    });
    setPlayerList(playerListWithSelected);
  }, [selectedPlayers]);

  const toggleSelection = toggleItemFrom(playerList);

  const handleItemOnPress = (index, isSelected) => {
    setPlayerList(toggleSelection(index));
    if (isSelected === true) {
      setNumberOfSelectedItems(numberOfSelectedItems - 1);
    } else {
      setNumberOfSelectedItems(numberOfSelectedItems + 1);
    }
  };
  const {onSelect, onClose} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Players</Text>
      <FlatList
        data={playerList}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item: {isSelected, thumbnailUrl, name}, index}) => (
          <TouchableOpacity
            style={
              (isSelected === false && styles.list) || [
                styles.list,
                styles.selected,
              ]
            }
            onPress={() => handleItemOnPress(index, isSelected)}>
            <Image source={{uri: thumbnailUrl}} style={styles.thumbnailImage} />
            <Text style={styles.lightText}>{name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.numberBox}>
        <Text style={styles.number}>{numberOfSelectedItems}</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <View>
          <Icon
            raised
            type="MaterialIcons"
            name="people"
            color="#686cc3"
            size={30}
          />
        </View>
      </TouchableOpacity>
      <Button
        full
        onPress={() => {
          onSelect(
            playerList
              .filter(player => player.isSelected === true)
              .reduce(
                (acum, currentPlayer) => ({
                  ...acum,
                  [currentPlayer.id]: {...currentPlayer},
                }),
                {},
              ),
          );
          onClose();
        }}>
        <Text>Done</Text>
      </Button>
    </View>
  );
};

export default AvaiblePlayers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  lightText: {
    width: 200,
    paddingLeft: 15,
    fontSize: 18,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  icon: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  numberBox: {
    position: 'absolute',
    bottom: 105,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: 330,
    zIndex: 3,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {fontSize: 14, color: '#000'},
  selected: {backgroundColor: '#FA7B5F'},
  thumbnailImage: {width: 40, height: 40, margin: 6},
});
