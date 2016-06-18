'use strict'

const tool=require('./modules/tool');

tool.alertMsg()

import {
  AppRegistry,
} from 'react-native';



const AwesomeApp=require('./modules/sideMenu');
AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);