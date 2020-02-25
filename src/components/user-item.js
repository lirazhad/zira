import React from 'react';
import { Avatar, Card } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

export const UserItem  = ({style, avatar, firstName, lastName, email}) => (
<View style={styles.container}> 
    {/* avatar */}
    <View style={styles.fieldStyle}>
        <Avatar
        rounded
        source={{ uri: avatar }}
        />
    </View>
    {/* first name */}
    <View style={styles.fieldStyle}>
        <Text>{firstName}</Text>
    </View>
    {/* last name */}
    <View style={styles.fieldStyle}>
         <Text>{lastName}</Text>
    </View>
    {/* email */}
    <View style={styles.fieldStyle}>
         <Text>{email}</Text>
    </View>
  </View> 
)

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',  
      margin: 6, 
      borderRadius: 6, 
      alignItems: 'center',  
      backgroundColor: 'yellow'
    },
    fieldStyle: {
        margin: 6
    }
  })