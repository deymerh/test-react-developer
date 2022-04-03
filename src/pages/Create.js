import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from '../hooks/useForm';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { Input } from '../components/Input';

export const Create = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [created, setCreated] = useState(false);
  const [{name, job}, handleInputChange, resetValues] = useForm({
    name: 'Deymer',
    job: 'Programmer'
  });
  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`/api/users`, {
        name: name,
        job: job
      });
      if (res.status === 201) {
        setCreated(true);
      }
    } catch (err) {
      console.log(err);
      setError(true)
      resetValues();
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className="create">
      <h3>Crear Usuario</h3>
      <Form>
        <label htmlFor="name">Nombre</label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="false"
          required
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="job">Ocupación</label>
        <Input
          id="job"
          type="text"
          name="job"
          placeholder="Ocupación"
          required="required"
          autoComplete="false"
          onChange={handleInputChange}
          value={job}
        />
        <Button
          onClick={createUser}
          type="submit"
          disabled={loading}
          title={loading ? 'Creando Usuario...' : 'Crear Usuario'}
        />
        {
          created && (<h4>Usuario {name} creado correctamente!</h4>)
        }
        {
          error && (<h4 className="error">Ocurrion un error al crear el Usuario {name}</h4>)
        }
      </Form>
    </div>
  )
}
