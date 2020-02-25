import React from 'react';
import { View } from 'react-native';
import { UserList } from '../components/user-list'
import { observer } from "mobx-react"

const NUM_OF_COLUMNS_LIST = 1
@observer
export class HomeScreen extends React.Component {
    render(){
        return (
            <View>
            <UserList 
            numColumns={NUM_OF_COLUMNS_LIST} 
            data={this.props.data} 
            style={{flexDirection: 'row'}}/>
            </View> 
          )
    }
}

