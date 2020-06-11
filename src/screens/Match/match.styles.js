import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
