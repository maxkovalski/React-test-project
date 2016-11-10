import * as types from './action-types.js';


//распарсить массив данных

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function postUsersSuccess(response) {
  return {
    type: types.POST_USER_SUCCESS,
    response
  };
}
