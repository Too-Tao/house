import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/header';
import Gongge from './components/gongge';
import Ad from './components/ad';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Gongge />
        <Ad />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
