import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  H3,
  CardItem,
} from 'native-base';

export default class HomeScreen extends Component {
  render() {
    const {matches} = this.props;
    return (
      <Container>
        <Header noLeft>
          <Left />
          <Body>
            <Title>seJuegaFutbol</Title>
            <Subtitle>All Matches</Subtitle>
          </Body>
          <Right />
        </Header>
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
        <TouchableOpacity style={styles.floatingAddButton}>
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
