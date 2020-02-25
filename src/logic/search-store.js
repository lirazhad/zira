import { computed, observable, action } from 'mobx'
import { getData } from '../api/api-call'

export class SearchStore {

    user ={}

    @observable users = [];

    searchHeaderTextInput

    onChangeText = (text) =>{ 
        searchHeaderTextInput = text;
    }


   async fetchUsersInfo(url){
    
    const data = await getData(url)
    console.warn(data)

    }
     
}