import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { UserItem } from '../components/user-item'

export const UserList  = ({numColumns, data}) => (
   
       <FlatList
        data={data}
        renderItem={({item}) => <UserItem/>
        }
        numColumns={numColumns}
        keyExtractor={(item, index) => index.toString()}
        />) 
    




