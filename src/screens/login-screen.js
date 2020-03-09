import React from 'react';
import { Image, SafeAreaView, StyleSheet} from 'react-native';

class LoginScreen extends React.Component {

    render(){

        return (
          <SafeAreaView style={styles.container}>
       
          </SafeAreaView> 
        )
    }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
  },
  logo:{
      width: 200,
      height: 200
  }
  ,})



export {LoginScreen};