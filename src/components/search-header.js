import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { 
  HEADER_HEIGHT, 
  BORDER_WIDTH, 
  BORDER_RADIUS, 
  STANDART_MARGIN, 
  FONT_SIZE, 
  STANDART_PADDING,
  ICON_SIZE 
} from '../constants/style-constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import { observer } from "mobx-react"

@observer
export class  SearchHeader extends React.Component{

  render(){
    const {onChangeText, homeScreenValue, featureSreenValue, screenType} = this.props
    return(
  <View style={styles.container}>
     <View style={styles.icon}>
     <Icon name="search" size={ICON_SIZE}/>
     </View>
    <TextInput
        placeholder={'Search'}
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={onChangeText} 
        value={screenType === 0? homeScreenValue: featureSreenValue}
        autoCapitalize = 'none'
        />
  </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    margin: STANDART_MARGIN,
  },
  inputStyle: {
    flex: 5,
    paddingHorizontal: STANDART_PADDING,
    fontSize: FONT_SIZE,
    lineHeight: 17,
    },
    icon:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default SearchHeader
