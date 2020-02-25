import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchHeader from '../components/search-header'
import { HomeScreen } from '../screens'
import { SearchStore } from '../logic/search-store'

const url = 'https://reqres.in/api/users'
const HOME_TAB_TEXT = 'Home'
const FEATURES_TAB_TEXT = 'Features'

const Tab = createMaterialTopTabNavigator();

let store = new SearchStore

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



export function RootNavigator() {
  store.fetchUsersInfo(url)
  // define screens
  const HomeScreenComponent = () =>
  <HomeScreen data={store.users}/>
  
  return (
    <NavigationContainer 
    onStateChange={(route)=>{console.warn(route['index'])}}>
      <SearchHeader onChangeText={store.onChangeText} value={store.searchHeaderTextInput}/>
      <Tab.Navigator swipeEnabled={false}>
        <Tab.Screen name={HOME_TAB_TEXT} component={HomeScreenComponent}/>
        <Tab.Screen name={FEATURES_TAB_TEXT} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}