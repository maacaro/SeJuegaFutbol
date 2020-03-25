import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SeJuegaFutbol</Text>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Emter email.. "
          placeholderTextColor="#003f5c"
          onChangeText={() => {}}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.forgotText}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
  },
  forgotText: {
    color: 'white',
    fontSize: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});
