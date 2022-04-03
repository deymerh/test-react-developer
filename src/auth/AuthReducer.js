import { types } from './../types/index';

export const authReducer = ( state = {}, action ) => {

  switch ( action.type ) {
    case types.login:
      return {
          ...state,
          token: action.payload.token
      }
    default:
      return state;
  }

}