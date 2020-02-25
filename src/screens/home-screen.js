import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { UserList } from '../components/user-list'

export class HomeScreen extends React.Component {
    render(){
        console.warn(this.props.data)

        return (
            <View style={{ width: '100%', height: '100%'}}>
            <UserList numOfColumns={1} data={this.props.data}/>
            </View> 
          )
    }
}

