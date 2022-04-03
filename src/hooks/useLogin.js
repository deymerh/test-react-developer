import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types";

export const useLogin = ({email, password}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (token) => {
    dispatch({
      type: types.login,
      payload: { token }
    });
}

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/login`, {
        email: email,
        password: password
      });
      localStorage.setItem('token', JSON.stringify(data.token));
      handleLogin(data.token);
      navigate('/home', {replace: true});
    } catch (error) {
      setMsgError('Error de credenciales');
    }
    finally {
      setLoading(false);
    }
  }
  return {
    login,
    loading,
    msgError
  }
}
