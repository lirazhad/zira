import React from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { colors,  SMALL_MARGIN} from '../constants/style-constants'

export const UserItem  = ({style, avatar, firstName, lastName, email}) => (
<View style={[styles.container, style]}> 
    <View style={styles.fieldStyle}>
        <Avatar
        rounded
        source={{ uri: avatar }}
        />
    </View>
    <View style={styles.fieldStyle}>
        <Text>{firstName}</Text>
    </View>
    <View style={styles.fieldStyle}>
         <Text>{lastName}</Text>
    </View>
    <View style={styles.fieldStyle}>
         <Text>{email}</Text>
    </View>
  </View> 
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',  
      margin: SMALL_MARGIN, 
      borderRadius: 6, 
      alignItems: 'center',  
      backgroundColor: colors.GRAY
    },
    fieldStyle: {
        margin: SMALL_MARGIN
    }
  })