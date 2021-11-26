import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [name, setName] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [error, setError] = useState('');
    const {newRegister}= useAuth();

    const handleSubmit = e =>{
        e.preventDefault()
        
    }

    const handleName = e =>{
        setName(e.target.value);
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const handleSubmitRegister = ()=>{
        newRegister(email, password, name)
        .then((result) => {
            setError('');
          })
          .catch(error =>{
            setError(error.message);
        })

        
    }

    return (
        <div className="my-5  ">
            <h2>Creact Account</h2>

            

            <Form onSubmit={handleSubmit} className="container w-25 shadow-lg mb-5">
            <Form.Control onBlur={handleName} placeholder="First name" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
          <p className='text-danger'>{error}</p>
        </Form.Group>
        <Button
          onClick={handleSubmitRegister}
          className="mb-2"
          variant="primary"
          type="submit"
        >Register</Button>
      </Form>
      <p>Already Have an Account ? <Link to="login">Login</Link> </p>
        </div>
    );
};

export default Register;