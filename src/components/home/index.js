import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/header';
import Gongge from './components/gongge';
import Ad from './components/ad';
import List from './components/list';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Gongge />
        <Ad />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
