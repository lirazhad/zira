import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { UserItem } from '../components/user-item'
import { USER_FIRST_NAME, USER_LAST_NAME, USER_EMAIL, USER_AVATAR_LINK} from '../constants/user-constants'
import { observer } from "mobx-react"

@observer
export class UserList extends React.PureComponent {
   

    render(){
        const {data, numColumns} = this.props

        return(<FlatList
            data={data}
            renderItem={(userObj) => {
              return(
             //[1,3,12].includes(foo).includes(this.state.filter)&& this.state.filter.length > 0)?  
             <UserItem 
             firstName={userObj['item'][USER_FIRST_NAME]}
             lastName={userObj['item'][USER_LAST_NAME]}
             email={userObj['item'][USER_EMAIL]}
             avatar={userObj['item'][USER_AVATAR_LINK]}
            />)
            }}
            numColumns={numColumns}
            keyExtractor={(item, index) => index.toString()}
            />)
    }
       
}




