import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const HOME_TAB_TEXT = 'Home'
const FEATURES_TAB_TEXT = 'Features'

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


export function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        swipeEnabled={false}>
        <Tab.Screen name={HOME_TAB_TEXT} component={HomeScreen} />
        <Tab.Screen name={FEATURES_TAB_TEXT} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}