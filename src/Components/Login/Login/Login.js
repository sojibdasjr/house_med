import React, { useState } from 'react';
import initializAuthentaction from '../../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

initializAuthentaction();
const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const [email, setEmail]= useState({});
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [islogin, setIslogin] = useState(false);

    const auth = getAuth();
    const handleGoogleSingin = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user;
        })

    }

    const handleRegister = e =>{
       e.preventDefault();
       if(password.length <6 ){
        setError('passwrod must be use 6 characthers')   
        return;
       }

       if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password must contain 2 upper case.')
            return;
       } 

       islogin? processLogin(email, password) : registerNewUser(email, password);
        
    }

    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');

        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const toggole =(e)=>{
        setIslogin(e.target.checked);
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = e=>{
        setPassword(e.target.value)
    }

    const registerNewUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
        })
 
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div>
            <h1 className="text-primary">Please Regester</h1>
            <Form onSubmit={handleRegister} className="container w-25 shadow-lg mb-5">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
    <p className='text-danger'>{error}</p>
  </Form.Group>
  <Form.Group onChange={toggole} className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" />
    <button  className="btn btn-warning mx-2 mb-2">Already {islogin ? "loging": "Register"}?</button>
  </Form.Group>
  
  <Button  className="mb-2" variant="primary" type="submit" >
    { islogin? "login" : "Register"}
  </Button>
  <p>New To House-Medical <Link to="/register">Creact Account</Link> </p>
</Form>

            <button className="btn btn-warning"> Login With Google</button>
            
        </div>
    );
};

export default Login;