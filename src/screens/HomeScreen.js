import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Body,
  Icon,
  Text,
  Card,
  H3,
  CardItem,
} from 'native-base';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'se juega futbol',
  };
  render() {
    const {navigate} = this.props.navigation;
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

    return (
      <Container>
        <Content padder>
          {matches.map(({id, title, attending, address, date, time}) => (
            <Card key={id}>
              <CardItem>
                <Body>
                  <H3 style={styles.matchTitle}>{title}</H3>
                  <Text style={styles.attending}>
                    <Icon
                      style={styles.attending}
                      type="MaterialIcons"
                      name="people"
                    />{' '}
                    {attending.length} confirmaron
                  </Text>
                  <Text>
                    <Icon
                      ios="ios-pin"
                      android="md-pin"
                      style={styles.matchDetails}
                    />{' '}
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
          ))}
        </Content>
        <TouchableOpacity
          onPress={() => navigate('Match')}
          style={styles.floatingAddButton}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  floatingAddButton: {
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#686cc3',
  },
  fabText: {fontSize: 30, color: 'white'},
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
