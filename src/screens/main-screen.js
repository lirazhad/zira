import React from 'react';
import { View } from 'react-native';
import { observer } from "mobx-react"

@observer
export class MainScreen extends React.Component {
    render(){
        return (
            <View style={{width: '100%', height: '100%', backgroundColor: 'yellow'}}>
       
            </View> 
          )
    }
}
