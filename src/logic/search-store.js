import { computed,  observable, action } from 'mobx'
import { getData } from '../api/api-call'
import { 
    DATA, 
    REQUEST_STATE_PANDDING, 
    REQUEST_STATE_ERROR, 
    REQUEST_STATE_DONE } from '../constants/data-constants'

export class SearchStore {

    @observable users = []
    @observable state = REQUEST_STATE_PANDDING
    @observable  searchHeaderTextInput


    onChangeText = (text) =>{ 
        searchHeaderTextInput = text;
    }

   @action
   async fetchUsersInfo(url){
    this.users = []
   await getData(url) 
     .then(
        async users => {   
            const arry = users.data
            for (var key in arry[DATA]) {
                 await this.users.push(arry[DATA][key])
            }
            this.state =  REQUEST_STATE_DONE
        },
        error => {
            this.state = REQUEST_STATE_ERROR
        }
     )
    }
     
}