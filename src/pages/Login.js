import React from 'react';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { useForm } from '../hooks/useForm';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
  const [{ email, password }, handleInputChange] = useForm({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  });
  const {loading, msgError, login} = useLogin({email, password});
  return (
    <div className="login">
      <div>
        <h1>Iniciar Sesión</h1>
        {
          msgError && (<h4> {msgError}!</h4>)
        }
        <Form>
          <Input
            id='Correo'
            type="text"
            name="email"
            placeholder="Correo"
            required={true}
            autoComplete="false"
            onChange={handleInputChange}
            value={email}
          />
          <Input
            id='Password'
            type="password"
            name="password"
            required={true}
            placeholder="Contraseña"
            autoComplete="false"
            onChange={handleInputChange}
            value={password}
          />
          <Button
            type="submit"
            disabled={loading}
            onClick={login}
            title="Ingresar"
          />
        </Form>
      </div>
    </div>
  )
};
