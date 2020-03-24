import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Icon, Text, Card, H3, CardItem} from 'native-base';

export default ({matches}) => {
  return matches.map(({id, title, attending, address, date, time}) => (
    <Card key={id}>
      <CardItem>
        <Body>
          <H3 style={styles.matchTitle}>{title}</H3>
          <Text style={styles.attending}>
            <Icon style={styles.attending} type="MaterialIcons" name="people" />{' '}
            {attending.length} confirmaron
          </Text>
          <Text>
            <Icon ios="ios-pin" android="md-pin" style={styles.matchDetails} />{' '}
            {address}
          </Text>

          <Text>
            <Icon
              style={styles.matchDetails}
              type="FontAwesome"
              name="calendar"
            />{' '}
            {date}
          </Text>
          <Text>
            <Icon
              style={styles.matchDetails}
              type="FontAwesome"
              name="clock-o"
            />{' '}
            {time}
          </Text>
        </Body>
      </CardItem>
    </Card>
  ));
};
const styles = StyleSheet.create({
  attending: {
    marginBottom: 8,
    fontSize: 14,
  },
  matchTitle: {
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 18,
  },
  matchDetails: {
    fontSize: 12,
  },
});
