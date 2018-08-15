import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import React, {Component} from 'react';
import Counter from './Components/Counter/Counter';

export default class App extends Component{

  render() {
    return (
      <View>
        <Counter style = {styles.container}  />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  border: {
    borderRadius: 2
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
