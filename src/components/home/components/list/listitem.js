import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default class ListItem extends Component {
  render() {
    const {
      imgURL,
      houseTitle,
      address,
      area,
      price,
      houseStatus,
      houseMsg,
    } = this.props;
    return (
      <View style={styles.listItemStyle}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: imgURL,
          }}
        />
        <View style={styles.msgStyle}>
          <View>
            <Text style={styles.msgTitle}>{houseTitle}</Text>
          </View>
          <View style={styles.msg}>
            <Text style={styles.msgText}>{address[0]}</Text>
            <Text style={styles.msgText}>{address[1]}</Text>
            <Text style={styles.msgText}>建面</Text>
            <Text style={styles.msgText}>{area}</Text>
          </View>
          <View>
            <Text style={styles.price}>{price}元/m²</Text>
          </View>
          <View style={styles.msg}>
            <Text style={styles.text1}>{houseStatus}</Text>
            <Text style={styles.msgText}>{houseMsg[0]}</Text>
            <Text style={styles.msgText}>{houseMsg[1]}</Text>
            <Text style={styles.msgText}>{houseMsg[2]}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItemStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
    height: 105,
  },
  imgStyle: {
    width: 137,
    height: 100,
  },
  msgStyle: {
    width: 210,
    height: 110,
  },
  msgTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  msg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  msgText: {
    color: '#899096',
  },
  text1: {
    width: 35,
    textAlign: 'center',
    backgroundColor: '#77D289',
    color: '#fff',
  },
  price: {
    fontSize: 20,
    color: '#ED5C48',
  },
});
