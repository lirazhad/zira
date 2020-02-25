/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 import { RootNavigator } from './src/navigation/root-navigator'

const App: () => React$Node = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.topMargin}/>
        <RootNavigator/>
        </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%', 
    width: '100%'
  },
  topMargin: {
    height: 50, 
    width: '100%'
  },
});

export default App;
