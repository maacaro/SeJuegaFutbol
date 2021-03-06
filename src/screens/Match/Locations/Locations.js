import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {Container, Content, Button, Text, Input, Form, Item} from 'native-base';
import {ListItem} from 'react-native-elements';

const DEFAULT_CENTER_COORDINATE = [-72.213858, 7.7866108];

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWFhY2FybyIsImEiOiJjazN3em1reDIwZXAzM21tajQzeTh5Nmk3In0.2Br_dCgco9OLWrgtI9imNQ',
);
//MapboxGL.setConneced(true);
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  title: {marginTop: 10, marginBottom: 20, fontWeight: 'bold'},
  container: {
    marginTop: 10,
    height: 350,
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  selected: {backgroundColor: '#FA7B5F'},
});

export default class Location extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    const {onLocationOnPress, locations, selected} = this.props;
    return (
      <Container>
        <Content padder>
          <Form>
            <Item>
              <Input placeholder="City & State or zip code" />
            </Item>
          </Form>
          <Button block>
            <Text>Search</Text>
          </Button>
          <View style={styles.container}>
            <MapboxGL.MapView style={styles.map}>
              <MapboxGL.Camera
                defaultSettings={{
                  centerCoordinate: DEFAULT_CENTER_COORDINATE,
                  zoomLevel: 16,
                }}
              />
            </MapboxGL.MapView>
          </View>
          <Text style={styles.title}>SOCCER FIELDS</Text>
          {locations.map((location, index) => (
            <ListItem
              topDivider
              title={
                (selected === index && `${location.title} selected`) ||
                location.title
              }
              subtitle={location.address}
              onPress={() => onLocationOnPress(index)}
            />
          ))}
        </Content>
      </Container>
    );
  }
}
