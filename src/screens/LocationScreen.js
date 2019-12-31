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
  container: {
    marginTop: 10,
    height: 350,
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export default class Location extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    const {onSelect, onClose} = this.props;
    onSelect('San Cristobal');
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
          <Text style={{marginTop: 10, marginBottom: 20, fontWeight: 'bold'}}>
            SOCCER FIELDS
          </Text>
          <ListItem topDivider title={'UCAT'} subtitle={'Sabana Larga'} />
          <ListItem
            topDivider
            title={'El Dorado'}
            subtitle={'ferrero tamayo'}
          />
        </Content>
        <Button full onPress={() => onClose()}>
          <Text>Done</Text>
        </Button>
      </Container>
    );
  }
}
