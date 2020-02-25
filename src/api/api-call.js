import * as axios from 'axios';

//'https://reqres.in/api/users'
export const getData = (url) => {

    axios.get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
} 