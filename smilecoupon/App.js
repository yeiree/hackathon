import React from 'react';
import App2 from './app/app';

import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';

export default class App extends React.Component {
  render() {
    return(

      <View>
        <App2 />
      </View>
    );
  }
}