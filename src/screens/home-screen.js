import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { UserList } from '../components/user-list'
import { observer } from "mobx-react"
import { SearchStore } from '../logic/search-store'
@observer
export class HomeScreen extends React.Component {
    render(){
        return (
            <View style={{ width: '100%', height: '100%'}}>
            <UserList numOfColumns={1} data={this.props.data}/>
            </View> 
          )
    }
}

