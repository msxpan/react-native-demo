/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Menu,
  ScrollView,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import NavigationBar from 'react-native-navbar';
import Swiper from 'react-native-swiper';
import Banner from 'react-native-banner';

import SideMenu from 'react-native-side-menu';
import ScrollableTabView from 'react-native-scrollable-tab-view';

var MOCKED_MOVIES_DATA = [{
  title: 'Title',
  year: '2015',
  posters: {
    thumbnail: 'https://facebook.github.io/react/img/logo_og.png'
  }
}, ];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var movie = MOCKED_MOVIES_DATA[0];

// 滑动标签
class ScrollableTab extends Component {
  render() {
    return (
      <ScrollableTabView tabBarUnderlineColor='#2AADE4' tabBarBackgroundColor='#3076B0' tabBarActiveTextColor='#2AADE4' tabBarInactiveTextColor='#ffffff'>
        <ScrollView tabLabel="当前热点" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="每日热点" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="榜单热点" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}


class TabHome extends Component {
  render() {
    return (
      <View>
            <Text style={styles.title}>{movie.title}</Text>
      </View>
    )
  }
}

class SwiperBanner extends Component {

  constructor(props) {
    super(props);

    // 轮播图
    this.banners = [{
      title: '榜单新闻一',
      image: 'http://static.open-open.com/news/uploadImg/20150204/20150204212635_429.png',
    }, {
      title: '榜单新闻二',
      image: 'http://static.open-open.com/news/uploadImg/20150204/20150204212635_429.png',
    }, {
      title: '榜单新闻三',
      image: 'http://static.open-open.com/news/uploadImg/20150204/20150204212635_429.png',
    }, {
      title: '榜单新闻四',
      image: 'http://static.open-open.com/news/uploadImg/20150204/20150204212635_429.png',
    }, ];

    // this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};

    this.state = {
      clickTitle: 'You can try clicking beauty',
      defaultIndex: 0,
      selectedTab: 'home',
    }

    this.defaultIndex = 0;
  }

  clickListener(index) {
    this.setState({
      clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
    })
  }

  onMomentumScrollEnd(event, state) {
    console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
    this.defaultIndex = state.index;
  }

  render() {

    return (

      <View>
        <Banner banners={this.banners} defaultIndex={this.defaultIndex} onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)} intent={this.clickListener.bind(this)} />

        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
        </View>

    );
  }
}

// 底部标签
class Application extends Component {

  constructor(props) {
    super(props);

    // this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};

    this.state = {
      clickTitle: 'You can try clicking beauty',
      defaultIndex: 0,
      selectedTab: 'wb',
    }

    this.defaultIndex = 0;
  }

  render() {


    return (
      <View style={styles.container}>
            <TabNavigator>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'wb'}
                title="微博"
                titleStyle={styles.bottomTabTitle}
                tabStyle={styles.bottomTab}
                selectedTitleStyle={styles.selectedTitle}
                // renderIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                // renderSelectedIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                onPress={() => this.setState({ selectedTab: 'wb' })}>
                <SwiperBanner/>
              </TabNavigator.Item>

              <TabNavigator.Item
                selected={this.state.selectedTab === 'wc'}
                title="微信"
                titleStyle={styles.bottomTabTitle}
                tabStyle={styles.bottomTab}
                selectedTitleStyle={styles.selectedTitle}
                // renderIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                // renderSelectedIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                onPress={() => this.setState({ selectedTab: 'wc' })}>
                <ScrollableTab/>
              </TabNavigator.Item>

              <TabNavigator.Item
                selected={this.state.selectedTab === 'other'}
                title="解读"
                titleStyle={styles.bottomTabTitle}
                tabStyle={styles.bottomTab}
                selectedTitleStyle={styles.selectedTitle}
                // renderIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                // renderSelectedIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                onPress={() => this.setState({ selectedTab: 'other' })}>
                <TabHome/>
              </TabNavigator.Item>
            </TabNavigator>
        </View>
    );
  }
}


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
        <NavigationBar title={{ title: '新媒体榜单','tintColor':'#fff' }} style={styles.navigation} leftButton={<Image source={require('./images/icon-menu.png')} style={styles.icon}/>}/>
        <Application/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  swiper: {
    flex: 1,
    height: 100,
  },
  wrapper: {
    flex: 1,
    height: 200,
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    backgroundColor: '#97CAE5',
  },
  slide3: {
    backgroundColor: '#92BBD9',
  },
  rightContainer: {
    // flex:1,
    backgroundColor: "#cccccc",
    justifyContent: 'center',
    // flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 100,
    height: 81,
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
  // 底部标签
  bottomTabTitle:{
    fontSize:16,
    height:30,
    color:'#fff',
  },
  selectedTitle:{
    color:'#2AADE4',
  },
  bottomTab:{
    backgroundColor:'#3076B0',
  },
  // 滑动标签
  tabBarText:{
    color:'#ffffff',
  }
});

AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);