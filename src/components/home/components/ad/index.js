/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const imageArr = [
  require('./images/热卖楼盘.png'),
  require('./images/低价出售.png'),
];

export default class Ad extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.ad, {backgroundColor: '#B8C9FF', marginLeft: 10}]}>
          <Image style={styles.leftImage} source={imageArr[0]} />
          <View style={styles.textWrap}>
            <Text style={styles.adTitle}>热卖楼盘</Text>
            <Text style={styles.adMsg}>最低单价7000起</Text>
          </View>
        </View>
        <View
          style={[styles.ad, {backgroundColor: '#FFC7E0', marginRight: 10}]}>
          <View style={styles.textWrap}>
            <Text style={styles.adTitle}>低价出售</Text>
            <Text style={styles.adMsg}>最低单价7000起</Text>
          </View>
          <Image style={styles.rightImage} source={imageArr[1]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 80,
    marginTop: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 4,
  },
  ad: {
    width: 180,
    height: 66,
    borderRadius: 5,
  },
  rightImage: {
    width: 90,
    height: 54,
    left: 90,
    top: 10,
  },
  leftImage: {
    width: 180,
    height: 66,
    borderRadius: 5,
  },
  textWrap: {
    position: 'absolute',
    top: 10,
    left: 3,
  },
  adTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  adMsg: {
    fontSize: 12,
  },
});
