import React from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

export const UserItem  = ({style, avatar, firstName, lastName, email}) => (
<View style={styles.container}> 
    {/* avatar */}
    <View>
        <Avatar
        rounded
        source={{
            uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        />
    </View>
    {/* first name */}
    <View>
        <Text>{'first name'}</Text>
    </View>
    {/* last name */}
    <View>
         <Text>{'last name'}</Text>
    </View>
    {/* email */}
    <View>
         <Text>{'email'}</Text>
    </View>
  </View> 
)

const styles = StyleSheet.create({
    container: {
      width: 100,
      backgroundColor: 'yellow'
    }
  })