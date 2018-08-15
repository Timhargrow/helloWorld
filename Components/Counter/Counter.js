import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props){
    super(props);
    this.state = {
        count: 0,
    }
}
  render() {
    if (this.state.count >= 0 ){
    } else {
            Alert.alert('Value Not Accepted!')
            this.setState({
                count: this.state.count 
            })
    };
    return (
      <View style= {styles.container}>
        <Button
            style= {styles.container}
            title="+"
            onPress={() => {this.setState({
                count: this.state.count + 1
            })
        }}
        />
            <Text style= {styles.container}>
            {this.state.count}
            </Text>
        <Button
            style= {styles.container}
            title="-"
            onPress={() => {this.setState({
                count: this.state.count - 1
            })
        }}

        />
        <View>

        </View>
        </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});
