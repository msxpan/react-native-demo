'use strict'

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

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

const styles = StyleSheet.create({
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
});

module.exports = SwiperBanner;