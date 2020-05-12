import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './home';
import QuotationScreen from './quotation';
import RecommendScreen from './recommend';
import UserScreen from './user';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'home';
  } else if (routeName === 'Quotation') {
    iconName = 'university';
  } else if (routeName === 'Recommend') {
    iconName = 'compass';
  } else if (routeName === 'User') {
    iconName = 'user-circle';
  }
  return <FontAwesome name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: '首页',
      },
    },
    Quotation: {
      screen: QuotationScreen,
      navigationOptions: {
        title: '行情',
      },
    },
    Recommend: {
      screen: RecommendScreen,
      navigationOptions: {
        title: '推荐',
      },
    },
    User: {
      screen: UserScreen,
      navigationOptions: {
        title: '我的',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#495057',
      inactiveTintColor: '#CED4DA',
    },
  },
);

export default createAppContainer(TabNavigator);
