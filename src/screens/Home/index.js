import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text} from 'native-base';
import ListOfMatches from './ListOfMatches/index';

const Home = props => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <Container>
      <Content padder>
        <ListOfMatches />
      </Content>
      <TouchableOpacity
        onPress={() => navigate('Match')}
        style={styles.floatingAddButton}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </Container>
  );
};

Home.navigationOptions = {
  title: 'se juega futbol',
};

export default Home;

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
});
