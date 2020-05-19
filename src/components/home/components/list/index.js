import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Tab} from 'beeshell';
import ListItem from './listitem';

const data = [
  {
    houseId: 1001,
    houseType: '0',
    imgURL:
      'https://image1.ljcdn.com/110000-inspection/pc1_eIJ2jziND.jpg.296x216.jpg',
    houseTitle: '龙湖春江丽城',
    address: ['青山湖', '青山湖'],
    area: '108-132m²',
    price: '15500',
    houseStatus: '在售',
    houseMsg: ['住宅', '新开盘', '项目在建'],
  },
  {
    houseId: 1002,
    houseType: '0',
    imgURL:
      'https://image1.ljcdn.com/110000-inspection/pc1_eIJ2jziND.jpg.296x216.jpg',
    houseTitle: '龙湖春江丽城',
    address: ['青山湖', '青山湖'],
    area: '108-132m²',
    price: '15500',
    houseStatus: '在售',
    houseMsg: ['住宅', '新开盘', '项目在建'],
  },
  {
    houseId: 1003,
    houseType: '0',
    imgURL:
      'https://image1.ljcdn.com/110000-inspection/pc1_eIJ2jziND.jpg.296x216.jpg',
    houseTitle: '龙湖春江丽城',
    address: ['青山湖', '青山湖'],
    area: '108-132m²',
    price: '15500',
    houseStatus: '在售',
    houseMsg: ['住宅', '新开盘', '项目在建'],
  },
  {
    houseId: 1004,
    houseType: '0',
    imgURL:
      'https://image1.ljcdn.com/110000-inspection/pc1_eIJ2jziND.jpg.296x216.jpg',
    houseTitle: '龙湖春江丽城',
    address: ['青山湖', '青山湖'],
    area: '108-132m²',
    price: '15500',
    houseStatus: '在售',
    houseMsg: ['住宅', '新开盘', '项目在建'],
  },
];

export default class List extends Component {
  state = {
    value: 1,
  };

  _handleChange = value => {
    this.setState(() => {
      return {
        value,
      };
    });
  };

  _renderItem = ({item}) => {
    return (
      <ListItem
        imgURL={item.imgURL}
        houseTitle={item.houseTitle}
        address={item.address}
        area={item.area}
        price={item.price}
        houseStatus={item.houseStatus}
        houseMsg={item.houseMsg}
      />
    );
  };
  render() {
    const {value} = this.state;
    const tabs = [
      {value: 1, label: '推荐'},
      {value: 2, label: '新房'},
      {value: 3, label: '二手房'},
      {value: 4, label: '租房'},
      {value: 5, label: '商务办公'},
      {value: 6, label: '公寓酒店'},
    ];
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <Tab
          style={styles.tabStyle}
          value={value}
          data={tabs}
          scrollable={true}
          activeColor={'#5DD5C8'}
          onChange={item => this._handleChange(item.value)}
        />
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    height: 40,
  },
});
