import { computed, observable, action } from 'mobx'
import { getData } from '../api/api-call'

export class SearchStore {

    @observable users = ['a', 'b', 'c'];

    searchHeaderTextInput

    onChangeText = (text) =>{ 
        searchHeaderTextInput = text;
    }


   async fetchUsersInfo(url){
       // this.users = getData(url)

        for (i = 0; i < 10; i++) {
            await this.users.push('ss')
         }
    }
     
}