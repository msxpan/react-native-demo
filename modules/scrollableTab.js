'use strict'

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

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

const styles = StyleSheet.create({
  
});

module.exports = ScrollableTab;