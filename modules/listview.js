'use strict'

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import GiftedListView from 'react-native-gifted-listview';

class Example extends Component {
  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      var rows = ['row '+((page - 1) * 5 + 1), 'row '+((page - 1) * 5 + 2), 'row '+((page - 1) * 5 + 3),'row '+((page - 1) * 5 + 4),'row '+((page - 1) * 5 + 5),'row '+((page - 1) * 5 + 1), 'row '+((page - 1) * 5 + 2), 'row '+((page - 1) * 5 + 3),'row '+((page - 1) * 5 + 4),'row '+((page - 1) * 5 + 5),'row '+((page - 1) * 5 + 1), 'row '+((page - 1) * 5 + 2), 'row '+((page - 1) * 5 + 3),'row '+((page - 1) * 5 + 4),'row '+((page - 1) * 5 + 5)];
      if (page === 10) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });        
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  }

  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPress(rowData) {
    console.log(rowData+' pressed');
  }

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        // onPress={() => this._onPress(rowData)}
      >  
        <Text>{rowData}</Text>
      </TouchableHighlight>
    );
  }

  _renderRefreshableFetchingView(){
    alert('renderRefreshableFetchingView')
  }

  _renderRefreshableWillRefreshView(){
    alert('renderRefreshableWillRefreshView')
  }

  _renderRefreshableWaitingView(){
    alert('renderRefreshableWaitingView')

  }
  render() {    
    return (
      <View style={styles.container}>
        <View style={styles.navBar} />
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          initialListSize={12}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          // paginationFetchigView={this._renderRefreshableFetchingView}
          // paginationAllLoadedView={this._renderRefreshableWillRefreshView}
          // paginationWaitingView={this._renderRefreshableWaitingView}

          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          // refreshableViewHeight={50} // correct height is mandatory
          // refreshableDistance={40}
          // refreshableFetchingView={this._renderRefreshableFetchingView}
          // refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
          // refreshableWaitingView={this._renderRefreshableWaitingView}

          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}

          refreshableTintColor="#ccc"
        />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
    padding: 10,
    height: 44,
  },
});

module.exports = Example;
