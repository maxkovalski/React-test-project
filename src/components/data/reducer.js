//СНАЧАЛА НАСТРОИТЬ STORE!!!!!!
const initialState = {
  users: [{
    id: 0,
    name: 'Max',
    lastName: 'Kovalski',
    fullName: 'Max Kovalski'
  }],
};

const userReducer = function(state = initialState, action) {
  if (action.type === 'GET_USERS_SUCCESS') {
    for (var i = 0; i < action.user.length; i++)
    {
      state.push(action.user)[i];
    }
  }
  return state;
  }

export default userReducer;