import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { UserList } from '../components/user-list'
import { observer } from "mobx-react"

const NUM_OF_COLUMNS_GRID = 3
@observer
export class FeaturedScreen extends React.Component {
    render(){
        return (
            <View>
            <UserList 
            numColumns={NUM_OF_COLUMNS_GRID} 
            data={this.props.data}
            style={{flexDirection: 'column'}}/>
            </View> 
          )
    }
}

