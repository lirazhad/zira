import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '../constants/style-constants'


const SearchHeader  = ({onChangeText, value}) => (
  <View style={styles.container}>
     <View style={{height: '100%', flex: 1, backgroundColor: 'green'}}>

     </View>
    <TextInput
        placeholder={'Search'}
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={onChangeText} 
        value={value}
        autoCapitalize = 'none'
        />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30
  },
  inputStyle: {
    flex: 5,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 17,
    height: '100%',
    backgroundColor: 'yellow'
    }
})

export default SearchHeader
