import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { UserItem } from '../components/user-item'
import { USER_FIRST_NAME, USER_LAST_NAME, USER_EMAIL, USER_AVATAR_LINK} from '../constants/user-constants'
import { observer } from "mobx-react"

@observer
export class UserList extends React.PureComponent {
   
    render(){
        const {data, numColumns, style} = this.props

        console.warn(data)
        return(<FlatList
            data={data}
            renderItem={(userObj) => {
              const userFirstName = userObj['item'][USER_FIRST_NAME] 
              const userLastName = userObj['item'][USER_LAST_NAME]
              const userEmail = userObj['item'][USER_EMAIL]
              const userAvater = userObj['item'][USER_AVATAR_LINK]

                return(
                <UserItem 
                firstName={userFirstName}
                lastName={userLastName}
                email={userEmail}
                avatar={userAvater}
                style={style}
                />)
              
            
            }
            }
            numColumns={numColumns}
            keyExtractor={(item, index) => index.toString()}
            />)
    }
       
}




