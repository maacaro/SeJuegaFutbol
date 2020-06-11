import React from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {Icon, Text} from 'native-base';
import {styles} from '../match.styles';

const FlatListItemSeparator = () => <View style={styles.line} />;

export default ({data, onPlayerPress}) => {
  const numberOfSelectedPlayers = data.filter(
    player => player.isSelected === true,
  ).length;
  return (
    <>
      <Text style={styles.title}>Select Players</Text>
      <FlatList
        data={data}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({item: {isSelected, thumbnailUrl, name}, index}) => (
          <TouchableOpacity
            style={
              (isSelected === false && styles.list) || [
                styles.list,
                styles.selected,
              ]
            }
            onPress={() => {
              onPlayerPress(index);
            }}>
            <Image source={{uri: thumbnailUrl}} style={styles.thumbnailImage} />
            <Text style={styles.lightText}>{name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.numberBox}>
        <Text style={styles.number}>{numberOfSelectedPlayers}</Text>
      </View>
      <TouchableOpacity style={styles.iconFloating}>
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
    </>
  );
};
