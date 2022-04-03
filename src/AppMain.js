import React, {useEffect, useReducer} from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/AuthReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse( localStorage.getItem('user'));
}

export const AppMain = () => {
  
  const [token, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if ( !token ) return;
    localStorage.setItem('user', JSON.stringify(token));
  }, [token])

  return (
    <AuthContext.Provider value={{
      token,
      dispatch
    }}>
    <AppRouter />
    </AuthContext.Provider>
  )
};