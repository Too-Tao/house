import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftWrapper}>
          <Text style={styles.textStyle}>
            南昌&nbsp;&nbsp;
            <Icon name="angle-down" size={16} />
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} />
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.textStyle}>
            <Icon name="map-marker" size={16} />
            &nbsp;地图
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#5DD5C8',
  },
  textStyle: {
    width: 50,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    color: '#ffffff',
  },
  leftWrapper: {
    width: 50,
    height: 50,
    marginLeft: 15,
  },
  inputWrapper: {
    flex: 1,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  inputStyle: {
    height: 40,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  rightWrapper: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
});
