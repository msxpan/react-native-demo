'use strict'

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

const SwiperBanner=require('./banner');
const ScrollableTab=require('./scrollableTab');
const Example=require('./listview');

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
                <Example/>
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
});


module.exports = Application;
