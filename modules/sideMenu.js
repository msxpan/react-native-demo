'use strict'

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Menu,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Swiper from 'react-native-swiper';
import SideMenu from 'react-native-side-menu';


const Application=require('./tabNavigator');

var MOCKED_MOVIES_DATA = [{
  title: 'Title',
  year: '2015',
  posters: {
    thumbnail: 'https://facebook.github.io/react/img/logo_og.png'
  }
}, ];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var movie = MOCKED_MOVIES_DATA[0];

// 侧边栏
class AwesomeApp extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({
      isOpen,
    });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: true,
      selectedItem: item,
    });
  }

  render() {
    // const menu = <Menu navigator={navigator}/>;

    const menu = <View style={styles.slide}><Text style={styles.title}>{movie.title}</Text></View>;

    const leftButtonConfig = {
      title: 'menu',
      handler: () => this.toggle(),
    };

    const titleConfig = {
      title: '新媒体榜单',
    };

    return (
      <SideMenu
        style={styles.slide}
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <NavigationBar title={{ title: '新媒体榜单','tintColor':'#fff' }} style={styles.navigation} leftButton={<Image source={require('../images/icon-menu.png')} style={styles.icon}/>}/>
        <Application/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  // 顶部
  icon:{
    width: 30,
    height: 30,
    marginTop:6,
    marginLeft:6,
  },
  navigation:{
    backgroundColor:'#3076B0',
  },
});

module.exports = AwesomeApp;