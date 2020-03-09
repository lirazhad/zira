import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MainScreen, AddPostScreen, FollowersScreen } from '../screens';
import { SearchStore } from '../logic/search-store';
import { observer } from "mobx-react";


const HOME_TAB_TEXT = 'Home'
const ADD_POST_TAB_TEXT = 'Posts'
const FOLLOWERS_TAB_TEXT = 'Followers'


const Tab = createMaterialTopTabNavigator();

let store = new SearchStore
 // define screens
 const MainScreenComponent = () =>
 <MainScreen/>

 const AddPostScreenComponent = () =>
 <AddPostScreen/>

 const FollowersScreenComponent = () =>
 <FollowersScreen/>


@observer
export class DashboardScreen extends React.Component{

 
  render(){
  return (
    <NavigationContainer 
    independent={true}
    onStateChange={(
      route)=>{}}>

      <Tab.Navigator>
        <Tab.Screen name={HOME_TAB_TEXT} component={MainScreenComponent}/>
        <Tab.Screen name={ADD_POST_TAB_TEXT} component={AddPostScreenComponent} />
        <Tab.Screen name={FOLLOWERS_TAB_TEXT} component={FollowersScreenComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute', 
    bottom: 150, 
    zIndex: 99, 
    width: '100%'
  }
});