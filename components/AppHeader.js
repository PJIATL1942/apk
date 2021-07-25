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
export default class AppHeader extends Component{
  render(){
    return <View style = {{flex : 0.25 }}>
    <Header backgroundColor = {'cyan'}
    centerComponent = {{
      text : 'Text To Speech Converter',
      style:{
        frontSize : 17,
        color : 'black'
      }
    }}
    />
</View>    
  }
}