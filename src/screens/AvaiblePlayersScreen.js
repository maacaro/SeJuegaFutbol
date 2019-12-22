import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
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

const AvaiblePlayers = () => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    setPlayerList(avaiblePlayersData);
  }, []);
  const numberOfSelectedItems = playerList.filter(
    item => item.isSelected === true,
  ).length;
  const toggleSelection = toggleItemFrom(playerList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaible Players</Text>
      <FlatList
        data={playerList}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={
              (item.isSelected === false && styles.list) || [
                styles.list,
                styles.selected,
              ]
            }
            onPress={() => setPlayerList(toggleSelection(index))}>
            <Image
              source={{uri: item.thumbnailUrl}}
              style={{width: 40, height: 40, margin: 6}}
            />
            <Text style={styles.lightText}>{item.name}</Text>
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
            color="#e3e3e3"
            size={30}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AvaiblePlayers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
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
    bottom: 20,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  numberBox: {
    position: 'absolute',
    bottom: 75,
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
});
