import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const selfWidth = 0.9 * width;
const iconArr = [
  require('./images/全部房源.png'),
  require('./images/二手房.png'),
  require('./images/租房.png'),
  require('./images/商业办公.png'),
  require('./images/公寓酒店.png'),
  require('./images/找小区.png'),
  require('./images/即将开盘.png'),
  require('./images/近期预售.png'),
  require('./images/小面积.png'),
  require('./images/专车接送.png'),
];
const iconTitle = [
  '全部房源',
  '二手房',
  '租房',
  '商业办公',
  '公寓酒店',
  '找小区',
  '即将开盘',
  '近期预售',
  '小面积',
  '专车接送',
];

const gonggeItem = [
  [require('./images/全部房源.png'), '全部房源'],
  [require('./images/二手房.png'), '二手房'],
  [require('./images/租房.png'), '租房'],
  [require('./images/商业办公.png'), '商业办公'],
  [require('./images/公寓酒店.png'), '公寓酒店'],
  [require('./images/找小区.png'), '找小区'],
  [require('./images/即将开盘.png'), '即将开盘'],
  [require('./images/近期预售.png'), '近期预售'],
  [require('./images/小面积.png'), '小面积'],
  [require('./images/专车接送.png'), '专车接送'],
];

export default class Gongge extends Component {
  render() {
    return (
      <View style={styles.container}>
        {gonggeItem.map((item, index) => {
          return (
            <View style={styles.icon} key={index}>
              <Image style={styles.image} source={item[0]} />
              <Text style={styles.iconText}>{item[1]}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 180,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  icon: {
    width: 55,
    height: 80,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  image: {
    width: 55,
    height: 55,
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
