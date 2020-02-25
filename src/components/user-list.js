import React from 'react';
import { FlatList } from 'react-native';
import { UserItem } from '../components/user-item'
import { USER_FIRST_NAME, USER_LAST_NAME, USER_EMAIL, USER_AVATAR_LINK} from '../constants/user-constants'
import { observer } from "mobx-react"

@observer
export class UserList extends React.Component {
   
    render(){
        const {data, numColumns, style} = this.props
        console.log(data)
        return(
        <FlatList
            data={data}
            renderItem={(userObj) => {
                return(
                <UserItem 
                firstName={userObj['item'][USER_FIRST_NAME]}
                lastName={userObj['item'][USER_LAST_NAME]}
                email={userObj['item'][USER_EMAIL]}
                avatar={userObj['item'][USER_AVATAR_LINK]}
                style={style}
                />)
                }
            }
            numColumns={numColumns}
            keyExtractor={(item, index) => index.toString()}
            />)
    }
       
}




