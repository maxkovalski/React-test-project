import axios from 'axios';
import Store from './store';
import { getUsersSuccess, deleteUserSuccess, userProfileSuccess } from '../actions/user-actions';


//СНАЧАЛА НАСТРОИТЬ STORE!!!!!!

export function addUser(name, lastName){
    axios.post('http://cardslessons.com/user', {
        firstName: name,
        lastName: lastName
      })
      .then(function (response) {
        Store.dispatch(postUsersSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });  
}


export function getUsers() {
  return axios.get('http://cardslessons.com/user')
    .then(response => {
      Store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}
