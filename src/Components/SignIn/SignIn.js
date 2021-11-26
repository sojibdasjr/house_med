import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const { signInUsingGoogle } = useAuth();
  const { handleNewLogin } = useAuth();
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/services";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_uri);
    });
   
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogingReg = () => {
    handleNewLogin(email, password)
    .then((result) => {
     
    })
    .catch(error=>{
      setError(error.message);
  })

  };
  return (
    <div className="mt-5 pt-5">
      <h2>Sign In</h2>
      <Form onSubmit={handleLogin} className="container w-25 shadow-lg mb-5">
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
          onClick={handleLogingReg}
          className="mb-2"
          variant="primary"
          type="submit"
        >Login</Button>
      </Form>

      <p>
        New To House-Medical <Link to="/register">Creact Account</Link>{" "}
      </p>
      <button className="btn btn-warning my-5 " onClick={handleGoogleLogin}>
        Google Sign In
      </button>
    </div>
  );
};

export default SignIn;
