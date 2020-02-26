import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchHeader from '../components/search-header'
import { HomeScreen, FeaturedScreen } from '../screens'
import { SearchStore } from '../logic/search-store'
import { REQUEST_STATE_PANDDING } from '../constants/data-constants'
import { observer } from "mobx-react"

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

@observer
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
      store.changeScreenType(route['index'])
      }}>
      {store.state === REQUEST_STATE_PANDDING?
        <ActivityIndicator size="large" style={styles.loader}/>
        : null
       }

      <SearchHeader 
      onChangeText={store.onChangeText} 
      screenType={store.screenType}
      homeScreenValue={store.searchHeaderTextInput1}
      featureSreenValue={store.searchHeaderTextInput2}
      />
      <Tab.Navigator swipeEnabled={false}>
        <Tab.Screen name={HOME_TAB_TEXT} component={HomeScreenComponent}/>
        <Tab.Screen name={FEATURES_TAB_TEXT} component={FeaturedScreenComponent} />
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