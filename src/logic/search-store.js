import { autorun,  observable, action, computed } from 'mobx'
import { getData } from '../api/api-call'
import { 
    DATA, 
    REQUEST_STATE_PANDDING, 
    REQUEST_STATE_ERROR, 
    REQUEST_STATE_DONE } from '../constants/data-constants'
import { USER_FIRST_NAME, USER_LAST_NAME, USER_EMAIL } from '../constants/user-constants'    

export class SearchStore {

    @observable users = []
    @observable state = REQUEST_STATE_PANDDING
    @observable searchHeaderTextInput1 
    @observable searchHeaderTextInput2

    @observable homeUsers = []
    @observable featuresUsers = []

    screenType = 0

    @action 
    async filterList(text) {
        let tempArry = []
        for (var key in this.users) {
            let obj = this.users[key];
            let show
            Object.keys(obj).forEach(async function(key) {
                if(
                    key === USER_FIRST_NAME || 
                    key === USER_LAST_NAME || 
                    key === USER_EMAIL
                    ){
                        if(obj[key].includes(text)){
                          show = true
                        }
                } 
            })
            if(show){
                await tempArry.push(obj)
            } 
        }
        this.homeUsers.replace(tempArry)
      }
      
    @action 
    onChangeText = (text) =>{
        if(this.screenType === 0){
          this.searchHeaderTextInput1 = text;  
        }else{
          this.searchHeaderTextInput2 = text; 
        } 
        console.warn(this.searchHeaderTextInput1)
        this.filterList(text)
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
            this.homeUsers.replace(this.users)
            this.featuresUsers.replace(this.users)
        },
        error => {
            this.state = REQUEST_STATE_ERROR
        }
     )
    }
     
}