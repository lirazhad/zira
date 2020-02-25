import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchHeader from '../components/search-header'
import { HomeScreen, FeaturedScreen } from '../screens'
import { SearchStore } from '../logic/search-store'

const URL = 'https://reqres.in/api/users'
const HOME_TAB_TEXT = 'Home'
const FEATURES_TAB_TEXT = 'Features'

const Tab = createMaterialTopTabNavigator();

let store = new SearchStore
 // define screens
 const HomeScreenComponent = () =>
 <HomeScreen data={store.homeUsers}/>

 const FeaturedScreenComponent = () =>
 <FeaturedScreen data={store.homeUsers}/>


export class RootNavigator extends React.Component{

  componentDidMount(){
    store.fetchUsersInfo(URL)
  }
 
  render(){
  return (
    <NavigationContainer 
    onStateChange={(
      route)=>{
      store.screenType = route['index']
      }}>
      <SearchHeader onChangeText={store.onChangeText} value={store.searchHeaderTextInput1}/>
      <Tab.Navigator swipeEnabled={false}>
        <Tab.Screen name={HOME_TAB_TEXT} component={HomeScreenComponent}/>
        <Tab.Screen name={FEATURES_TAB_TEXT} component={FeaturedScreenComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}