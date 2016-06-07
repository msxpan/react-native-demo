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
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import NavigationBar from 'react-native-navbar';
import Swiper from 'react-native-swiper';
import Banner from 'react-native-banner';


var MOCKED_MOVIES_DATA = [{
  title: 'Title',
  year: '2015',
  posters: {
    thumbnail: 'https://facebook.github.io/react/img/logo_og.png'
  }
}, ];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var movie = MOCKED_MOVIES_DATA[0];

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

    this.banners = [{
      title: 'beauty 1',
      image: 'http://static.open-open.com/news/uploadImg/20150204/20150204212635_429.png',
    }, {
      title: 'beauty 2',
      image: 'http://static.open-open.com/news/uploadImg/20150204/20150204212635_429.png',
    }, {
      title: 'The next banner has no title',
      image: 'http://static.open-open.com/news/uploadImg/20150204/20150204212635_429.png',
    }, {
      // title: 'no title',
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
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: 'Hello, world',
    };

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

class AwesomeApp extends Component {

  constructor(props) {
    super(props);

    // this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};

    this.state = {
      clickTitle: 'You can try clicking beauty',
      defaultIndex: 0,
      selectedTab: 'home',
    }

    this.defaultIndex = 0;
  }

  render() {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: 'Hello, world',
    };

    return (
      <View style={styles.container}>
          <NavigationBar title={titleConfig} rightButton={rightButtonConfig} />
            <TabNavigator>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="Home"
                renderIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                renderSelectedIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <SwiperBanner/>
              </TabNavigator.Item>

              <TabNavigator.Item
                selected={this.state.selectedTab === 'profile'}
                title="Profile"
                renderIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                renderSelectedIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                badgeText="2"
                onPress={() => this.setState({ selectedTab: 'profile' })}>
                <TabHome/>
              </TabNavigator.Item>
              
              <TabNavigator.Item
                selected={this.state.selectedTab === 'other'}
                title="other"
                renderIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                renderSelectedIcon={() => <Image source={{uri: movie.posters.thumbnail}} />}
                badgeText="3"
                onPress={() => this.setState({ selectedTab: 'other' })}>
                <TabHome/>
              </TabNavigator.Item>
            </TabNavigator>
        </View>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  rightContainer: {
    // flex:1,
    backgroundColor: "#ccc",
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


  // text: {
  //   color: '#fff',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // }
});

AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);