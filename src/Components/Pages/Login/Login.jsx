
import React, { useContext, useState } from "react";
import { Button, Container, Form} from "react-bootstrap";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Providers.jsx/AuthProviders";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
   const {signInUser,signInWithGoogle,signInWithGitHub} = useContext(AuthContext);

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const [error,setError] = useState('');
   const handleSignIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    setError('');
    signInUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, {replace:true})
    })
    .catch(error=>{
      console.log(error);
      setError('Email or password did not match')
    })
    
   }
   const handleGoogle = () =>{
        signInWithGoogle(googleProvider)
        .then((result) => {
            const user = result.user;
            // setUser(user);
            console.log(user);
            navigate(from, {replace:true})
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
   }
   const handleGitHub = ( ) =>{
        signInWithGitHub(gitHubProvider)
        .then((result) => {
            const user = result.user;
            // setUser(user);
            console.log(user);
            navigate(from, {replace:true})
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });

   }
    return (
        <div className="mt-5 login-page">
           <Container className="w-50 mx-auto">
      <Form onSubmit={handleSignIn} >
        <h2>Please login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text>
            Don't have an account?<Link to='/register'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <Button onClick={handleGoogle} variant="success" className="my-3"><FaGoogle className="fs-3"></FaGoogle> Sign up with Google</Button> <br />
      <Button onClick={handleGitHub} variant="secondary"><FaGithub className="fs-3"/> Sign Up with GitHUb</Button>
      <p className="text-danger fs-2">{error}</p>
    </Container>
    
        </div>
    );
};

export default Login;