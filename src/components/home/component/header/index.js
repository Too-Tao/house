import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftWrapper}></View>
        <TextInput style={styles.inputWrapper} />
        <View style={styles.rightWrapper}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    // justifyContent: 'space-around',
    backgroundColor: 'green',
  },
  leftWrapper: {
    height: 50,
    flexBasis: 65,
    marginLeft: 15,
    backgroundColor: 'white',
  },
  inputWrapper: {
    flex: 1,
    width: 300,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  rightWrapper: {
    height: 50,
    flexBasis: 65,
    marginRight: 15,
    backgroundColor: 'white',
  },
});
