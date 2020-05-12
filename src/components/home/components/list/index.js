import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const selectItemArr = ['推荐', '新房', '二手房', '租房'];

export default class List extends Component {
  render() {
    return (
      <View>
        <View style={styles.selectWrap}>
          {selectItemArr.map((item, index) => {
            return (
              <View key={index} style={styles.selectItem}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  selectItem: {
    width: 50,
    height: 30,
    marginTop: 15,
  },
  itemText: {
    width: 50,
    height: 30,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
});
