import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';
import AppHeader from './components/AppHeader';
import * as Speech from 'expo-speech';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  speak = () => {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  };
  render() {
    return (
      <View style={styles.view}>
        <AppHeader />

        <TextInput
          style={styles.input1}
          placeholder="    Enter Your Text Here.."
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value = {this.state.text}
        />

        <TouchableOpacity style={styles.button} onPress={this.speak}>
          <Text> Click Here </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  input1: {
    width: 300,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#FFC4A1',
    marginLeft: 33,
  },
  button: {
    width: 150,
    height: 30,
    marginLeft: 110,
    marginTop: 60,
    borderWidth: 2,
    backgroundColor: '#D4F2FF',
  },
});
