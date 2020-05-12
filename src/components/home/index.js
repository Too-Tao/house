import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/header';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
