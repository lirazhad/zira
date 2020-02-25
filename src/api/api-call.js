import * as axios from 'axios';


export async function getData(url){

    let res

    await axios.get(url)
    .then(function (response) {
      res = response
    })
    .catch(async function (error) {
      res = error

    });
    return res
} 