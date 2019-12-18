import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
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

const MatchForm = props => {
  const {navigate} = props.navigation;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
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
          <ListItem onPress={() => navigate('Location')}>
            <Body>
              <View style={styles.fixToText}>
                <Icon style={styles.icon} ios="ios-pin" android="md-pin" />
                <Text style={styles.label}>Add a Location</Text>
              </View>
              <Text style={styles.inputContent}>{matchDate.toString()}</Text>
            </Body>
          </ListItem>
          <ListItem onPress={showDatePicker}>
            <Body>
              <View style={styles.fixToText}>
                <Icon
                  style={styles.icon}
                  ios="ios-people"
                  android="md-people"
                />
                <Text style={styles.label}>Add Players</Text>
              </View>
              <Text style={styles.inputContent}>{matchDate.toString()}</Text>
            </Body>
          </ListItem>
        </List>
        <Button block primary>
          <Text> Create Match </Text>
        </Button>
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
      </Content>
    </Container>
  );
};
MatchForm.navigationOptions = {
  title: 'se juega futbol',
};

export default MatchForm;

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
});
