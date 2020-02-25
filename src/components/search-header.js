import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '../constants/style-constants'
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchHeader  = ({onChangeText, value}) => (
  <View style={styles.container}>
     <View style={{
       flex: 1, 
       justifyContent: 'center',
       alignItems: 'center'}}>
     <Icon name="search" size={20}/>
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

    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    margin: 8,
  },
  inputStyle: {
    flex: 5,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 17,
    height: '100%'
    }
})

export default SearchHeader
