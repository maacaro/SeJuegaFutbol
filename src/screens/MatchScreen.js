import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Body,
  Icon,
  Text,
  Button,
  List,
  ListItem,
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Location from './LocationScreen';

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

const MatchForm = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [location, setLocation] = useState('');

  const [players, setPlayers] = useState({});

  const [numberOfSelectedItems, setNumberOfSelectedItems] = useState(0);

  const [isLocationModalVisible, setLocationModalVisible] = useState(false);
  const [isPlayersModalVisible, setPlayersModalVisible] = useState(false);

  const [matchDate, setDate] = useState('mm/dd/yyyy');
  const [matchTime, setTime] = useState('hh/mm AM');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = date => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
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
    const formtedDate = `${monthNames[month]} ${day} - ${year}`;
    hideDatePicker();
    setDate(formtedDate);
  };

  const handleTimeConfirm = date => {
    const minutes = date.getMinutes();
    const time =
      date.getHours() > 12
        ? `${date.getHours() % 12}:${minutes} PM`
        : `${date.getHours()}:${minutes} AM`;

    hideTimePicker();
    setTime(time);
  };

  const handlePlayerOnPress = index => {
    let nextPlayers = [...players];
    nextPlayers[index].isSelected = !nextPlayers[index].isSelected;
    setPlayers(nextPlayers);
  };

  useEffect(() => {
    setPlayers(listOfPlayers);
  }, []);

  return (
    <Container>
      <Content>
        <TextInput
          style={styles.matchTitleInput}
          placeholder="Match Title"
          maxLength={50}
        />
        <List>
          <ListItem onPress={showDatePicker}>
            <Body>
              <View style={styles.fixToText}>
                <Icon style={styles.icon} type="FontAwesome" name="calendar" />
                <Text style={styles.label}>Choose a Date</Text>
              </View>
              <Text style={styles.inputContent}>{matchDate}</Text>
            </Body>
          </ListItem>
          <ListItem onPress={showTimePicker}>
            <Body>
              <View style={styles.fixToText}>
                <Icon style={styles.icon} type="FontAwesome" name="clock-o" />
                <Text style={styles.label}>Select a Time</Text>
              </View>
              <Text style={styles.inputContent}>{matchTime}</Text>
            </Body>
          </ListItem>
          <ListItem onPress={() => setLocationModalVisible(true)}>
            <Body>
              <View style={styles.fixToText}>
                <Icon style={styles.icon} ios="ios-pin" android="md-pin" />
                <Text style={styles.label}>Add a Location</Text>
              </View>
              <Text style={styles.inputContent}>{location.toString()}</Text>
            </Body>
          </ListItem>
          <ListItem onPress={() => setPlayersModalVisible(true)}>
            <Body>
              <View style={styles.fixToText}>
                <Icon
                  style={styles.icon}
                  ios="ios-people"
                  android="md-people"
                />
                <Text style={styles.label}>Add Players</Text>
              </View>
              <Text style={styles.inputContent}>{8}</Text>
            </Body>
          </ListItem>
        </List>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
        <Modal visible={isLocationModalVisible}>
          <TouchableOpacity onPress={() => setLocationModalVisible(false)}>
            <Text> close </Text>
          </TouchableOpacity>
          <Location onSelect={setLocation} />
          <Button full onPress={() => setLocationModalVisible(false)}>
            <Text>Done</Text>
          </Button>
        </Modal>
        <Modal visible={isPlayersModalVisible}>
          <TouchableOpacity onPress={() => setPlayersModalVisible(false)}>
            <Text> close </Text>
          </TouchableOpacity>
          <Players
            data={listOfPlayers}
            onPlayerPress={index => {
              handlePlayerOnPress(index);
            }}
          />
          <Button
            block
            onPress={() => {
              setPlayersModalVisible(false);
            }}>
            <Text>DONE</Text>
          </Button>
        </Modal>
      </Content>
      <Button block primary>
        <Text> Create Match </Text>
      </Button>
    </Container>
  );
};
MatchForm.navigationOptions = {
  title: 'se juega futbol',
};

export default MatchForm;

const FlatListItemSeparator = () => <View style={styles.line} />;

const Players = ({data, onPlayerPress}) => {
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
        <Text style={styles.number}>{'numberOfSelectedItems'}</Text>
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

const styles = StyleSheet.create({
  row: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
  },
  icon: {
    color: 'black',
  },
  matchTitleInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15,
  },
  matchTitle: {
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 18,
  },
  label: {
    color: 'blue',
    letterSpacing: 0.5,
  },
  inputContent: {
    marginLeft: 0,
    color: '#666664',
  },
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
  iconFloating: {
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
