import React from 'react';
import { View, FlatList, Text } from 'react-native';

export const UserList  = ({numColumns, data}) => (
   
       <FlatList
        data={data}
        renderItem={({item}) => <Text>{item}</Text>
        }
        numColumns={numColumns}
        keyExtractor={(item, index) => index.toString()}
        />) 
    




